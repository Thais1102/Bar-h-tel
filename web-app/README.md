# 🍺 Bar Hôtel - Application Web

Application iPad minimaliste pour la gestion des consommations de boissons à la réception d'un petit hôtel.

## ✨ Fonctionnalités

- ✅ **Ultra simple et rapide** - Aucune saisie clavier, tout au bouton
- ✅ **Sans serveur** - Fonctionne hors ligne (LocalStorage)
- ✅ **Gratuit** - Hébergé sur GitHub Pages
- ✅ **Optimisé iPad** - Interface grande et réactive
- ✅ **Gestion consommations** - Enregistrement automatique
- ✅ **Historique** - Consultation et suppression
- ✅ **Export CSV** - Sauvegarde des données
- ✅ **Admin panel** - Modification des boissons et catégories

## 🎯 Flux Utilisateur

```
1. Catégorie (Softs, Bières, Vins, Apéritifs, Cocktails, Mocktails)
   ↓
2. Boisson (sélection dans la catégorie)
   ↓
3. Chambre (numéro de chambre)
   ↓
✓ Enregistrement automatique + retour accueil
```

## 📦 Structure

```
web-app/
├── index.html      # Fichier principal
├── app.js          # Logique de l'application
├── data.js         # Données (catégories, boissons, chambres)
├── styles.css      # Styles optimisés iPad
└── README.md       # Ce fichier
```

## 🚀 Déploiement sur GitHub Pages

### Option 1: Simple (Recommandé)

1. **Créer branche `gh-pages`**:
```bash
git checkout --orphan gh-pages
git rm -rf .
```

2. **Copier les fichiers web-app**:
```bash
cp web-app/index.html .
cp web-app/app.js .
cp web-app/data.js .
cp web-app/styles.css .
```

3. **Commit et push**:
```bash
git add .
git commit -m "Déploiement application Bar Hôtel"
git push origin gh-pages
```

4. **Activer GitHub Pages**:
   - Aller dans Settings > Pages
   - Source: Branch `gh-pages`
   - Cliquer "Save"

5. **Accéder**: `https://Thais1102.github.io/Bar-h-tel`

---

### Option 2: Automatisé (GitHub Actions)

1. **Créer `.github/workflows/deploy.yml`**:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: |
          mkdir -p deploy
          cp web-app/* deploy/
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add deploy/*
          git commit -m "Auto-deploy web-app"
          git push origin gh-pages
```

---

## 💾 Sauvegarde des Données

L'application utilise **LocalStorage** du navigateur pour sauvegarder les consommations:
- ✅ Survit à la fermeture de l'app
- ✅ Fonctionne hors ligne
- ✅ Limité à ~5-10MB par domaine

### Exporter les données

1. Aller dans **Historique**
2. Cliquer **Exporter CSV**
3. Fichier `consommations_YYYY-MM-DD.csv` téléchargé

Format CSV:
```
Date,Heure,Chambre,Catégorie,Boisson,Prix
2026-06-12,14:30:00,101,Bières,Bière blonde,2.50
2026-06-12,14:32:15,105,Cocktails,Mojito,5.00
```

---

## 📋 Données Intégrées

### Catégories (6)
- Softs (#87CEEB)
- Bières (#D4AF37)
- Vins (#722F37)
- Apéritifs (#FF6B6B)
- Cocktails (#6C5CE7)
- Mocktails (#00B894)

### Boissons (26)
| Catégorie | Boissons |
|-----------|----------|
| **Softs** | Eau, Café, Thé, Jus d'orange, Jus de pomme, Soda, Limonade |
| **Bières** | Bière blonde, Bière brune, Bière sans alcool |
| **Vins** | Vin blanc, Vin rouge, Vin rosé |
| **Apéritifs** | Pastis, Kir, Kir royal, Spritz |
| **Cocktails** | Mojito, Daïquiri, Margarita, Piña Colada, Cosmopolitan |
| **Mocktails** | Virgin Mojito, Shirley Temple, Mocktail Fruit, Smooth Mango |

### Chambres (42)
1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45

---

## 🔧 Modification des Données

### Modifier boissons/prix/catégories

1. **Via Admin Panel** (dans l'app):
   - Cliquer bouton ⚙️
   - Modifier directement les champs
   - Les modifications sont sauvegardées en local

2. **Via Code** (fichier `data.js`):
   - Modifier directement le tableau `drinks`
   - Ajouter/supprimer des lignes
   - Commit et push

### Ajouter une nouvelle boisson

Dans `data.js`, section `drinks`:
```javascript
{
    id: 27,
    name: 'Nouvelle Boisson',
    category: 1,  // ID de la catégorie
    price: 2.50,
    order: 8
}
```

### Ajouter une nouvelle catégorie

Dans `data.js`, section `categories`:
```javascript
{
    id: 7,
    name: 'Desserts',
    color: '#FFC0CB',  // Code hex
    order: 7
}
```

---

## 📱 Utilisation sur iPad

### Installation comme PWA (Recomandé)

1. Sur iPad, ouvrir Safari
2. Aller à: `https://Thais1102.github.io/Bar-h-tel`
3. Cliquer partage (⬆️)
4. Cliquer "Sur l'écran d'accueil"
5. Nommer: "Bar Hôtel"
6. Ajouter

### Raccourcis
- **Accueil** (catégories): Écran principal
- **Historique**: Voir tous les enregistrements du jour
- **Admin**: Modifier boissons/catégories

---

## ⚙️ Configuration Technique

### Navigateurs Supportés
- ✅ Safari (iPad)
- ✅ Chrome
- ✅ Firefox
- ✅ Edge

### Performance
- Temps de chargement: <1s
- Pas de dépendances externes
- Taille totale: <50KB

### Sécurité
- Données stockées localement (iPad)
- Aucune transmission serveur
- Aucune authentification requise

---

## 🐛 Troubleshooting

### Les données ne se sauvegardent pas
- Vérifier que LocalStorage est activé
- Essayer un autre navigateur
- Vider le cache

### L'app ne répond pas
- Rafraîchir la page (Cmd+R)
- Fermer et rouvrir l'app
- Vider cache complet

### Export CSV ne marche pas
- Essayer avec un autre navigateur
- Vérifier les permissions de téléchargement

---

## 📈 Améliorations Futures

- [ ] Synchronisation cloud (Supabase)
- [ ] Rapports par période
- [ ] Statistiques par chambre
- [ ] Impression factures
- [ ] Dark mode
- [ ] Notifications audio

---

## 📄 Licence

Libre d'utilisation pour Bar Hôtel.

---

## 🤝 Support

Pour toute question ou bug, consultez la documentation GitHub: 
https://github.com/Thais1102/Bar-h-tel

**Prêt à utiliser ! 🚀**
