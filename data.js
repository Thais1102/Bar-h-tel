const DATA = {
    categories: [
        { id: 1, name: "Old School", color: "#e74c3c", order: 1 },
        { id: 2, name: "Cocktails", color: "#9b59b6", order: 2 },
        { id: 3, name: "Bières", color: "#f39c12", order: 3 },
        { id: 4, name: "Softs", color: "#3498db", order: 4 }
    ],

    drinks: [
        { id: 1, name: "Mojito", category: 1, price: 8, order: 1 },
        { id: 2, name: "Cuba Libre", category: 1, price: 8, order: 2 },

        { id: 3, name: "Spritz", category: 2, price: 9, order: 1 },
        { id: 4, name: "Margarita", category: 2, price: 9, order: 2 },

        { id: 5, name: "Grimbergen", category: 3, price: 6, order: 1 },
        { id: 6, name: "Heineken", category: 3, price: 5, order: 2 },

        { id: 7, name: "Coca-Cola", category: 4, price: 3, order: 1 },
        { id: 8, name: "Ice Tea", category: 4, price: 3, order: 2 }
    ],

    rooms: [101, 102, 103, 104, 105, 106, 107, 108],

    consumptions: JSON.parse(localStorage.getItem("consos") || "[]")
};

function save() {
    localStorage.setItem("consos", JSON.stringify(DATA.consumptions));
}

function addConsumption(room, drinkId) {
    const drink = DATA.drinks.find(d => d.id === drinkId);

    DATA.consumptions.push({
        id: Date.now(),
        room,
        drinkId,
        drinkName: drink.name,
        price: drink.price,
        date: new Date()
    });

    save();
}

function getTodayConsumptions() {
    const today = new Date().toDateString();
    return DATA.consumptions.filter(c => new Date(c.date).toDateString() === today);
}
