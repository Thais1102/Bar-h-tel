class BarApp {
    constructor() {
        this.state = {
            screen: "categories",
            selectedCategory: null,
            selectedDrink: null
        };

        this.render();
    }

    // -----------------------
    // Navigation
    // -----------------------

    back() {
        if (this.state.screen === "rooms") {
            this.state.screen = "drinks";
        } else {
            this.state.screen = "categories";
        }
        this.render();
    }

    // -----------------------
    // Sélections
    // -----------------------

    selectCategory(id) {
        this.state.selectedCategory = id;
        this.state.screen = "drinks";
        this.render();
    }

    selectDrink(id) {
        this.state.selectedDrink = DATA.drinks.find(d => d.id === id);
        this.state.screen = "rooms";
        this.render();
    }

    selectRoom(room) {
        DATA.consumptions.push({
            id: Date.now(),
            room: room,
            drinkName: this.state.selectedDrink.name,
            price: this.state.selectedDrink.price,
            date: new Date().toISOString()
        });

        localStorage.setItem(
            "consos",
            JSON.stringify(DATA.consumptions)
        );

        alert("Consommation ajoutée ✔");

        this.state.screen = "categories";
        this.state.selectedCategory = null;
        this.state.selectedDrink = null;

        this.render();
    }

    // -----------------------
    // Suppression caisse
    // -----------------------

    deleteConsumption(id) {
        if (!confirm("Supprimer cette consommation ?")) return;

        DATA.consumptions = DATA.consumptions.filter(
            c => c.id !== id
        );

        localStorage.setItem(
            "consos",
            JSON.stringify(DATA.consumptions)
        );

        this.render();
    }

    // -----------------------
    // Écrans
    // -----------------------

    renderCategories() {
        const categories = [...DATA.categories]
            .sort((a, b) => a.order - b.order);

        return `
            <div class="screen">
                <div class="screen-header">
                    <img src="Logo.png" class="app-logo">
                    <p>Sélectionnez une catégorie</p>
                </div>

                <div class="grid-categories">
                    ${categories.map(cat => `
                        <button
                            class="btn-category"
                            style="background:${cat.color}"
                            onclick="app.selectCategory(${cat.id})">
                            ${cat.name}
                        </button>
                    `).join("")}
                </div>

                <div class="screen-footer">
                    <button class="btn-nav"
                        onclick="app.showCash()">
                        📊 Caisse
                    </button>
                </div>
            </div>
        `;
    }

    renderDrinks() {
        const drinks = DATA.drinks
            .filter(d => d.category === this.state.selectedCategory)
            .sort((a, b) => a.order - b.order);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Boissons</h1>
                </div>

                <div class="grid-drinks">
                    ${drinks.map(drink => `
                        <button
                            class="btn-drink"
                            onclick="app.selectDrink(${drink.id})">
                            <span>${drink.name}</span>
                            <strong>${drink.price.toFixed(2)} €</strong>
                        </button>
                    `).join("")}
                </div>

                <div class="screen-footer">
                    <button class="btn-nav"
                        onclick="app.back()">
                        ← Retour
                    </button>
                </div>
            </div>
        `;
    }

    renderRooms() {
        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Choisir une chambre</h1>
                    <p>${this.state.selectedDrink.name}</p>
                </div>

                <div class="grid-rooms">
                    ${DATA.rooms.map(room => `
                        <button
                            class="btn-room"
                            onclick="app.selectRoom(${room})">
                            ${room}
                        </button>
                    `).join("")}
                </div>

                <div class="screen-footer">
                    <button class="btn-nav"
                        onclick="app.back()">
                        ← Retour
                    </button>
                </div>
            </div>
        `;
    }

    showCash() {
        this.state.screen = "cash";
        this.render();
    }

    renderCash() {

        const grouped = {};

        DATA.consumptions.forEach(c => {
            const day = c.date.substring(0, 10);

            if (!grouped[day]) grouped[day] = {};
            if (!grouped[day][c.room]) grouped[day][c.room] = [];

            grouped[day][c.room].push(c);
        });

        const days = Object.keys(grouped).sort().reverse();

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>📊 Caisse</h1>
                </div>

                <div class="screen-content">
                    ${days.length === 0 ? `
                        <p>Aucune consommation.</p>
                    ` : days.map(day => `
                        <div class="history-item">
                            <h2>${day}</h2>

                            ${Object.keys(grouped[day]).map(room => `
                                <div style="margin-top:10px;">
                                    <strong>Chambre ${room}</strong>

                                    ${grouped[day][room].map(c => `
                                        <div style="display:flex;justify-content:space-between;align-items:center;margin:4px 0;">
                                            <span>${c.drinkName}</span>

                                            <div>
                                                ${c.price.toFixed(2)} €

                                                <button
                                                    onclick="app.deleteConsumption(${c.id})"
                                                    style="margin-left:8px;">
                                                    🗑️
                                                </button>
                                            </div>
                                        </div>
                                    `).join("")}
                                </div>
                            `).join("")}
                        </div>
                    `).join("")}
                </div>

                <div class="screen-footer">
                    <button class="btn-nav"
                        onclick="app.state.screen='categories';app.render();">
                        ← Retour
                    </button>
                </div>
            </div>
        `;
    }

    // -----------------------
    // Render principal
    // -----------------------

    render() {
        const root = document.getElementById("app");

        switch (this.state.screen) {
            case "categories":
                root.innerHTML = this.renderCategories();
                break;

            case "drinks":
                root.innerHTML = this.renderDrinks();
                break;

            case "rooms":
                root.innerHTML = this.renderRooms();
                break;

            case "cash":
                root.innerHTML = this.renderCash();
                break;
        }
    }
}

// -----------------------
// Initialisation
// -----------------------

let app;

document.addEventListener("DOMContentLoaded", () => {
    app = new BarApp();
});
