# 🚀 DÉPLOIEMENT SIMPLE - BAR HÔTEL

## Ce que tu dois faire (3 étapes faciles)

---

## ✅ ÉTAPE 1: Aller sur GitHub Desktop ou Terminal

**Via GitHub Desktop (Plus simple):**
1. Ouvrir GitHub Desktop
2. Sélectionner ton repo `Bar-h-tel`
3. Cliquer `Current Branch` → créer nouvelle branche
4. Nommer: `gh-pages`
5. Cliquer `Create Branch`

**Via Terminal:**
```
git checkout --orphan gh-pages
```

---

## ✅ ÉTAPE 2: Ajouter les fichiers web

**Les 4 fichiers à mettre à la racine (au même niveau que README.md):**

1. `index.html` (depuis `web-app/index.html`)
2. `app.js` (depuis `web-app/app.js`)
3. `data.js` (depuis `web-app/data.js`)
4. `styles.css` (depuis `web-app/styles.css`)

**Comment faire:**
- GitHub Desktop: Drag & drop les 4 fichiers dans la racine
- Ou copier-coller manuellement

---

## ✅ ÉTAPE 3: Publier la branche

**GitHub Desktop:**
1. Écrire message: "Déploiement Bar Hôtel"
2. Cliquer `Commit to gh-pages`
3. Cliquer `Publish branch`

**Terminal:**
```
git add .
git commit -m "Déploiement Bar Hôtel"
git push origin gh-pages
```

---

## ✅ ÉTAPE 4: Activer GitHub Pages

1. Aller sur GitHub.com → ton repo `Bar-h-tel`
2. Cliquer `Settings` (en haut)
3. Cliquer `Pages` (à gauche)
4. Sous "Source" → sélectionner `gh-pages`
5. Cliquer `Save`

**C'est tout ! ✅**

---

## 🎉 ACCÉDER À L'APP

L'app est maintenant à:
```
https://Thais1102.github.io/Bar-h-tel
```

Teste sur iPad ou navigateur !

---

## 💡 COMMENT ÇA MARCHE?

- **gh-pages** = branche spéciale GitHub qui héberge gratuitement les fichiers web
- **GitHub Pages** = service gratuit de GitHub pour héberger des sites statiques
- **Tes 4 fichiers** = toute l'app (pas besoin de serveur)

---

## 🔧 SI TU VEUX MODIFIER

### Modifier un prix de boisson:
1. Ouvrir `data.js`
2. Trouver la boisson
3. Changer le `price`
4. Sauvegarder + commit + push

Exemple:
```javascript
{ id: 8, name: 'Bière blonde', category: 2, price: 2.50, order: 1 }
// Change 2.50 en 3.00
{ id: 8, name: 'Bière blonde', category: 2, price: 3.00, order: 1 }
```

### Ajouter une boisson:
1. Ouvrir `data.js`
2. Copier une ligne existante dans `drinks`
3. Changer l'`id`, `name`, `category`, `price`
4. Commit + push

---

## ❓ PROBLÈMES COURANTS?

**Q: L'app ne s'affiche pas ?**
A: Attendre 5 minutes après le déploiement (cache GitHub)

**Q: Comment revenir à la branche main ?**
A: GitHub Desktop → Current Branch → sélectionner `main`

**Q: Les données disparaissent au redémarrage ?**
A: C'est normal (LocalStorage). Cliquer "Exporter CSV" pour sauvegarder.

---

## ✨ C'EST PRÊT !

L'app est:
- ✅ Gratuite
- ✅ Sans serveur
- ✅ Rapide sur iPad
- ✅ Fonctionne hors ligne
- ✅ Facile à modifier

**Questions ?** 👉
