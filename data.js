const DATA = {
    // 📂 CATÉGORIES
    categories: [
        { id: 1, name: "Old School", color: "#ae8e68", order: 1 },
        { id: 2, name: "Les Audacieux", color: "#ae8e68", order: 2 },
        { id: 3, name: "Planches", color: "#ae8e68", order: 3 },
        { id: 4, name: "Chauds", color: "#ae8e68", order: 4 },
        { id: 5, name: "Softs", color: "#ae8e68", order: 5 },
        { id: 6, name: "Apéritifs", color: "#ae8e68", order: 6 },
        { id: 7, name: "Vins", color: "#ae8e68", order: 7 },
        { id: 8, name: "Bières", color: "#ae8e68", order: 8 },
        { id: 9, name: "Whiskys & Rhums", color: "#ae8e68", order: 9 },
        { id: 10, name: "Digestifs", color: "#ae8e68", order: 10 },
        { id: 11, name: "Suppléments", color: "#ae8e68", order: 11 }
    ],

    // 🍹 BOISSONS
    drinks: [

        // =========================
        // OLD SCHOOL
        // =========================
        { id: 1, name: "Cuba Libre", category: 1, price: 7, order: 1 },
        { id: 2, name: "Tequila Sunrise", category: 1, price: 7, order: 2 },
        { id: 3, name: "Planteur", category: 1, price: 7, order: 3 },
        { id: 4, name: "Americano", category: 1, price: 7, order: 4 },
        { id: 5, name: "Manhattan", category: 1, price: 7, order: 5 },
        { id: 6, name: "Margarita", category: 1, price: 8, order: 6 },
        { id: 7, name: "Mojito", category: 1, price: 8, order: 7 },
        { id: 8, name: "Negroni", category: 1, price: 8, order: 8 },

        // =========================
        // AUDACIEUX
        // =========================
        { id: 10, name: "Bloody Mary", category: 2, price: 8, order: 1 },
        { id: 11, name: "Diamant Vert", category: 2, price: 8, order: 2 },
        { id: 12, name: "Spritz", category: 2, price: 8, order: 3 },
        { id: 13, name: "Shellder Pocito", category: 2, price: 8, order: 4 },
        { id: 14, name: "Mathilde", category: 2, price: 8, order: 5 },
        { id: 15, name: "Sidecar", category: 2, price: 9, order: 6 },
        { id: 16, name: "French 75", category: 2, price: 9, order: 7 },
        { id: 17, name: "Hugo Spritz", category: 2, price: 10, order: 8 },

        // =========================
        // PLANCHES
        // =========================
        { id: 20, name: "Fromagère", category: 3, price: 8, order: 1 },
        { id: 21, name: "Charcutière", category: 3, price: 8, order: 2 },
        { id: 22, name: "Gourmande", category: 3, price: 12, order: 3 },

        // =========================
        // CHAUDS
        // =========================
        { id: 30, name: "Ristretto", category: 4, price: 1.40, order: 1 },
        { id: 31, name: "Expresso", category: 4, price: 1.40, order: 2 },
        { id: 32, name: "Double Expresso", category: 4, price: 2.40, order: 3 },
        { id: 33, name: "Allongé", category: 4, price: 1.70, order: 4 },
        { id: 34, name: "Café Latte", category: 4, price: 2.40, order: 5 },
        { id: 35, name: "Chocolat chaud", category: 4, price: 3, order: 6 },
        { id: 36, name: "Chococcino", category: 4, price: 3, order: 7 },
        { id: 37, name: "Thé", category: 4, price: 2.60, order: 8 },

        // =========================
        // SOFTS
        // =========================
        { id: 40, name: "Cristaline", category: 5, price: 1.50, order: 1 },
        { id: 41, name: "Cristaline gazeuse", category: 5, price: 2, order: 2 },
        { id: 42, name: "Sirop à l’eau", category: 5, price: 2, order: 3 },
        { id: 43, name: "Jus de fruits", category: 5, price: 3.50, order: 4 },
        { id: 44, name: "Sodas", category: 5, price: 3.50, order: 5 },
        { id: 45, name: "Limonade", category: 5, price: 3, order: 6 },
        { id: 46, name: "Diabolo", category: 5, price: 3.50, order: 7 },

        // =========================
        // APÉRITIFS
        // =========================
        { id: 50, name: "Apéritif", category: 6, price: 4, order: 1 },
        { id: 51, name: "Pommeau", category: 6, price: 6, order: 2 },
        { id: 52, name: "Vodka Smirnoff", category: 6, price: 6, order: 3 },
        { id: 53, name: "Vodka Belvédère", category: 6, price: 8, order: 4 },
        { id: 54, name: "Gin Gordon’s", category: 6, price: 6, order: 5 },
        { id: 55, name: "Gin C’est Nous", category: 6, price: 8, order: 6 },
        { id: 56, name: "Tequila", category: 6, price: 6, order: 7 },
        { id: 57, name: "Jägermeister", category: 6, price: 7, order: 8 },

        // =========================
        // VINS
        // =========================
        { id: 60, name: "Vin au verre", category: 7, price: 4, order: 1 },
        { id: 61, name: "Bouteille vin", category: 7, price: 20, order: 2 },
        { id: 62, name: "Bulles de Fleuray", category: 7, price: 6, order: 3 },
        { id: 63, name: "Bouteille bulles de Fleuray", category: 7, price: 30, order: 4 },

        // =========================
        // BIÈRES
        // =========================
        { id: 70, name: "Grimbergen", category: 8, price: 4, order: 1 },
        { id: 71, name: "Affligem 0%", category: 8, price: 3.50, order: 2 },
        { id: 72, name: "Heineken", category: 8, price: 4, order: 3 },
        { id: 73, name: "Hoegaarden", category: 8, price: 4, order: 4 },
        { id: 74, name: "Goudale Ambrée", category: 8, price: 5, order: 5 },
        { id: 75, name: "Desperados", category: 8, price: 4, order: 6 },
        { id: 76, name: "Picon bière", category: 8, price: 5, order: 7 },
        { id: 77, name: "Cotentine IPA", category: 8, price: 6, order: 8 },
        { id: 78, name: "Chiquante Triple Blonde", category: 8, price: 6, order: 9 },
        { id: 79, name: "Chiquante de Saison", category: 8, price: 6, order: 10 },
        { id: 80, name: "Cidre brut", category: 8, price: 5, order: 11 },
        { id: 81, name: "Cidre bouteille", category: 8, price: 15, order: 12 },

        // =========================
        // WHISKYS & RHUMS
        // =========================
        { id: 90, name: "Clan Campbell", category: 9, price: 6, order: 1 },
        { id: 91, name: "Jack Daniel’s", category: 9, price: 7, order: 2 },
        { id: 92, name: "Jameson", category: 9, price: 7, order: 3 },
        { id: 93, name: "Glenlivet", category: 9, price: 8, order: 4 },
        { id: 94, name: "Togouchi Whisky", category: 9, price: 10, order: 5 },
        { id: 95, name: "Havana Club", category: 9, price: 6, order: 6 },
        { id: 96, name: "Saint James Blanc", category: 9, price: 6, order: 7 },
        { id: 97, name: "Saint James Ambré", category: 9, price: 6, order: 8 },
        { id: 98, name: "Diplomatico", category: 9, price: 8, order: 9 },

        // =========================
        // DIGESTIFS
        // =========================
        { id: 100, name: "Malibu", category: 10, price: 6, order: 1 },
        { id: 101, name: "Get 27", category: 10, price: 6, order: 2 },
        { id: 102, name: "Get 31", category: 10, price: 7, order: 3 },
        { id: 103, name: "Menthe Pastille", category: 10, price: 6, order: 4 },
        { id: 104, name: "Baileys", category: 10, price: 6, order: 5 },
        { id: 105, name: "Poire Williams", category: 10, price: 7, order: 6 },
        { id: 106, name: "Cointreau", category: 10, price: 7, order: 7 },
        { id: 107, name: "Limoncello", category: 10, price: 7, order: 8 },
        { id: 108, name: "Cognac", category: 10, price: 8, order: 9 },
        { id: 109, name: "Calvados", category: 10, price: 8, order: 10 },

        // =========================
        // SUPPLÉMENTS
        // =========================
        { id: 120, name: "Adjuvant", category: 11, price: 1, order: 1 },
        { id: 121, name: "Fever Tree", category: 11, price: 2, order: 2 },
        { id: 122, name: "Redbull", category: 11, price: 2, order: 3 }
    ],

    // 🛏️ CHAMBRES
    rooms: Array.from({ length: 45 }, (_, i) => i + 1)
        .filter(r => ![2, 14, 44].includes(r)),

    // 💾 CONSOMMATIONS
    consumptions: JSON.parse(localStorage.getItem("consos") || "[]")
};
