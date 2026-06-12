const DATA = {
    categories: [
        { id: 1, name: "Cocktails", order: 1 },
        { id: 2, name: "Bières", order: 2 },
        { id: 3, name: "Softs", order: 3 }
    ],

    drinks: [
        { id: 1, name: "Mojito", category: 1, price: 8, order: 1 },
        { id: 2, name: "Margarita", category: 1, price: 9, order: 2 },

        { id: 10, name: "Grimbergen", category: 2, price: 6, order: 1 },
        { id: 11, name: "Heineken", category: 2, price: 5, order: 2 },

        { id: 20, name: "Coca-Cola", category: 3, price: 3, order: 1 },
        { id: 21, name: "Ice Tea", category: 3, price: 3, order: 2 }
    ],

    rooms: [101,102,103,104,105,106,107,108],

    consumptions: (() => {
        try {
            return JSON.parse(localStorage.getItem("bar")) || [];
        } catch (e) {
            return [];
        }
    })()
};
