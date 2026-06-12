# 🚀 GUIDE - Application Web sur GitHub (Alternative Glide)

## Option: Développer l'App en Code sur GitHub

Si vous préférez une **application web codée** (au lieu de Glide no-code), vous pouvez utiliser GitHub pour héberger le code.

---

## 📋 TECHNOLOGIES RECOMMANDÉES

### **Stack complet (simple et rapide):**
- **Frontend**: React + TypeScript (interface iPad)
- **Backend**: Node.js + Express (API)
- **Base de données**: PostgreSQL ou SQLite
- **Déploiement**: Vercel, Netlify, ou GitHub Pages (gratuit)

### **Stack minimaliste (très simple):**
- **Frontend**: HTML + CSS + JavaScript vanilla
- **Stockage**: LocalStorage (iPad) ou Supabase (cloud)
- **Déploiement**: GitHub Pages (gratuit, aucun serveur)

---

## 🏗️ STRUCTURE GITHUB RECOMMANDÉE

```
Bar-h-tel/
├── docs/                          # Documentation
│   ├── glide-app-structure.md
│   ├── GLIDE-CONFIGURATION-GUIDE.md
│   └── WEB-APP-GUIDE.md          # CE FICHIER
│
├── web-app/                       # Application Web (si développement)
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── data.json                 # Données locales
│   └── README.md
│
├── backend/                       # Backend optionnel
│   ├── server.js
│   ├── package.json
│   ├── db/
│   │   └── schema.sql
│   └── README.md
│
├── data/                          # Données exportables
│   ├── categories.csv
│   ├── drinks.csv
│   └── rooms.csv
│
└── README.md                      # Documentation principale
```

---

## 🎯 OPTION 1: Application Web Minimaliste (Recommandée pour débuter)

### Avantages:
✅ **Aucun serveur** nécessaire
✅ **Gratuit** sur GitHub Pages
✅ **Simple** à maintenir
✅ **Rapide** sur iPad
✅ **Offline-first** (fonctionne hors ligne)

### Structure minimale:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bar Hôtel - Gestion Consommations</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app"></div>
    <script src="data.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

### Données (data.js):
```javascript
const DATA = {
    categories: [
        { id: 1, name: 'Softs', color: '#87CEEB' },
        { id: 2, name: 'Bières', color: '#D4AF37' },
        { id: 3, name: 'Vins', color: '#722F37' },
        { id: 4, name: 'Apéritifs', color: '#FF6B6B' },
        { id: 5, name: 'Cocktails', color: '#6C5CE7' },
        { id: 6, name: 'Mocktails', color: '#00B894' }
    ],
    drinks: [
        { id: 1, name: 'Eau', category: 1, price: 0.50 },
        { id: 2, name: 'Café', category: 1, price: 1.00 },
        // ... (30 boissons)
    ],
    rooms: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45],
    consumptions: []
};
```

### Logique (app.js - structure simplifée):
```javascript
class BarApp {
    constructor() {
        this.state = {
            screen: 'categories',
            selectedCategory: null,
            selectedDrink: null,
            consumptions: JSON.parse(localStorage.getItem('consumptions')) || []
        };
        this.render();
    }

    selectCategory(categoryId) {
        this.state.selectedCategory = categoryId;
        this.state.screen = 'drinks';
        this.render();
    }

    selectDrink(drinkId) {
        this.state.selectedDrink = drinkId;
        this.state.screen = 'rooms';
        this.render();
    }

    selectRoom(roomNumber) {
        const drink = DATA.drinks.find(d => d.id === this.state.selectedDrink);
        const consumption = {
            id: Date.now(),
            date: new Date().toISOString(),
            room: roomNumber,
            drink: drink.name,
            price: drink.price
        };
        this.state.consumptions.push(consumption);
        localStorage.setItem('consumptions', JSON.stringify(this.state.consumptions));
        
        this.showNotification(`✓ Chambre ${roomNumber} - ${drink.name}`);
        this.state.screen = 'categories';
        this.state.selectedCategory = null;
        this.state.selectedDrink = null;
        this.render();
    }

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
        }
    }

    renderCategories() {
        return `
            <div class="screen">
                <h1>Sélectionnez une catégorie</h1>
                <div class="grid-categories">
                    ${DATA.categories.map(cat => `
                        <button 
                            class="btn-category" 
                            style="background-color: ${cat.color}"
                            onclick="app.selectCategory(${cat.id})"
                        >
                            ${cat.name}
                        </button>
                    `).join('')}
                </div>
                <button class="btn-admin" onclick="app.state.screen='admin'; app.render()">⚙️</button>
            </div>
        `;
    }

    renderDrinks() {
        const category = DATA.categories.find(c => c.id === this.state.selectedCategory);
        const drinks = DATA.drinks.filter(d => d.category === this.state.selectedCategory);
        
        return `
            <div class="screen">
                <h1>${category.name}</h1>
                <button onclick="app.state.screen='categories'; app.render()">← Retour</button>
                <div class="grid-drinks">
                    ${drinks.map(drink => `
                        <button 
                            class="btn-drink"
                            onclick="app.selectDrink(${drink.id})"
                        >
                            ${drink.name}<br><span>${drink.price}€</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderRooms() {
        const drink = DATA.drinks.find(d => d.id === this.state.selectedDrink);
        const category = DATA.categories.find(c => c.id === this.state.selectedCategory);
        
        return `
            <div class="screen">
                <h1>Sélectionnez une chambre</h1>
                <p>${category.name} - ${drink.name} (${drink.price}€)</p>
                <button onclick="app.state.screen='drinks'; app.render()">← Retour</button>
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
        `;
    }

    showNotification(message) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = message;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2000);
    }
}

const app = new BarApp();
```

### Styles (styles.css - optimisé iPad):
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #f5f5f5;
    padding: 20px;
}

.screen {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    font-size: 48px;
    margin-bottom: 40px;
    text-align: center;
}

/* Grille catégories */
.grid-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.btn-category {
    padding: 40px;
    font-size: 32px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    transition: transform 0.2s;
}

.btn-category:active {
    transform: scale(0.95);
}

/* Grille boissons */
.grid-drinks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.btn-drink {
    padding: 30px;
    font-size: 24px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: white;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-drink:active {
    background: #f0f0f0;
}

.btn-drink span {
    display: block;
    font-size: 20px;
    color: #666;
    margin-top: 10px;
}

/* Grille chambres */
.grid-rooms {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}

.btn-room {
    aspect-ratio: 1;
    font-size: 48px;
    border: 2px solid #333;
    border-radius: 8px;
    background: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
}

.btn-room:active {
    background: #333;
    color: white;
}

/* Notification */
.notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #4caf50;
    color: white;
    padding: 20px 40px;
    border-radius: 8px;
    font-size: 20px;
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        transform: translateX(-50%) translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
}

/* Admin button */
.btn-admin {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #666;
    color: white;
    font-size: 28px;
    border: none;
    cursor: pointer;
}
```

---

## 🚀 OPTION 2: Application React (Plus robuste)

Si vous voulez une app plus complète:

```
npm create vite@latest bar-hotel -- --template react-ts
cd bar-hotel
npm install
```

Structure:
```
src/
├── components/
│   ├── CategoryScreen.tsx
│   ├── DrinkScreen.tsx
│   ├── RoomScreen.tsx
│   ├── HistoryScreen.tsx
│   └── AdminScreen.tsx
├── hooks/
│   ├── useConsumptions.ts
│   └── useLocalStorage.ts
├── types/
│   └── index.ts
├── App.tsx
└── index.css
```

---

## 📦 DÉPLOIEMENT SUR GITHUB

### **Option A: GitHub Pages (Gratuit, Static)**

1. **Créer branche `gh-pages`**:
```bash
git checkout -b gh-pages
```

2. **Ajouter dans `package.json`**:
```json
{
  "homepage": "https://Thais1102.github.io/Bar-h-tel",
  "scripts": {
    "deploy": "gh-pages -d build"
  }
}
```

3. **Déployer**:
```bash
npm run build
npm run deploy
```

4. **Accéder**: `https://Thais1102.github.io/Bar-h-tel`

---

### **Option B: GitHub + Vercel (Recommandé)**

1. **Connecter GitHub à Vercel**:
   - Aller sur vercel.com
   - Import du repo GitHub
   - Configuration automatique

2. **Déploiement auto** à chaque push sur `main`

3. **URL personnalisée** (ex: bar-hotel.vercel.app)

---

## 📝 FLUX GITHUB

### **Branches recommandées**:
```
main/               # Version déployée (stable)
  ↑
develop/            # Développement
  ↑
feature/screens     # Nouvelles fonctionnalités
feature/admin
feature/history
```

### **Workflow**:
1. Créer une branche `feature/***`
2. Développer localement
3. Commit + Push
4. Pull Request vers `develop`
5. Review + Merge
6. Sync vers `main` quand stable
7. Auto-déploiement sur Vercel

---

## 🔄 GESTION DES DONNÉES

### **Optione 1: LocalStorage (Simple, Offline)**
```javascript
// Sauvegarde locale iPad
localStorage.setItem('consumptions', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('consumptions'));
```

### **Option 2: Supabase (Cloud, Sync)**
```javascript
// Base de données cloud gratuite
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(URL, KEY)

// Créer consommation
await supabase
  .from('consumptions')
  .insert({ room, drink, price, date_time: new Date() })
```

### **Option 3: Firebase (Simple, Google)**
```javascript
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const db = getFirestore()

await addDoc(collection(db, 'consumptions'), {
    room, drink, price, dateTime: new Date()
})
```

---

## 📊 COMPARAISON: GLIDE vs CODE

| Aspect | Glide | Code GitHub |
|--------|-------|-------------|
| **Setup** | 5-10 min | 30-60 min |
| **Coût** | €/mois | Gratuit |
| **Personnalisation** | Limitée | Illimitée |
| **Maintenance** | Glide gère | Vous gérez |
| **Scalabilité** | Bonne | Excellent |
| **Offline** | Non | Oui (LocalStorage) |
| **Performance** | Bonne | Excellent |
| **Pour débutant** | ✅ Recommandé | ⚠️ Plus technique |

---

## 🎯 RECOMMANDATION

**Pour débuter rapidement**: → **GLIDE** (pas de code)
**Pour contrôle total**: → **React + Vercel** (hébergé GitHub)
**Pour ultra-simple**: → **HTML/CSS/JS vanille + GitHub Pages** (minimaliste)

---

## 📚 PROCHAINES ÉTAPES

1. **Décider**: Glide vs Code
2. **Si Glide**: Suivre le guide `GLIDE-CONFIGURATION-GUIDE.md`
3. **Si Code**: Créer structure GitHub + Vercel

Lequel préférez-vous? 🚀

