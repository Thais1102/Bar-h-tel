class BarApp {
    constructor() {
        this.state = {
            screen: 'categories',
            selectedCategory: null,
            selectedCategoryName: null,
            selectedDrink: null,
            selectedDrinkName: null,
            selectedDrinkPrice: null
        };

        this.init();
    }

    init() {
        this.render();
    }

    // ============================================
    // NAVIGATION
    // ============================================

    selectCategory(categoryId, categoryName) {
        this.state.selectedCategory = categoryId;
        this.state.selectedCategoryName = categoryName;
        this.state.screen = 'drinks';
        this.render();
    }

    selectDrink(drinkId, drinkName, drinkPrice) {
        this.state.selectedDrink = drinkId;
        this.state.selectedDrinkName = drinkName;
        this.state.selectedDrinkPrice = drinkPrice;
        this.state.screen = 'rooms';
        this.render();
    }

    selectRoom(roomNumber) {
        addConsumption(roomNumber, this.state.selectedDrink);

        this.showNotification(`✓ Chambre ${roomNumber} - ${this.state.selectedDrinkName}`);

        this.state.selectedCategory = null;
        this.state.selectedCategoryName = null;
        this.state.selectedDrink = null;
        this.state.selectedDrinkName = null;
        this.state.selectedDrinkPrice = null;

        setTimeout(() => {
            this.state.screen = 'categories';
            this.render();
        }, 600);
    }

    goToHistoric() {
        this.state.screen = 'historic';
        this.render();
    }

    goToAdmin() {
        this.state.screen = 'admin';
        this.render();
    }

    backToCategories() {
        this.state = {
            screen: 'categories',
            selectedCategory: null,
            selectedCategoryName: null,
            selectedDrink: null,
            selectedDrinkName: null,
            selectedDrinkPrice: null
        };
        this.render();
    }

    backToDrinks() {
        this.state.screen = 'drinks';
        this.state.selectedDrink = null;
        this.state.selectedDrinkName = null;
        this.state.selectedDrinkPrice = null;
        this.render();
    }

    // ============================================
    // NOTIFICATION
    // ============================================

    showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = message;
        document.body.appendChild(notif);

        setTimeout(() => {
            notif.classList.add('hide');
            setTimeout(() => notif.remove(), 400);
        }, 1500);
    }

    // ============================================
    // RENDER
    // ============================================

    render() {
        const app = document.getElementById('app');

        if (!app) return;

        switch (this.state.screen) {
            case 'categories':
                app.innerHTML = this.renderCategories();
                break;

            case 'drinks':
                app.innerHTML = this.renderDrinks();
                break;

            case 'rooms':
                app.innerHTML = this.renderRooms();
                break;

            case 'historic':
                app.innerHTML = this.renderHistoric();
                break;

            case 'admin':
                app.innerHTML = this.renderAdmin();
                break;
        }
    }

    // ============================================
    // CATÉGORIES
    // ============================================

    renderCategories() {
        const categories = DATA.categories.sort((a, b) => a.order - b.order);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Catégories</h1>
                </div>

                <div class="screen-content">
                    <div class="grid-categories">
                        ${categories.map(cat => `
                            <button class="btn-category"
                                style="background:${cat.color}"
                                onclick="app.selectCategory(${cat.id}, '${cat.name}')">
                                ${cat.name}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.goToHistoric()">Historique</button>
                    <button class="btn-nav" onclick="app.goToAdmin()">Admin</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // BOISSONS
    // ============================================

    renderDrinks() {
        const drinks = DATA.drinks
            .filter(d => d.category === this.state.selectedCategory)
            .sort((a, b) => a.order - b.order);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>${this.state.selectedCategoryName}</h1>
                </div>

                <div class="screen-content">
                    <div class="grid-drinks">
                        ${drinks.map(drink => `
                            <button class="btn-drink"
                                onclick="app.selectDrink(${drink.id}, '${drink.name}', ${drink.price})">
                                <div>${drink.name}</div>
                                <div class="btn-drink-price">${drink.price.toFixed(2)}€</div>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToCategories()">Retour</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // CHAMBRES
    // ============================================

    renderRooms() {
        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Chambres</h1>
                    <p>${this.state.selectedDrinkName}</p>
                </div>

                <div class="screen-content">
                    <div class="grid-rooms">
                        ${DATA.rooms.map(room => `
                            <button class="btn-room"
                                onclick="app.selectRoom(${room})">
                                ${room}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToDrinks()">Retour</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // HISTORIQUE
    // ============================================

    renderHistoric() {
        const today = getTodayConsumptions();
        const total = today.reduce((s, c) => s + c.price, 0);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Aujourd'hui</h1>
                    <p>${total.toFixed(2)}€</p>
                </div>

                <div class="screen-content">
                    ${today.map(c => `
                        <div class="history-item">
                            <div>
                                Chambre ${c.room} - ${c.drinkName}
                            </div>
                            <div>${c.price.toFixed(2)}€</div>
                            <button onclick="app.removeConsumption(${c.id})">🗑️</button>
                        </div>
                    `).join('')}
                </div>

                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToCategories()">Retour</button>
                    <button class="btn-nav" onclick="exportToCSV()">Export</button>
                </div>
            </div>
        `;
    }

    removeConsumption(id) {
        DATA.consumptions = DATA.consumptions.filter(c => c.id !== id);
        saveConsumptions();
        this.render();
    }

    // ============================================
    // ADMIN SIMPLE
    // ============================================

    renderAdmin() {
        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Admin</h1>
                </div>

                <div class="screen-content">
                    <p>Consommations : ${DATA.consumptions.length}</p>
                </div>

                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToCategories()">Retour</button>
                </div>
            </div>
        `;
    }
}

// ============================================
// INIT
// ============================================

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new BarApp();
});
