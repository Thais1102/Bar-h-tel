// ============================================
// DONNÉES DE L'APPLICATION
// ============================================

const DATA = {
    categories: [
        { id: 1, name: 'Softs', color: '#87CEEB', order: 1 },
        { id: 2, name: 'Bières', color: '#D4AF37', order: 2 },
        { id: 3, name: 'Vins', color: '#722F37', order: 3 },
        { id: 4, name: 'Apéritifs', color: '#FF6B6B', order: 4 },
        { id: 5, name: 'Cocktails', color: '#6C5CE7', order: 5 },
        { id: 6, name: 'Mocktails', color: '#00B894', order: 6 }
    ],

    drinks: [
        // SOFTS
        { id: 1, name: 'Eau', category: 1, price: 0.50, order: 1 },
        { id: 2, name: 'Café', category: 1, price: 1.00, order: 2 },
        { id: 3, name: 'Thé', category: 1, price: 1.00, order: 3 },
        { id: 4, name: 'Jus d\'orange', category: 1, price: 1.50, order: 4 },
        { id: 5, name: 'Jus de pomme', category: 1, price: 1.50, order: 5 },
        { id: 6, name: 'Soda', category: 1, price: 1.50, order: 6 },
        { id: 7, name: 'Limonade', category: 1, price: 1.50, order: 7 },
        
        // BIÈRES
        { id: 8, name: 'Bière blonde', category: 2, price: 2.50, order: 1 },
        { id: 9, name: 'Bière brune', category: 2, price: 2.50, order: 2 },
        { id: 10, name: 'Bière sans alcool', category: 2, price: 2.00, order: 3 },
        
        // VINS
        { id: 11, name: 'Vin blanc', category: 3, price: 3.50, order: 1 },
        { id: 12, name: 'Vin rouge', category: 3, price: 3.50, order: 2 },
        { id: 13, name: 'Vin rosé', category: 3, price: 3.50, order: 3 },
        
        // APÉRITIFS
        { id: 14, name: 'Pastis', category: 4, price: 3.00, order: 1 },
        { id: 15, name: 'Kir', category: 4, price: 2.50, order: 2 },
        { id: 16, name: 'Kir royal', category: 4, price: 4.00, order: 3 },
        { id: 17, name: 'Spritz', category: 4, price: 4.00, order: 4 },
        
        // COCKTAILS
        { id: 18, name: 'Mojito', category: 5, price: 5.00, order: 1 },
        { id: 19, name: 'Daïquiri', category: 5, price: 5.00, order: 2 },
        { id: 20, name: 'Margarita', category: 5, price: 5.00, order: 3 },
        { id: 21, name: 'Piña Colada', category: 5, price: 5.00, order: 4 },
        { id: 22, name: 'Cosmopolitan', category: 5, price: 5.00, order: 5 },
        
        // MOCKTAILS
        { id: 23, name: 'Virgin Mojito', category: 6, price: 3.00, order: 1 },
        { id: 24, name: 'Shirley Temple', category: 6, price: 3.00, order: 2 },
        { id: 25, name: 'Mocktail Fruit', category: 6, price: 3.50, order: 3 },
        { id: 26, name: 'Smooth Mango', category: 6, price: 3.50, order: 4 }
    ],

    rooms: [
        1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 
        37, 38, 39, 40, 41, 42, 43, 45
    ],

    consumptions: JSON.parse(localStorage.getItem('bar_hotel_consumptions') || '[]')
};

// Fonction pour sauvegarder les consommations
function saveConsumptions() {
    localStorage.setItem('bar_hotel_consumptions', JSON.stringify(DATA.consumptions));
}

// Fonction pour ajouter une consommation
function addConsumption(roomNumber, drinkId) {
    const drink = DATA.drinks.find(d => d.id === drinkId);
    const category = DATA.categories.find(c => c.id === drink.category);
    
    const consumption = {
        id: Date.now(),
        date: new Date().toISOString(),
        room: roomNumber,
        drinkName: drink.name,
        categoryName: category.name,
        price: drink.price
    };
    
    DATA.consumptions.push(consumption);
    saveConsumptions();
    return consumption;
}

// Fonction pour supprimer une consommation
function deleteConsumption(consumptionId) {
    DATA.consumptions = DATA.consumptions.filter(c => c.id !== consumptionId);
    saveConsumptions();
}

// Fonction pour obtenir les consommations du jour
function getTodayConsumptions() {
    const today = new Date().toISOString().split('T')[0];
    return DATA.consumptions.filter(c => c.date.startsWith(today));
}

// Fonction pour exporter en CSV
function exportToCSV() {
    const headers = ['Date', 'Heure', 'Chambre', 'Catégorie', 'Boisson', 'Prix'];
    const rows = DATA.consumptions.map(c => {
        const date = new Date(c.date);
        return [
            date.toLocaleDateString('fr-FR'),
            date.toLocaleTimeString('fr-FR'),
            c.room,
            c.categoryName,
            c.drinkName,
            c.price.toFixed(2)
        ];
    });
    
    const csv = [headers, ...rows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `consommations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}