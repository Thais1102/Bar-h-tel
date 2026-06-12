const DATA = {
    // 📂 CATÉGORIES
    categories: [
        { id: 1, name: "Old School", color: "#e6dac6", order: 1 },
        { id: 2, name: "Les Audacieux", color: "#e6dac6", order: 2 },
        { id: 3, name: "Mocktails", color: "#e6dac6", order: 3 },
        { id: 4, name: "Planches", color: "#e6dac6", order: 4 },
        { id: 5, name: "Chauds", color: "#e6dac6", order: 5 },
        { id: 6, name: "Digestifs & Vins", color: "#e6dac6", order: 6 },
        { id: 7, name: "Apéritifs", color: "#e6dac6", order: 7 },
        { id: 8, name: "Whiskys / Rhums", color: "#e6dac6", order: 8 },
        { id: 9, name: "Bières", color: "#e6dac6", order: 9 },
        { id: 10, name: "Softs", color: "#e6dac6", order: 10 }
    ],

    // 🍹 BOISSONS
    drinks: [
        // OLD SCHOOL
        { id: 1, name: "Cuba Libre", category: 1, price: 8, order: 1 },
        { id: 2, name: "Tequila Sunrise", category: 1, price: 8, order: 2 },
        { id: 3, name: "Mojito", category: 1, price: 8, order: 3 },
        { id: 4, name: "Margarita", category: 1, price: 9, order: 4 },

        // AUDACIEUX
        { id: 10, name: "Spritz", category: 2, price: 9, order: 1 },
        { id: 11, name: "Bloody Mary", category: 2, price: 9, order: 2 },
        { id: 12, name: "French 75", category: 2, price: 10, order: 3 },

        // MOCKTAILS
        { id: 20, name: "Le Conquérant", category: 3, price: 6, order: 1 },
        { id: 21, name: "L’Impératrice", category: 3, price: 6, order: 2 },

        // PLANCHES
        { id: 30, name: "Fromage", category: 4, price: 14, order: 1 },
        { id: 31, name: "Charcuterie", category: 4, price: 14, order: 2 },

        // CHAUDS
        { id: 40, name: "Expresso", category: 5, price: 2.5, order: 1 },
        { id: 41, name: "Cappuccino", category: 5, price: 3.5, order: 2 },

        // DIGESTIFS
        { id: 50, name: "Baileys", category: 6, price: 6, order: 1 },
        { id: 51, name: "Cognac", category: 6, price: 7, order: 2 },

        // APÉRITIFS
        { id: 60, name: "Ricard", category: 7, price: 3.5, order: 1 },
        { id: 61, name: "Martini", category: 7, price: 4, order: 2 },

        // WHISKYS / RHUMS
        { id: 70, name: "Jack Daniel’s", category: 8, price: 8, order: 1 },
        { id: 71, name: "Bacardi", category: 8, price: 7, order: 2 },

        // BIÈRES
        { id: 80, name: "Grimbergen", category: 9, price: 6, order: 1 },
        { id: 81, name: "Heineken", category: 9, price: 5, order: 2 },
        { id: 82, name: "Hoegaarden", category: 9, price: 5.5, order: 3 },
        { id: 83, name: "Desperados", category: 9, price: 6, order: 4 },
        { id: 84, name: "Chinquante Blonde", category: 9, price: 5, order: 5 },
        { id: 85, name: "Chinquante Triple", category: 9, price: 6, order: 6 },
        { id: 86, name: "Chinquante de Saison", category: 9, price: 6, order: 7 },

        // SOFTS
        { id: 90, name: "Coca-Cola", category: 10, price: 3, order: 1 },
        { id: 91, name: "Ice Tea", category: 10, price: 3, order: 2 },
        { id: 92, name: "Orangina", category: 10, price: 3, order: 3 }
    ],

    // 🛏️ CHAMBRES (1 à 45 sauf 2, 14, 44)
    rooms: Array.from({ length: 45 }, (_, i) => i + 1)
        .filter(r => ![2, 14, 44].includes(r)),

    // 💾 CONSOMMATIONS
    consumptions: JSON.parse(localStorage.getItem("consos") || "[]")
};
