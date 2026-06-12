# 🚀 GUIDE DE CONFIGURATION GLIDE PAS À PAS

## PHASE 1: Configuration des Tables et Données

---

## ÉTAPE 1: Créer la Table CATÉGORIES

### 1.1 Créer la table
- Dans Glide, aller à **"Data" → "+"**
- Cliquer **"Create a new table"**
- Nommer: `Catégories`
- Cliquer **"Create"**

### 1.2 Ajouter les colonnes

| Colonne | Type | Obligatoire | Notes |
|---------|------|-------------|-------|
| Nom | Text | ✅ | Softs, Bières, etc. |
| Couleur | Text | ✅ | Code hex (#87CEEB) |
| Ordre | Number | ✅ | 1, 2, 3... (ordre affichage) |
| Actif | Checkbox | ✅ | Défaut: coché |

### 1.3 Remplir les données

Ajouter manuellement ou importer (copier-coller) :

| Nom | Couleur | Ordre | Actif |
|-----|---------|-------|-------|
| Softs | #87CEEB | 1 | ✓ |
| Bières | #D4AF37 | 2 | ✓ |
| Vins | #722F37 | 3 | ✓ |
| Apéritifs | #FF6B6B | 4 | ✓ |
| Cocktails | #6C5CE7 | 5 | ✓ |
| Mocktails | #00B894 | 6 | ✓ |

---

## ÉTAPE 2: Créer la Table BOISSONS

### 2.1 Créer la table
- Aller à **"Data" → "+"**
- **"Create a new table"** → Nommer: `Boissons`

### 2.2 Ajouter les colonnes

| Colonne | Type | Obligatoire | Notes |
|---------|------|-------------|-------|
| Nom | Text | ✅ | Eau, Bière blonde, etc. |
| Catégorie | Lookup | ✅ | Relation → Catégories |
| Prix | Decimal | ✅ | 0.50, 2.50, etc. |
| Ordre | Number | ✅ | Position dans catégorie |
| Actif | Checkbox | ✅ | Défaut: coché |

### 2.3 Configurer la relation Catégorie

1. Cliquer sur la colonne **"Catégorie"**
2. Sélectionner type **"Lookup"** (ou "Relation")
3. Table source: **"Catégories"**
4. Afficher: **"Nom"** (le nom de la catégorie)

### 2.4 Remplir les données

**SOFTS (Catégorie ID: 1)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Eau | Softs | 0.50 | 1 | ✓ |
| Café | Softs | 1.00 | 2 | ✓ |
| Thé | Softs | 1.00 | 3 | ✓ |
| Jus d'orange | Softs | 1.50 | 4 | ✓ |
| Jus de pomme | Softs | 1.50 | 5 | ✓ |
| Soda | Softs | 1.50 | 6 | ✓ |
| Limonade | Softs | 1.50 | 7 | ✓ |

**BIÈRES (Catégorie ID: 2)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Bière blonde | Bières | 2.50 | 1 | ✓ |
| Bière brune | Bières | 2.50 | 2 | ✓ |
| Bière sans alcool | Bières | 2.00 | 3 | ✓ |

**VINS (Catégorie ID: 3)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Vin blanc | Vins | 3.50 | 1 | ✓ |
| Vin rouge | Vins | 3.50 | 2 | ✓ |
| Vin rosé | Vins | 3.50 | 3 | ✓ |

**APÉRITIFS (Catégorie ID: 4)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Pastis | Apéritifs | 3.00 | 1 | ✓ |
| Kir | Apéritifs | 2.50 | 2 | ✓ |
| Kir royal | Apéritifs | 4.00 | 3 | ✓ |
| Spritz | Apéritifs | 4.00 | 4 | ✓ |

**COCKTAILS (Catégorie ID: 5)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Mojito | Cocktails | 5.00 | 1 | ✓ |
| Daïquiri | Cocktails | 5.00 | 2 | ✓ |
| Margarita | Cocktails | 5.00 | 3 | ✓ |
| Piña Colada | Cocktails | 5.00 | 4 | ✓ |
| Cosmopolitan | Cocktails | 5.00 | 5 | ✓ |

**MOCKTAILS (Catégorie ID: 6)**
| Nom | Catégorie | Prix | Ordre | Actif |
|-----|-----------|------|-------|-------|
| Virgin Mojito | Mocktails | 3.00 | 1 | ✓ |
| Shirley Temple | Mocktails | 3.00 | 2 | ✓ |
| Mocktail Fruit | Mocktails | 3.50 | 3 | ✓ |
| Smooth Mango | Mocktails | 3.50 | 4 | ✓ |

---

## ÉTAPE 3: Créer la Table CHAMBRES

### 3.1 Créer la table
- **"Data" → "+"** → **"Create a new table"** → `Chambres`

### 3.2 Ajouter les colonnes

| Colonne | Type | Obligatoire |
|---------|------|-------------|
| Numéro | Number | ✅ |

### 3.3 Remplir les données

Ajouter les 42 numéros de chambres:
1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45

*Vous pouvez les ajouter ligne par ligne ou utiliser un CSV*

---

## ÉTAPE 4: Créer la Table CONSOMMATIONS

### 4.1 Créer la table
- **"Data" → "+"** → **"Create a new table"** → `Consommations`

### 4.2 Ajouter les colonnes

| Colonne | Type | Obligatoire | Notes |
|---------|------|-------------|-------|
| DateHeure | DateTime | ✅ | Timestamp auto |
| Chambre_ID | Lookup | ✅ | Relation → Chambres |
| Boisson_ID | Lookup | ✅ | Relation → Boissons |
| Catégorie_ID | Lookup | ✅ | Relation → Catégories |
| Prix | Decimal | ✅ | Prix au moment |

### 4.3 Configurer les relations

**Colonne: Chambre_ID**
- Type: **Lookup**
- Table source: **Chambres**
- Afficher: **Numéro**

**Colonne: Boisson_ID**
- Type: **Lookup**
- Table source: **Boissons**
- Afficher: **Nom**

**Colonne: Catégorie_ID**
- Type: **Lookup**
- Table source: **Catégories**
- Afficher: **Nom**

**Cette table reste vide pour l'instant** (les données arrivent automatiquement via l'app)

---

## PHASE 2: Créer les Écrans

---

## ÉTAPE 5: Écran 1 - Sélection Catégorie (ACCUEIL)

### 5.1 Créer un nouvel écran
- Cliquer **"Screens" → "+"**
- Sélectionner **"Blank"** (démarrer vide)
- Nommer: `Accueil`
- Cliquer **"Create"**

### 5.2 Ajouter un titre
- Glisser un composant **"Title"**
- Texte: `Sélectionnez une catégorie`
- Taille: **Extra Large** (pour iPad)

### 5.3 Ajouter une grille de boutons
- Glisser **"Collection" → "Grid"**
- Source de données: **Catégories** (filtrée: Actif = coché)
- Tri: **Ordre** (ascendant)

### 5.4 Configurer chaque bouton de la grille
- Ajouter un **"Button"** dans chaque cellule
- Label (dynamique): `component.row.Nom`
- Couleur de fond (dynamique): `component.row.Couleur` (utiliser comme hex)
- Taille minimum: **80px × 80px**

### 5.5 Ajouter l'action au clic du bouton
1. Cliquer sur le bouton
2. **"Interactions" → "Add Action"**
3. Action: **"Set Variables"**
   - Variable: `categorie_id` = `component.row.ID`
   - Variable: `categorie_nom` = `component.row.Nom`
4. Puis: **"Navigate"** → Écran **"Sélection Boisson"** (créé à l'étape 6)

### 5.6 Ajouter bouton Admin (optionnel)
- Ajouter un petit **"Button"** en bas à droite
- Label: "⚙️ Admin"
- Action: Naviguer vers **"Paramètres"** (créé à l'étape 10)

---

## ÉTAPE 6: Écran 2 - Sélection Boisson

### 6.1 Créer l'écran
- **"Screens" → "+"** → **"Blank"**
- Nommer: `Sélection Boisson`

### 6.2 Ajouter un titre dynamique
- **"Title"**: `${categorie_nom} - Choisissez une boisson`
- Taille: **Large**

### 6.3 Ajouter un bouton "Retour"
- **"Button"**: `← Retour aux catégories`
- Action: 
  - **"Clear Variables"** (vider `categorie_id` et `categorie_nom`)
  - **"Navigate"** → **"Accueil"**

### 6.4 Ajouter une grille de boissons
- **"Collection → Grid"**
- Source: **Boissons** (filtrée: `Catégorie.ID = categorie_id`)
- Tri: **Ordre** (ascendant)

### 6.5 Configurer chaque bouton
- **"Button"** dans la cellule
- Label: `${component.row.Nom} \n ${component.row.Prix}€`
- Fond: reprendre couleur catégorie (optionnel)
- Taille: **80px × 80px**

### 6.6 Ajouter l'action au clic
- **"Set Variables"**:
  - `boisson_id` = `component.row.ID`
  - `boisson_nom` = `component.row.Nom`
  - `boisson_prix` = `component.row.Prix`
- **"Navigate"** → **"Sélection Chambre"**

---

## ÉTAPE 7: Écran 3 - Sélection Chambre

### 7.1 Créer l'écran
- **"Screens" → "+"** → **"Blank"**
- Nommer: `Sélection Chambre`

### 7.2 Ajouter titre + contexte
- **"Title"**: `Sélectionnez une chambre`
- **"Paragraph"**: `${categorie_nom} - ${boisson_nom} (${boisson_prix}€)`
- Taille petit

### 7.3 Ajouter bouton "Retour"
- **"Button"**: `← Retour aux boissons`
- Action:
  - **"Clear Variables"** (`boisson_id`, `boisson_nom`, `boisson_prix`)
  - **"Navigate"** → **"Sélection Boisson"**

### 7.4 Ajouter grille de chambres
- **"Collection → Grid"** (5 colonnes)
- Source: **Chambres**
- Tri: **Numéro** (ascendant)

### 7.5 Configurer chaque bouton chambre
- **"Button"** dans la cellule
- Label: `${component.row.Numéro}`
- Taille: **100px × 100px** (gros numéros)
- Police: **48pt** (très gros)

### 7.6 Ajouter l'action d'enregistrement au clic
- **"Add Row to Consommations"**
  - **DateHeure**: `now()` (timestamp actuel)
  - **Chambre_ID**: `component.row.ID`
  - **Boisson_ID**: `boisson_id`
  - **Catégorie_ID**: `categorie_id`
  - **Prix**: `boisson_prix`
- **"Show Notification"** (Toast):
  - Message: `✓ Chambre ${component.row.Numéro} - ${boisson_nom} enregistrée`
  - Type: **Success**
  - Durée: **2 secondes**
- **"Clear Variables"** (`categorie_id`, `categorie_nom`, `boisson_id`, `boisson_nom`, `boisson_prix`)
- **"Navigate"** → **"Accueil"** (retour automatique)

---

## ÉTAPE 8: Écran 4 - Historique Journée (À configurer plus tard)

**Note:** Vous gérez les consommations plus tard, donc cette partie peut attendre.

Pour tester rapidement:
- Créer un écran vide nommé **"Historique Journée"**
- Ajouter titre: `Consommations du jour`
- Laisser vide pour l'instant

---

## ÉTAPE 9: Écran 5 - Résumé Jour (À configurer plus tard)

- Créer un écran vide nommé **"Résumé Jour"**
- Ajouter titre: `Résumé du jour`

---

## ÉTAPE 10: Écran 6 - Paramètres Admin (Simple pour commencer)

### 10.1 Créer l'écran
- **"Screens" → "+"** → **"Blank"**
- Nommer: `Paramètres`

### 10.2 Ajouter du contenu
- **"Title"**: `Configuration`
- **"Tabs"**:
  - Tab 1: **"Gestion Boissons"** (afficher table BOISSONS éditable)
  - Tab 2: **"Gestion Catégories"** (afficher table CATÉGORIES éditable)
  - Tab 3: **"Gestion Chambres"** (afficher table CHAMBRES éditable)

### 10.3 Configurer les tables éditables
Pour chaque table:
- **"Data Table"** ou **"Collection"**
- Source: Table correspondante
- Colonnes visibles: Nom, Prix/Ordre/Couleur, Actif
- Activer **"Editable"** (modifier directement)

### 10.4 Ajouter bouton "Retour"
- **"Button"**: `← Retour à l'accueil`
- Action: **"Navigate"** → **"Accueil"**

---

## PHASE 3: Configuration Finale

---

## ÉTAPE 11: Ajouter la Navigation principale

### 11.1 Menu de navigation (Tab bar recommandé pour iPad)
- Aller dans les **"Settings"** de l'app
- Ajouter une **"Tab bar"** (menu horizontal/vertical)
- Ajouter les onglets:
  - 🏠 **Accueil** → Écran "Accueil"
  - 📋 **Historique** → Écran "Historique Journée"
  - 📊 **Résumé** → Écran "Résumé Jour"
  - ⚙️ **Admin** → Écran "Paramètres"

---

## ÉTAPE 12: Test sur iPad

### 12.1 Installer l'app Glide
- Accéder à l'app en mode développeur ou déploiement test
- Sur iPad: ouvrir dans Safari ou installer comme PWA

### 12.2 Tester le flux complet
1. Cliquer sur une catégorie (ex: "Bières")
2. Sélectionner une boisson (ex: "Bière blonde")
3. Cliquer sur un numéro de chambre (ex: "101")
4. Vérifier:
   - ✅ Toast de confirmation apparaît
   - ✅ Retour automatique à l'accueil
   - ✅ Un enregistrement créé dans Consommations

### 12.3 Vérifier la base de données
- Aller dans **"Data"** → **"Consommations"**
- Vérifier qu'une nouvelle ligne a été créée avec:
  - DateHeure: timestamp actuel
  - Chambre_ID: numéro cliqué
  - Boisson_ID: boisson sélectionnée
  - Catégorie_ID: catégorie sélectionnée
  - Prix: prix de la boisson

---

## 🎉 RÉSUMÉ RAPIDE

✅ **4 Tables créées** (Catégories, Boissons, Chambres, Consommations)
✅ **3 Écrans opérationnels** (Accueil, Boisson, Chambre)
✅ **Flux complet** (Catégorie → Boisson → Chambre → Enregistrement auto)
✅ **Navigation** (Retour possible à chaque étape)
✅ **Admin panel** (modifier boissons/catégories)

**Prêt à déployer sur iPad !** 🚀

---

## 📝 NOTES IMPORTANTES

- **Variables globales utilisées**: `categorie_id`, `categorie_nom`, `boisson_id`, `boisson_nom`, `boisson_prix`
- **Permissions**: Assurez-vous que l'app est accessible (pas d'authentification requise pour la réception)
- **Écrans à compléter plus tard**: Historique, Résumé, Rapports (vous le gérerez après)

