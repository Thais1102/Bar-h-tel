// ============================================
// DATA BAR HÔTEL
// ============================================

const DATA = {
    // ========================================
    // CATÉGORIES
    // ========================================
    categories: [
        { id: 1, name: "Cocktails", color: "#FF6B6B", order: 1 },
        { id: 2, name: "Mocktails", color: "#6C5CE7", order: 2 },
        { id: 3, name: "Planches", color: "#00B894", order: 3 },
        { id: 4, name: "Chauds", color: "#E17055", order: 4 },
        { id: 5, name: "Digestifs & Vins", color: "#2D3436", order: 5 },
        { id: 6, name: "Apéritifs", color: "#0984E3", order: 6 },
        { id: 7, name: "Whiskys / Rhums", color: "#D35400", order: 7 },
        { id: 8, name: "Bières", color: "#F1C40F", order: 8 },
        { id: 9, name: "Softs", color: "#74B9FF", order: 9 }
    ],

    // ========================================
    // BOISSONS (TA CARTE BAR ACTUALISÉE)
    // ========================================
    drinks: [
        // ===== COCKTAILS =====
        { id: 1, name: "Cuba Libre", category: 1, price: 6.00, order: 1 },
        { id: 2, name: "Tequila Sunrise", category: 1, price: 6.00, order: 2 },
        { id: 3, name: "Planteur", category: 1, price: 6.00, order: 3 },
        { id: 4, name: "Americano", category: 1, price: 6.00, order: 4 },
        { id: 5, name: "Manhattan", category: 1, price: 6.00, order: 5 },
        { id: 6, name: "Margarita", category: 1, price: 6.00, order: 6 },
        { id: 7, name: "Mojito", category: 1, price: 7.00, order: 7 },
        { id: 8, name: "Negroni", category: 1, price: 8.00, order: 8 },

        // ===== MOCKTAILS =====
        { id: 9, name: "Le Conquérant", category: 2, price: 5.00, order: 1 },
        { id: 10, name: "Le Tonus", category: 2, price: 5.00, order: 2 },
        { id: 11, name: "L'Impératrice", category: 2, price: 5.00, order: 3 },
        { id: 12, name: "L'Abracadabresque", category: 2, price: 5.00, order: 4 },

        // ===== PLANCHES =====
        { id: 13, name: "La Fromagère", category: 3, price: 7.00, order: 1 },
        { id: 14, name: "La Charcutière", category: 3, price: 7.00, order: 2 },
        { id: 15, name: "La Gourmande", category: 3, price: 10.00, order: 3 },

        // ===== CHAUX / CHAUDS =====
        { id: 16, name: "Ristretto", category: 4, price: 1.30, order: 1 },
        { id: 17, name: "Expresso", category: 4, price: 1.30, order: 2 },
        { id: 18, name: "Double allongé", category: 4, price: 2.30, order: 3 },
        { id: 19, name: "Café latte", category: 4, price: 1.60, order: 4 },
        { id: 20, name: "Chocolat", category: 4, price: 2.30, order: 5 },
        { id: 21, name: "Thé", category: 4, price: 3.00, order: 6 },
        { id: 22, name: "Infusion", category: 4, price: 3.00, order: 7 },

        // ===== DIGESTIFS & VINS =====
        { id: 23, name: "Malibu (4cl)", category: 5, price: 6.00, order: 1 },
        { id: 24, name: "Get 27 (4cl)", category: 5, price: 6.00, order: 2 },
        { id: 25, name: "Get 31 (4cl)", category: 5, price: 6.00, order: 3 },
        { id: 26, name: "Baileys (4cl)", category: 5, price: 6.00, order: 4 },
        { id: 27, name: "Cognac VSOP", category: 5, price: 7.00, order: 5 },
        { id: 28, name: "Calvados", category: 5, price: 7.00, order: 6 },
        { id: 29, name: "Verre de vin", category: 5, price: 3.50, order: 7 },
        { id: 30, name: "Coupe de bulles", category: 5, price: 18.00, order: 8 },

        // ===== APÉRITIFS =====
        { id: 31, name: "Martini", category: 6, price: 3.50, order: 1 },
        { id: 32, name: "Porto", category: 6, price: 3.50, order: 2 },
        { id: 33, name: "Lillet", category: 6, price: 3.50, order: 3 },
        { id: 34, name: "Kir", category: 6, price: 3.50, order: 4 },
        { id: 35, name: "Ricard", category: 6, price: 3.50, order: 5 },
        { id: 36, name: "Aperol", category: 6, price: 3.50, order: 6 },
        { id: 37, name: "Vodka", category: 6, price: 5.00, order: 7 },
        { id: 38, name: "Gin", category: 6, price: 5.00, order: 8 },
        { id: 39, name: "Tequila", category: 6, price: 5.00, order: 9 },

        // ===== WHISKYS / RHUMS =====
        { id: 40, name: "Jack Daniel's", category: 7, price: 5.00, order: 1 },
        { id: 41, name: "Jameson", category: 7, price: 6.00, order: 2 },
        { id: 42, name: "Glenlivet", category: 7, price: 7.00, order: 3 },
        { id: 43, name: "Havana Club", category: 7, price: 5.00, order: 4 },
        { id: 44, name: "Saint James", category: 7, price: 5.00, order: 5 },
        { id: 45, name: "Diplomatico", category: 7, price: 8.00, order: 6 },

        // ===== BIÈRES =====
        { id: 46, name: "Heineken", category: 8, price: 3.50, order: 1 },
        { id: 47, name: "Hoegaarden", category: 8, price: 4.50, order: 2 },
        { id: 48, name: "Desperados", category: 8, price: 4.50, order: 3 },
        { id: 49, name: "IPA locale", category: 8, price: 6.00, order: 4 },
        { id: 50, name: "Cidre", category: 8, price: 3.50, order: 5 },

        // ===== SOFTS =====
        { id: 51, name: "Coca-Cola", category: 9, price: 3.50, order: 1 },
        { id: 52, name: "Coca Zéro", category: 9, price: 3.50, order: 2 },
        { id: 53, name: "Orangina", category: 9, price: 3.50, order: 3 },
        { id: 54, name: "Ice Tea", category: 9, price: 3.50, order: 4 },
        { id: 55, name: "Red Bull", category: 9, price: 5.00, order: 5 }
    ],

    // ========================================
    // CHAMBRES
    // ========================================
    rooms: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],

    // ========================================
    // CONSOMMATIONS
    // ========================================
    consumptions: JSON.parse(localStorage.getItem("bar_consumptions") || "[]")
};

// ============================================
// FONCTIONS
// ============================================

function saveConsumptions() {
    localStorage.setItem("bar_consumptions", JSON.stringify(DATA.consumptions));
}

function addConsumption(room, drinkId) {
    const drink = DATA.drinks.find(d => d.id === drinkId);
    if (!drink) return;

    DATA.consumptions.push({
        id: Date.now(),
        room,
        drinkName: drink.name,
        price: drink.price,
        date: new Date().toISOString()
    });

    saveConsumptions();
}

function getTodayConsumptions() {
    const today = new Date().toISOString().split("T")[0];
    return DATA.consumptions.filter(c => c.date.startsWith(today));
}
