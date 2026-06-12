class BarApp {
    constructor() {
        this.state = {
            screen: "categories",
            category: null,
            drink: null
        };

        this.init();
    }

    init() {
        this.render();
    }

    // =========================
    // NAVIGATION
    // =========================

    selectCategory(id) {
        this.state.category = id;
        this.state.screen = "drinks";
        this.render();
    }

    selectDrink(id) {
        this.state.drink = id;
        this.state.screen = "rooms";
        this.render();
    }

    selectRoom(room) {
        addConsumption(room, this.state.drink);

        this.showNotif("Ajouté ✔ Chambre " + room);

        this.state = { screen: "categories", category: null, drink: null };
        this.render();
    }

    back() {
        this.state.screen = "categories";
        this.render();
    }

    // =========================
    // NOTIF
    // =========================

    showNotif(text) {
        const n = document.createElement("div");
        n.className = "notif";
        n.innerText = text;

        document.body.appendChild(n);

        setTimeout(() => n.remove(), 1500);
    }

    // =========================
    // RENDER
    // =========================

    render() {
        const app = document.getElementById("app");

        if (this.state.screen === "categories") {
            app.innerHTML = this.renderCategories();
        }

        if (this.state.screen === "drinks") {
            app.innerHTML = this.renderDrinks();
        }

        if (this.state.screen === "rooms") {
            app.innerHTML = this.renderRooms();
        }
    }

    // =========================
    // CATEGORIES
    // =========================

    renderCategories() {
        return `
        <div class="screen">
            <h1>Catégories</h1>

            <div class="grid">
                ${DATA.categories.map(c => `
                    <button onclick="app.selectCategory(${c.id})"
                        style="background:${c.color}">
                        ${c.name}
                    </button>
                `).join("")}
            </div>
        </div>`;
    }

    // =========================
    // DRINKS
    // =========================

    renderDrinks() {
        const drinks = DATA.drinks.filter(d => d.category === this.state.category);

        return `
        <div class="screen">
            <button onclick="app.back()">← Retour</button>

            <h1>Boissons</h1>

            <div class="grid">
                ${drinks.map(d => `
                    <button onclick="app.selectDrink(${d.id})">
                        ${d.name}<br>
                        ${d.price}€
                    </button>
                `).join("")}
            </div>
        </div>`;
    }

    // =========================
    // ROOMS
    // =========================

    renderRooms() {
        return `
        <div class="screen">
            <button onclick="app.back()">← Retour</button>

            <h1>Chambres</h1>

            <div class="grid">
                ${DATA.rooms.map(r => `
                    <button onclick="app.selectRoom(${r})">
                        ${r}
                    </button>
                `).join("")}
            </div>
        </div>`;
    }
}

// INIT
let app;
document.addEventListener("DOMContentLoaded", () => {
    app = new BarApp();
});
