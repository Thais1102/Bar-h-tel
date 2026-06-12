# Application Glide - Gestion des Consommations d'Hôtel
## Version 2 - Avec Catégories de Boissons

---

## 📱 STRUCTURE DE L'APPLICATION - MISE À JOUR

### 1. TABLES & DONNÉES

#### Table 1: CATÉGORIES
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| Nom | Texte | Nom de la catégorie |
| Couleur | Texte | Code couleur (hex) pour UI |
| Icône | Image | Image/emoji de la catégorie |
| Ordre | Numéro | Position d'affichage |
| Actif | Booléen | Pour désactiver une catégorie |

**Données initiales:**
1. Softs (Couleur: #87CEEB - Bleu ciel)
2. Bières (Couleur: #D4AF37 - Or)
3. Vins (Couleur: #722F37 - Rouge vin)
4. Apéritifs (Couleur: #FF6B6B - Rouge)
5. Cocktails (Couleur: #6C5CE7 - Violet)
6. Mocktails (Couleur: #00B894 - Vert)

---

#### Table 2: BOISSONS
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| Nom | Texte | Nom de la boisson |
| Catégorie_ID | Relation | Lien vers CATÉGORIES |
| Prix | Nombre | Prix unitaire |
| Icône | Image (optionnel) | Image de la boisson |
| Ordre | Numéro | Position dans la catégorie |
| Actif | Booléen | Pour désactiver une boisson |

**Données initiales suggérées:**

**Softs:**
- Eau (0.50)
- Jus d'orange (1.50)
- Jus de pomme (1.50)
- Soda (1.50)
- Limonade (1.50)
- Café (1.00)
- Thé (1.00)

**Bières:**
- Bière blonde (2.50)
- Bière brune (2.50)
- Bière sans alcool (2.00)

**Vins:**
- Vin blanc (3.50)
- Vin rouge (3.50)
- Vin rosé (3.50)

**Apéritifs:**
- Pastis (3.00)
- Kir (2.50)
- Kir royal (4.00)
- Spritz (4.00)

**Cocktails:**
- Mojito (5.00)
- Daïquiri (5.00)
- Margarita (5.00)
- Piña Colada (5.00)
- Cosmopolitan (5.00)

**Mocktails:**
- Virgin Mojito (3.00)
- Shirley Temple (3.00)
- Mocktail Fruit (3.50)
- Smooth Mango (3.50)

---

#### Table 3: CHAMBRES
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| Numéro | Numéro | Numéro de chambre |

**Données initiales:** Chambres 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45

---

#### Table 4: CONSOMMATIONS
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| DateHeure | Date/Heure | Timestamp automatique |
| Chambre_ID | Relation | Lien vers CHAMBRES |
| Boisson_ID | Relation | Lien vers BOISSONS |
| Catégorie_ID | Relation | Lien vers CATÉGORIES (copie pour historique) |
| Prix | Nombre | Prix capturé du moment |
| Date_Jour | Texte (calculé) | Format YYYY-MM-DD |

#### Colonnes Calculées:
- **CONSOMMATIONS.Date_Jour** = format(DateHeure, "YYYY-MM-DD")
- **CONSOMMATIONS.Heure** = format(DateHeure, "HH:mm:ss")
- **CONSOMMATIONS.Chambre_Numéro** = [via relation] CHAMBRES.Numéro
- **CONSOMMATIONS.Boisson_Nom** = [via relation] BOISSONS.Nom
- **CONSOMMATIONS.Catégorie_Nom** = [via relation] CATÉGORIES.Nom
- **BOISSONS.Catégorie_Nom** = [via relation] CATÉGORIES.Nom

---

## 🎨 ÉCRANS & NAVIGATION - VERSION AVEC CATÉGORIES

### Écran 1: ACCUEIL - Sélection Catégorie (NOUVEAU)
**Style:** Grille 2-3 colonnes, boutons XXL

**Composants:**
- Titre: "Sélectionnez une catégorie"
- Sous-titre: "Quelle type de boisson ?"
- Grille dynamique (source: Table CATÉGORIES filtrée Actif=true, triée par Ordre)
- Chaque bouton affiche:
  - Icône/Emoji de la catégorie
  - Nom de la catégorie (gros texte)
  - Fond coloré selon code couleur
- Bouton "Admin" (petit, coin inférieur droit)

**Actions au clic sur bouton catégorie:**
1. Stocker l'ID de la catégorie sélectionnée dans une variable
2. Naviguer vers Écran 2 (Sélection Boisson)

---

### Écran 2: SÉLECTION BOISSON (MODIFIÉ)
**Style:** Grille 3 colonnes, gros boutons

**Composants:**
- Titre: "[Catégorie sélectionnée] - Choisissez une boisson"
- Chemin de navigation: "< Retour aux catégories" (lien)
- Grille dynamique (source: BOISSONS filtrées par Catégorie_ID = [catégorie sélectionnée])
- Chaque bouton affiche:
  - Icône (si disponible)
  - Nom de la boisson
  - Prix en bas
- Fond peut reprendre la couleur de la catégorie

**Actions au clic sur bouton boisson:**
1. Stocker l'ID de la boisson + ID catégorie dans des variables
2. Naviguer vers Écran 3 (Sélection Chambre)

**Action "Retour aux catégories":**
1. Vider les variables
2. Naviguer vers Écran 1

---

### Écran 3: SÉLECTION CHAMBRE (ANCIEN ÉCRAN 2 - RENOMMÉ)
**Style:** Grille 5 colonnes, gros numéros

**Composants:**
- Titre: "Sélectionnez une chambre"
- Sous-titre: "Catégorie: [Catégorie] | Boisson: [Boisson] - [Prix]€"
- Chemin: "< Retour aux boissons" (lien)
- Grille dynamique (source: CHAMBRES triée par Numéro)
- Chaque bouton affiche le numéro de chambre

**Actions au clic sur bouton chambre:**
1. Créer un nouvel enregistrement dans CONSOMMATIONS:
   - DateHeure: now()
   - Chambre_ID: [ID chambre]
   - Boisson_ID: [ID boisson stockée]
   - Catégorie_ID: [ID catégorie stockée]
   - Prix: [Prix boisson capturé]
2. Afficher confirmation (toast): "✓ Chambre XX - [Catégorie] - [Boisson] enregistrée"
3. Vider les variables temporaires
4. Naviguer automatiquement vers Écran 1 (Accueil Catégories)

**Action "Retour aux boissons":**
1. Vider les variables
2. Naviguer vers Écran 2

---

### Écran 4: HISTORIQUE JOURNÉE (INCHANGÉ)
**Style:** Liste avec détails

**Composants:**
- Titre: "Consommations du [date du jour]"
- Filtre date: Afficher uniquement le jour actuel
- Tri: Heure décroissante (plus récent d'abord)
- Liste avec colonnes:
  - Heure
  - Chambre
  - Catégorie (avec couleur de fond)
  - Boisson
  - Prix
- Bouton suppression (corbeille) sur chaque ligne

**Actions au clic suppression:**
1. Confirmation: "Supprimer cette consommation?"
2. Supprimer l'enregistrement
3. Rafraîchir la liste

---

### Écran 5: VUE RÉCAPITULATIVE - Par Chambre (MODIFIÉ)
**Style:** Tableau récapitulatif avec filtre catégorie

**Composants:**
- Titre: "Résumé du jour - Par Chambre"
- Filtre optionnel: Afficher/masquer par catégorie
- Groupe par Chambre (pivot)
- Pour chaque chambre:
  - Numéro chambre (en gras)
  - Nombre de consommations
  - Total € de la chambre
  - Sous-groupe par catégorie (avec couleur)
  - Détail: liste déroulante montrant chaque ligne avec icône catégorie
- Total général en bas

**Actions:**
- Bouton "Supprimer" sur chaque consommation en détail
- Bouton "Exporter CSV" en haut
- Bouton "Exporter Excel" en haut

---

### Écran 6: RAPPORTS PAR PÉRIODE (MODIFIÉ)
**Style:** Sélecteurs de date + tableau + filtres

**Composants:**
- Titre: "Rapports par Période"
- Sélecteur date début
- Sélecteur date fin
- Filtre catégorie: Multi-select (optionnel)
- Bouton "Afficher" (filtre)
- Tableau dynamique:
  - Colonne: Date
  - Colonne: Catégorie (avec couleur)
  - Colonne: Boisson
  - Colonne: Chambre
  - Colonne: Quantité
  - Colonne: Total €
- Total général

**Statistiques:**
- Catégorie la plus commandée
- Boisson la plus commandée
- Chambre la plus consommatrice
- Montant journalier moyen

---

### Écran 7: CONFIGURATION (Admin - MODIFIÉ)
**Style:** Tabs pour chaque section

#### Onglet 1: Gestion Catégories (NOUVEAU)
- Tableau CATÉGORIES éditable
- Boutons: Ajouter, Modifier, Supprimer
- Colonnes: Nom, Couleur (color picker), Icône, Ordre, Actif

#### Onglet 2: Gestion Boissons (MODIFIÉ)
- Tableau BOISSONS éditable
- Colonnes: Nom, Catégorie (dropdown), Prix, Icône, Ordre, Actif
- Boutons: Ajouter, Modifier, Supprimer
- Tri par catégorie

#### Onglet 3: Gestion Chambres
- Tableau CHAMBRES éditable
- Bouton: Ajouter nouvelle chambre

#### Onglet 4: Paramètres
- Code PIN pour accès admin (optionnel)
- Paramètres devise/langue
- Sauvegarde backup

---

## 🔄 NAVIGATION COMPLÈTE (MISE À JOUR)

```
Accueil (Écran 1: Catégories)
    ↓ [Clic catégorie]
Sélection Boisson (Écran 2)
    ↓ [Clic boisson]
Sélection Chambre (Écran 3)
    ↓ [Clic chambre] → Enregistrement auto + Toast ✓
Retour Écran 1 (automatique)

Menu latéral / Tabs:
- 🏠 Accueil (Écran 1)
- 📋 Historique Jour (Écran 4)
- 📊 Résumé Jour (Écran 5)
- 📈 Rapports (Écran 6)
- ⚙️ Admin (Écran 7)
```

---

## ✅ CHECKLIST DE CONFIGURATION GLIDE

### A. Créer les Tables
- [ ] Table CATÉGORIES avec données initiales (6 catégories)
- [ ] Table BOISSONS avec données initiales + relations catégories
- [ ] Table CHAMBRES avec données initiales (42 chambres)
- [ ] Table CONSOMMATIONS (vide, structure seule)

### B. Configurer les Relations
- [ ] BOISSONS.Catégorie_ID → CATÉGORIES.ID (many-to-one)
- [ ] CONSOMMATIONS.Chambre_ID → CHAMBRES.ID (many-to-one)
- [ ] CONSOMMATIONS.Boisson_ID → BOISSONS.ID (many-to-one)
- [ ] CONSOMMATIONS.Catégorie_ID → CATÉGORIES.ID (many-to-one)

### C. Créer les Colonnes Calculées
- [ ] CONSOMMATIONS.Date_Jour = format(DateHeure, "YYYY-MM-DD")
- [ ] CONSOMMATIONS.Heure = format(DateHeure, "HH:mm:ss")
- [ ] CONSOMMATIONS.Chambre_Numéro = relation → CHAMBRES.Numéro
- [ ] CONSOMMATIONS.Boisson_Nom = relation → BOISSONS.Nom
- [ ] CONSOMMATIONS.Catégorie_Nom = relation → CATÉGORIES.Nom
- [ ] BOISSONS.Catégorie_Nom = relation → CATÉGORIES.Nom

### D. Construire les Écrans
- [ ] Écran 1: Grille Catégories
- [ ] Écran 2: Grille Boissons (filtrée par catégorie)
- [ ] Écran 3: Grille Chambres
- [ ] Écran 4: Liste Historique avec filtres
- [ ] Écran 5: Tableau Récapitulatif
- [ ] Écran 6: Rapport Période avec filtres
- [ ] Écran 7: Admin Panels

### E. Configurer les Actions
- [ ] Actions de clic boutons catégorie
- [ ] Actions de clic boutons boisson (avec stockage variable)
- [ ] Actions de clic boutons chambre (enregistrement + navigation)
- [ ] Actions de navigation "retour"
- [ ] Actions de suppression avec confirmation
- [ ] Export CSV/Excel

### F. Optimisations UX iPad
- [ ] Augmenter taille boutons (minimum 80px)
- [ ] Ajouter couleurs catégories (fond boutons)
- [ ] Ajouter haptic feedback au clic
- [ ] Responsivité landscape/portrait
- [ ] Loading states
- [ ] Toast notifications

---

## 📤 EXPORT AUTOMATIQUE (INCHANGÉ)

**Format CSV:**
```
Date,Heure,Chambre,Catégorie,Boisson,Prix
2026-06-12,14:30:00,101,Bières,Bière blonde,2.50
2026-06-12,14:32:15,105,Cocktails,Daïquiri,5.00
2026-06-12,14:35:22,101,Softs,Jus d'orange,1.50
```

---

## 🚀 ORDRE DE DÉPLOIEMENT RECOMMANDÉ

1. **Phase 1 (MVP):** Écrans 1, 2, 3 + Tables + Consommations auto
2. **Phase 2:** Écrans 4, 5 (Historique & Résumé)
3. **Phase 3:** Écrans 6, 7 (Rapports & Admin)
4. **Phase 4:** Optimisations UX, couleurs, export
5. **Phase 5:** Ajout de nouvelles catégories (évolutif)

---

## 💾 AVANTAGES DE CETTE STRUCTURE

✅ **Extensibilité:** Ajouter facilement de nouvelles catégories ou boissons sans modifier l'app
✅ **Meilleure UX:** Navigation en 2 étapes (catégorie → boisson) = plus clair
✅ **Statistiques:** Rapports par catégorie possible
✅ **Couleurs:** Chaque catégorie a sa couleur pour reconnaissance rapide
✅ **Maintenabilité:** Admin panel pour gérer boissons et catégories en live
✅ **Évolution future:** Possibilité d'ajouter "Desserts", "Chocolats", etc.

