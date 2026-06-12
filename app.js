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
        // Enregistrer la consommation
        addConsumption(roomNumber, this.state.selectedDrink);

        // Afficher la notification
        this.showNotification(`✓ Chambre ${roomNumber} - ${this.state.selectedDrinkName}`);

        // Réinitialiser l'état
        this.state.selectedCategory = null;
        this.state.selectedCategoryName = null;
        this.state.selectedDrink = null;
        this.state.selectedDrinkName = null;
        this.state.selectedDrinkPrice = null;

        // Retour à l'accueil
        setTimeout(() => {
            this.state.screen = 'categories';
            this.render();
        }, 800);
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
        this.state.selectedCategory = null;
        this.state.selectedCategoryName = null;
        this.state.selectedDrink = null;
        this.state.selectedDrinkName = null;
        this.state.selectedDrinkPrice = null;
        this.state.screen = 'categories';
        this.render();
    }

    backToDrinks() {
        this.state.selectedDrink = null;
        this.state.selectedDrinkName = null;
        this.state.selectedDrinkPrice = null;
        this.state.screen = 'drinks';
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
        }, 2000);
    }

    // ============================================
    // RENDU PRINCIPAL
    // ============================================

    render() {
        const app = document.getElementById('app');
        
        switch(this.state.screen) {
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
    // ÉCRAN 1: CATÉGORIES
    // ============================================

    renderCategories() {
        const categories = DATA.categories.sort((a, b) => a.order - b.order);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Sélectionnez une catégorie</h1>
                    <p>Quelle type de boisson ?</p>
                </div>
                <div class="screen-content">
                    <div class="grid-categories">
                        ${categories.map(cat => `
                            <button 
                                class="btn-category" 
                                style="background-color: ${cat.color}"
                                onclick="app.selectCategory(${cat.id}, '${cat.name}')"
                            >
                                ${cat.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.goToHistoric()">📋 Historique</button>
                    <button class="btn-nav" onclick="app.goToAdmin()">⚙️ Admin</button>
                </div>
            </div>
            <button class="btn-admin" onclick="app.goToAdmin()">⚙️</button>
        `;
    }

    // ============================================
    // ÉCRAN 2: BOISSONS
    // ============================================

    renderDrinks() {
        const drinks = DATA.drinks
            .filter(d => d.category === this.state.selectedCategory)
            .sort((a, b) => a.order - b.order);

        const category = DATA.categories.find(c => c.id === this.state.selectedCategory);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>${this.state.selectedCategoryName}</h1>
                    <p>Choisissez une boisson</p>
                </div>
                <div class="screen-content">
                    <div class="grid-drinks">
                        ${drinks.map(drink => `
                            <button 
                                class="btn-drink"
                                onclick="app.selectDrink(${drink.id}, '${drink.name}', ${drink.price})"
                            >
                                <span class="btn-drink-name">${drink.name}</span>
                                <span class="btn-drink-price">${drink.price.toFixed(2)}€</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToCategories()">← Retour</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // ÉCRAN 3: CHAMBRES
    // ============================================

    renderRooms() {
        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Sélectionnez une chambre</h1>
                    <p>${this.state.selectedCategoryName} - ${this.state.selectedDrinkName} (${this.state.selectedDrinkPrice.toFixed(2)}€)</p>
                </div>
                <div class="screen-content">
                    <div class="grid-rooms">
                        ${DATA.rooms.map(room => `
                            <button 
                                class="btn-room"
                                onclick="app.selectRoom(${room})"
                            >
                                ${room}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToDrinks()">← Retour</button>
                </div>
            </div>
        `;
    }

    // ============================================
    // ÉCRAN 4: HISTORIQUE
    // ============================================

    renderHistoric() {
        const todayConsumptions = getTodayConsumptions();
        const total = todayConsumptions.reduce((sum, c) => sum + c.price, 0);

        return `
            <div class="screen">
                <div class="screen-header">
                    <h1>Consommations du jour</h1>
                    <p>Total: ${total.toFixed(2)}€ (${todayConsumptions.length} articles)</p>
                </div>
                <div class="screen-content">
                    ${todayConsumptions.length === 0 ? `
                        <div class="history-empty">
                            <p>Aucune consommation enregistrée aujourd'hui</p>
                        </div>
                    ` : `
                        <div class="history-list">
                            ${todayConsumptions.reverse().map(consumption => {
                                const date = new Date(consumption.date);
                                const time = date.toLocaleTimeString('fr-FR', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                });
                                return `
                                    <div class="history-item">
                                        <div class="history-item-info">
                                            <div class="history-item-time">${time}</div>
                                            <div class="history-item-details">
                                                <span class="history-item-room">Chambre ${consumption.room}</span>
                                                <span>${consumption.categoryName}</span>
                                                <span> - ${consumption.drinkName}</span>
                                            </div>
                                        </div>
                                        <div class="history-item-price">${consumption.price.toFixed(2)}€</div>
                                        <button 
                                            class="btn-delete"
                                            onclick="app.deleteConsumption(${consumption.id})"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>
                <div class="screen-footer">
                    <button class="btn-nav" onclick="app.backToCategories()">← Retour</button>
                    <button class="btn-nav btn-primary" onclick="app.exportToCSV()">📥 Exporter CSV</button>
                </div>
            </div>
        `;
    }

    deleteConsumption(consumptionId) {
        if (confirm('Supprimer cette consommation ?')) {
            deleteConsumption(consumptionId);
            this.goToHistoric();
            this.showNotification('Consommation supprimée');
        }
    }

    exportToCSV() {
        exportToCSV();
        this.showNotification('Fichier exporté');
    }

    // ============================================
    // ÉCRAN 5: ADMIN
    // ============================================

    renderAdmin() {
        return `
            <div class="screen">
                <div class="admin-screen">
                    <button class="btn-close" onclick="app.backToCategories()">✕ Fermer</button>
                    
                    <h2>⚙️ Configuration</h2>

                    <!-- CATÉGORIES -->
                    <div class="admin-section">
                        <h3>📂 Catégories</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Couleur</th>
                                    <th>Ordre</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${DATA.categories.map(cat => `
                                    <tr>
                                        <td>${cat.name}</td>
                                        <td><input type="color" value="${cat.color}" 
                                            onchange="app.updateCategoryColor(${cat.id}, this.value)"></td>
                                        <td><input type="number" value="${cat.order}" 
                                            onchange="app.updateCategoryOrder(${cat.id}, this.value)" 
                                            style="width: 60px;"></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- BOISSONS -->
                    <div class="admin-section">
                        <h3>🍹 Boissons</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Catégorie</th>
                                    <th>Nom</th>
                                    <th>Prix</th>
                                    <th>Ordre</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${DATA.drinks.map(drink => {
                                    const cat = DATA.categories.find(c => c.id === drink.category);
                                    return `
                                        <tr>
                                            <td>${cat.name}</td>
                                            <td><input type="text" value="${drink.name}" 
                                                onchange="app.updateDrinkName(${drink.id}, this.value)"></td>
                                            <td><input type="number" value="${drink.price}" step="0.01"
                                                onchange="app.updateDrinkPrice(${drink.id}, this.value)" 
                                                style="width: 80px;"></td>
                                            <td><input type="number" value="${drink.order}" 
                                                onchange="app.updateDrinkOrder(${drink.id}, this.value)" 
                                                style="width: 60px;"></td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <!-- CHAMBRES -->
                    <div class="admin-section">
                        <h3>🛏️ Chambres (${DATA.rooms.length})</h3>
                        <p style="color: #666; font-size: 14px;">
                            ${DATA.rooms.join(', ')}
                        </p>
                    </div>

                    <!-- CONSOMMATIONS -->
                    <div class="admin-section">
                        <h3>📊 Statistiques</h3>
                        <p style="font-size: 18px; color: #333;">
                            Consommations enregistrées: <strong>${DATA.consumptions.length}</strong><br>
                            Total: <strong>${DATA.consumptions.reduce((sum, c) => sum + c.price, 0).toFixed(2)}€</strong>
                        </p>
                    </div>

                    <div class="admin-buttons">
                        <button class="btn-secondary" onclick="app.backToCategories()">← Retour</button>
                        <button class="btn-primary" onclick="app.clearAllData()">🗑️ Réinitialiser</button>
                    </div>
                </div>
            </div>
        `;
    }

    updateCategoryColor(categoryId, color) {
        const category = DATA.categories.find(c => c.id === categoryId);
        if (category) {
            category.color = color;
            this.render();
        }
    }

    updateCategoryOrder(categoryId, order) {
        const category = DATA.categories.find(c => c.id === categoryId);
        if (category) {
            category.order = parseInt(order);
            this.render();
        }
    }

    updateDrinkName(drinkId, name) {
        const drink = DATA.drinks.find(d => d.id === drinkId);
        if (drink) {
            drink.name = name;
        }
    }

    updateDrinkPrice(drinkId, price) {
        const drink = DATA.drinks.find(d => d.id === drinkId);
        if (drink) {
            drink.price = parseFloat(price);
        }
    }

    updateDrinkOrder(drinkId, order) {
        const drink = DATA.drinks.find(d => d.id === drinkId);
        if (drink) {
            drink.order = parseInt(order);
        }
    }

    clearAllData() {
        if (confirm('⚠️ Êtes-vous sûr ? Cela va supprimer TOUTES les consommations enregistrées.')) {
            DATA.consumptions = [];
            saveConsumptions();
            this.showNotification('Données réinitialisées');
            setTimeout(() => this.backToCategories(), 1000);
        }
    }
}

// ============================================
// INITIALISATION
// ============================================

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new BarApp();
});