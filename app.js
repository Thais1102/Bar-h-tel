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

    // ======================
    // NAVIGATION
    // ======================

    selectCategory(cat) {
        this.state.category = cat;
        this.state.screen = "drinks";
        this.render();
    }

    selectDrink(drink) {
        this.state.drink = drink;
        this.state.screen = "rooms";
        this.render();
    }

    selectRoom(room) {
        const consumption = {
            id: Date.now(),
            room,
            drinkName: this.state.drink.name,
            price: this.state.drink.price,
            date: new Date()
        };

        DATA.consumptions.push(consumption);
        localStorage.setItem("bar", JSON.stringify(DATA.consumptions));

        this.toast(`Ch ${room} - ${this.state.drink.name}`);

        this.state = { screen: "categories", category: null, drink: null };
        this.render();
    }

    // ======================
    // UI
    // ======================

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

    renderCategories() {
        return `
        <div class="screen">
            <h1>Catégories</h1>

            <div class="grid">
                ${DATA.categories.map(c => `
                    <button onclick="app.selectCategory(${c.id})">
                        ${c.name}
                    </button>
                `).join("")}
            </div>
        </div>`;
    }

    renderDrinks() {
        const drinks = DATA.drinks.filter(d => d.category === this.state.category);

        return `
        <div class="screen">
            <h1>Boissons</h1>

            <button onclick="app.state.screen='categories';app.render()">← Retour</button>

            <div class="grid">
                ${drinks.map(d => `
                    <button onclick='app.selectDrink(${JSON.stringify(d)})'>
                        ${d.name}<br>${d.price}€
                    </button>
                `).join("")}
            </div>
        </div>`;
    }

    renderRooms() {
        return `
        <div class="screen">
            <h1>Chambres</h1>

            <button onclick="app.state.screen='drinks';app.render()">← Retour</button>

            <div class="grid">
                ${DATA.rooms.map(r => `
                    <button onclick="app.selectRoom(${r})">
                        ${r}
                    </button>
                `).join("")}
            </div>
        </div>`;
    }

    // ======================
    // NOTIF
    // ======================

    toast(msg) {
        const div = document.createElement("div");
        div.className = "toast";
        div.innerText = msg;

        document.body.appendChild(div);

        setTimeout(() => div.remove(), 1500);
    }
}

let app;
document.addEventListener("DOMContentLoaded", () => {
    app = new BarApp();
});
