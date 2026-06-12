// ============================================
// DONNÉES DE L'APPLICATION
// ============================================

const DATA = {

    // 📂 CATÉGORIES
    categories: [
        { id: 1, name: "Old School", order: 1 },
        { id: 2, name: "Les Audacieux", order: 2 },
        { id: 3, name: "Mocktails", order: 3 },
        { id: 4, name: "Planches", order: 4 },
        { id: 5, name: "Chauds", order: 5 },
        { id: 6, name: "Digestifs & Vins", order: 6 },
        { id: 7, name: "Apéritifs", order: 7 },
        { id: 8, name: "Whiskys / Rhums", order: 8 },
        { id: 9, name: "Bières", order: 9 },
        { id: 10, name: "Softs", order: 10 }
    ],

    // 🍸 BOISSONS
    drinks: [

        // 🍸 OLD SCHOOL
        { id: 1, name: "Cuba Libre", category: 1, order: 1 },
        { id: 2, name: "Tequila Sunrise", category: 1, order: 2 },
        { id: 3, name: "Planteur", category: 1, order: 3 },
        { id: 4, name: "Américano", category: 1, order: 4 },
        { id: 5, name: "Manhattan", category: 1, order: 5 },
        { id: 6, name: "Margarita", category: 1, order: 6 },
        { id: 7, name: "Mojito", category: 1, order: 7 },
        { id: 8, name: "Negroni", category: 1, order: 8 },

        // 🔥 LES AUDACIEUX
        { id: 9, name: "Diamant Vert", category: 2, order: 1 },
        { id: 10, name: "Bloody Mary", category: 2, order: 2 },
        { id: 11, name: "Mule", category: 2, order: 3 },
        { id: 12, name: "Spritz", category: 2, order: 4 },
        { id: 13, name: "Mathilde", category: 2, order: 5 },
        { id: 14, name: "Sidecar", category: 2, order: 6 },
        { id: 15, name: "French 75", category: 2, order: 7 },

        // 🍹 MOCKTAILS
        { id: 16, name: "Le Conquérant", category: 3, order: 1 },
        { id: 17, name: "Le Tonus", category: 3, order: 2 },
        { id: 18, name: "L'Impératrice", category: 3, order: 3 },
        { id: 19, name: "L'Abracadabresque", category: 3, order: 4 },

        // 🧀 PLANCHES
        { id: 20, name: "La Fromagère", category: 4, order: 1 },
        { id: 21, name: "La Charcutière", category: 4, order: 2 },
        { id: 22, name: "La Gourmande", category: 4, order: 3 },

        // ☕ CHAUDS
        { id: 23, name: "Ristretto", category: 5, order: 1 },
        { id: 24, name: "Expresso", category: 5, order: 2 },
        { id: 25, name: "Double allongé", category: 5, order: 3 },
        { id: 26, name: "Café latte", category: 5, order: 4 },
        { id: 27, name: "Chocolat", category: 5, order: 5 },
        { id: 28, name: "Thé", category: 5, order: 6 },
        { id: 29, name: "Infusion", category: 5, order: 7 },

        // 🥃 DIGESTIFS & VINS
        { id: 30, name: "Malibu", category: 6, order: 1 },
        { id: 31, name: "Get 27", category: 6, order: 2 },
        { id: 32, name: "Get 31", category: 6, order: 3 },
        { id: 33, name: "Baileys", category: 6, order: 4 },
        { id: 34, name: "Cointreau", category: 6, order: 5 },
        { id: 35, name: "Limoncello", category: 6, order: 6 },
        { id: 36, name: "Cognac VSOP", category: 6, order: 7 },
        { id: 37, name: "Calvados", category: 6, order: 8 },

        // 🍺 BIÈRES
        { id: 38, name: "Grimbergen", category: 9, order: 1 },
        { id: 39, name: "Affligem 0%", category: 9, order: 2 },
        { id: 40, name: "Heineken", category: 9, order: 3 },
        { id: 41, name: "Hoegaarden", category: 9, order: 4 },
        { id: 42, name: "Desperados", category: 9, order: 5 },
        { id: 43, name: "IPA locale", category: 9, order: 6 },
        { id: 44, name: "Lindemans", category: 9, order: 7 },
        { id: 45, name: "Cidre brut", category: 9, order: 8 },
        { id: 46, name: "Picon bière", category: 9, order: 9 },
        { id: 47, name: "Chinquante Blonde", category: 9, order: 10 },
        { id: 48, name: "Chinquante Triple", category: 9, order: 11 },
        { id: 49, name: "Chinquante de Saison", category: 9, order: 12 },

        // 🥤 SOFTS
        { id: 50, name: "Cristaline", category: 10, order: 1 },
        { id: 51, name: "Cristaline gazeuse", category: 10, order: 2 },
        { id: 52, name: "Coca-Cola", category: 10, order: 3 },
        { id: 53, name: "Coca Zéro", category: 10, order: 4 },
        { id: 54, name: "Orangina", category: 10, order: 5 },
        { id: 55, name: "Ice Tea", category: 10, order: 6 },
        { id: 56, name: "Schweppes Agrumes", category: 10, order: 7 },
        { id: 57, name: "Limonade", category: 10, order: 8 },
        { id: 58, name: "Redbull", category: 10, order: 9 },
        { id: 59, name: "Fever Tree", category: 10, order: 10 },
        { id: 60, name: "Ginger Beer", category: 10, order: 11 }

    ],

    // 💾 CONSOMMATIONS
    consumptions: JSON.parse(
        localStorage.getItem("bar_hotel_consumptions") || "[]"
    )
};
