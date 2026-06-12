const DATA = {

    categories: [
        { id: 1, name: "Old School", color: "#ff6b6b", order: 1 },
        { id: 2, name: "Cocktails", color: "#4ecdc4", order: 2 },
        { id: 3, name: "Mocktails", color: "#1dd1a1", order: 3 },
        { id: 4, name: "Bières", color: "#feca57", order: 4 },
        { id: 5, name: "Softs", color: "#54a0ff", order: 5 }
    ],

    drinks: [
        { id: 1, name: "Mojito", category: 2, price: 8 },
        { id: 2, name: "Spritz", category: 2, price: 9 },
        { id: 3, name: "Coca", category: 5, price: 3 },
        { id: 4, name: "Grimbergen", category: 4, price: 5 },
        { id: 5, name: "Chinquante Blonde", category: 4, price: 6 },
        { id: 6, name: "Chinquante Triple", category: 4, price: 6 },
        { id: 7, name: "Chinquante Saison", category: 4, price: 6 }
    ],

    rooms: Array.from({ length: 20 }, (_, i) => i + 1),

    consumptions: JSON.parse(localStorage.getItem("bar_consumptions") || "[]")
};


// 🔥 ADD CONSOMMATION
function addConsumption(room, drinkId) {
    const drink = DATA.drinks.find(d => d.id === drinkId);

    DATA.consumptions.push({
        id: Date.now(),
        room,
        drinkId,
        drinkName: drink.name,
        price: drink.price,
        date: new Date().toISOString()
    });

    saveData();
}

// 💾 SAVE
function saveData() {
    localStorage.setItem("bar_consumptions", JSON.stringify(DATA.consumptions));
}

// 📅 TODAY
function getTodayConsumptions() {
    const today = new Date().toDateString();

    return DATA.consumptions.filter(c =>
        new Date(c.date).toDateString() === today
    );
}

// 🗑 DELETE
function deleteConsumption(id) {
    DATA.consumptions = DATA.consumptions.filter(c => c.id !== id);
    saveData();
}
