// ============================================
// APPLICATION PRINCIPALE - BAR HÔTEL
// ============================================

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
        this.state.selectedDrink = null;
        this.state.selectedCategoryName = null;
        this.state.selectedDrinkName = null;

        setTimeout(() => {
            this.state.screen = 'categories';
            this.render();
        }, 600);
    }

    // ============================================
    // CAISSE RAPIDE
    // ============================================

    goToCashier() {
        this.state.screen = 'cashier';
        this.render();
    }

    selectQuickCategory(id, name) {
        this.state.selectedCategory = id;
        this.state.selectedCategoryName = name;
        this.render();
    }

    selectQuickDrink(id, name, price) {
        this.state.selectedDrink = id;
        this.state.selectedDrinkName = name;
        this.state.selectedDrinkPrice = price;
        this.render();
    }

    selectQuickRoom(room) {
        addConsumption(room, this.state.selectedDrink);

        this.showNotification(`✓ ${room} - ${this.state.selectedDrinkName}`);
    }

    // ============================================
    // NOTIFICATIONS
    // ============================================

    showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = message;

        document.body.appendChild(notif);

        setTimeout(() => {
            notif.classList.add('hide');
            setTimeout(() => notif.remove(), 300);
        }, 1200);
    }

    // ============================================
    // RENDER PRINCIPAL
    // ============================================

    render() {
        const app = document.getElementById('app');

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

            case 'cashier':
                app.innerHTML = this.renderCashier();
                break;
        }
    }

    // ============================================
    // CATEGORIES
    // ============================================

    renderCategories() {
        const categories = DATA.categories.sort((a,b)=>a.order-b.order);

        return `
            <div class="screen">
                <h1>🍸 Bar Hôtel</h1>

                <div class="grid-categories">
                    ${categories.map(c => `
                        <button 
                            onclick="app.selectCategory(${c.id}, '${c.name}')"
                            style="background:${c.color}"
                        >
                            ${c.name}
                        </button>
                    `).join('')}
                </div>

                <div style="margin-top:15px;">
                    <button onclick="app.goToCashier()">⚡ Caisse rapide</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // DRINKS
    // ============================================

    renderDrinks() {
        const drinks = DATA.drinks.filter(d => d.category === this.state.selectedCategory);

        return `
            <div class="screen">
                <h2>${this.state.selectedCategoryName}</h2>

                <div class="grid-drinks">
                    ${drinks.map(d => `
                        <button onclick="app.selectDrink(${d.id}, '${d.name}', ${d.price})">
                            ${d.name}
                        </button>
                    `).join('')}
                </div>

                <button onclick="app.state.screen='categories'; app.render()">← Retour</button>
            </div>
        `;
    }

    // ============================================
    // ROOMS
    // ============================================

    renderRooms() {
        return `
            <div class="screen">
                <h2>${this.state.selectedDrinkName}</h2>

                <div class="grid-rooms">
                    ${DATA.rooms.map(r => `
                        <button onclick="app.selectRoom(${r})">
                            ${r}
                        </button>
                    `).join('')}
                </div>

                <button onclick="app.state.screen='drinks'; app.render()">← Retour</button>
            </div>
        `;
    }

    // ============================================
    // CAISSE RAPIDE (ULTRA SPEED)
    // ============================================

    renderCashier() {

        const categories = DATA.categories.sort((a,b)=>a.order-b.order);

        const drinks = this.state.selectedCategory
            ? DATA.drinks.filter(d => d.category === this.state.selectedCategory)
            : [];

        return `
            <div class="screen">

                <h1>⚡ CAISSE RAPIDE</h1>

                <!-- CATEGORIES -->
                <div style="display:flex; gap:5px; flex-wrap:wrap;">
                    ${categories.map(c => `
                        <button onclick="app.selectQuickCategory(${c.id}, '${c.name}')"
                            style="background:${c.color}">
                            ${c.name}
                        </button>
                    `).join('')}
                </div>

                <hr>

                <!-- DRINKS -->
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:5px;">
                    ${drinks.map(d => `
                        <button onclick="app.selectQuickDrink(${d.id}, '${d.name}', ${d.price})">
                            ${d.name}
                        </button>
                    `).join('')}
                </div>

                <hr>

                <!-- ROOMS -->
                <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:5px;">
                    ${DATA.rooms.map(r => `
                        <button onclick="app.selectQuickRoom(${r})">
                            ${r}
                        </button>
                    `).join('')}
                </div>

                <div style="margin-top:10px;">
                    <button onclick="app.state.screen='categories'; app.render()">← Retour</button>
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
