# Application Glide - Gestion des Consommations d'Hôtel

## 📱 Structure de l'Application

### 1. TABLES & DONNÉES

#### Table 1: BOISSONS
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| Nom | Texte | Nom de la boisson |
| Prix | Nombre | Prix unitaire |
| Icône | Image (optionnel) | Image de la boisson |
| Actif | Booléen | Pour désactiver une boisson |

**Données initiales suggérées:**
- Eau (0.50)
- Café (1.00)
- Thé (1.00)
- Soda (1.50)
- Bière (2.50)
- Vin blanc (3.50)
- Vin rouge (3.50)
- Jus (1.50)
- Cocktail (4.00)
- Champagne (5.00)

#### Table 2: CHAMBRES
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| Numéro | Numéro | Numéro de chambre |

**Données initiales:** Chambres 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45

#### Table 3: CONSOMMATIONS
| Colonne | Type | Description |
|---------|------|-------------|
| ID | Numéro (clé primaire) | Identifiant unique |
| DateHeure | Date/Heure | Timestamp automatique |
| Chambre_ID | Relation | Lien vers table CHAMBRES |
| Boisson_ID | Relation | Lien vers table BOISSONS |
| Prix | Nombre | Prix capturé du moment |
| Date_Jour | Texte (calculé) | Format YYYY-MM-DD |

#### Colonnes Calculées:
- **Chambre_ID → Numéro**: Afficher le numéro de chambre
- **Boisson_ID → Nom**: Afficher le nom de la boisson
- **DateHeure → Heure**: Extraire l'heure seule

---

## 🎨 ÉCRANS & NAVIGATION

### Écran 1: ACCUEIL - Sélection Boisson
**Style:** Grille 3 colonnes, boutons XL

**Composants:**
- Titre: "Sélectionnez une boisson"
- Grille dynamique (source: Table BOISSONS filtrée Actif=true)
- Chaque bouton affiche:
  - Icône (si disponible) ou première lettre
  - Nom de la boisson
  - Prix en bas
- Bouton "Admin" (petit, coin inférieur droit) → Accès aux settings

**Actions au clic sur bouton boisson:**
1. Stocker l'ID de la boisson sélectionnée dans une variable
2. Naviguer vers Écran 2 (Sélection Chambre)

---

### Écran 2: SÉLECTION CHAMBRE
**Style:** Grille 5 colonnes, gros numéros

**Composants:**
- Titre: "Sélectionnez une chambre"
- Sous-titre: "Boisson sélectionnée: [Nom boisson]" (affichage dynamique)
- Grille dynamique (source: Table CHAMBRES triée par Numéro)
- Chaque bouton affiche le numéro de chambre en très gros

**Actions au clic sur bouton chambre:**
1. Créer un nouvel enregistrement dans CONSOMMATIONS:
   - DateHeure: now()
   - Chambre_ID: [ID chambre cliquée]
   - Boisson_ID: [ID boisson stockée]
   - Prix: [Prix boisson capturé]
2. Afficher confirmation rapide (toast): "✓ Chambre XX - [Boisson] enregistrée"
3. Vider les variables temporaires
4. Naviguer automatiquement vers Écran 1 (Accueil)

---

### Écran 3: HISTORIQUE JOURNÉE
**Style:** Liste avec détails

**Composants:**
- Titre: "Consommations du [date du jour]"
- Filtre date: Afficher uniquement le jour actuel
- Tri: Heure décroissante (plus récent d'abord)
- Liste avec colonnes:
  - Heure
  - Chambre
  - Boisson
  - Prix
- Bouton suppression (corbeille) sur chaque ligne
- Bouton "Retour" ou tab

**Actions au clic suppression:**
1. Confirmation: "Supprimer cette consommation?"
2. Supprimer l'enregistrement
3. Rafraîchir la liste

---

### Écran 4: VUE RÉCAPITULATIVE - Par Chambre (Jour)
**Style:** Tableau récapitulatif

**Composants:**
- Titre: "Résumé du jour - Par Chambre"
- Groupe par Chambre (pivot)
- Pour chaque chambre:
  - Numéro chambre (en gras)
  - Nombre de consommations
  - Total € de la chambre
  - Détail: petite liste déroulante (expandable) montrant chaque ligne
- Total général en bas (somme de toutes les chambres)

**Actions:**
- Bouton "Supprimer" sur chaque consommation en détail
- Bouton "Exporter CSV" en haut
- Bouton "Exporter Excel" en haut

---

### Écran 5: RAPPORTS PAR PÉRIODE
**Style:** Sélecteurs de date + tableau

**Composants:**
- Titre: "Rapports par Période"
- Sélecteur date début
- Sélecteur date fin
- Bouton "Afficher" (filtre)
- Tableau dynamique:
  - Colonne: Date
  - Colonne: Chambre
  - Colonne: Boisson
  - Colonne: Quantité (count par jour/chambre/boisson)
  - Colonne: Total €
- Total général

**Statistiques optionnelles:**
- Boisson la plus commandée
- Chambre la plus consommatrice
- Montant journalier moyen

---

### Écran 6: CONFIGURATION (Admin)
**Style:** Formulaires éditables

#### Onglet 1: Gestion Boissons
- Tableau BOISSONS éditable
- Boutons: Ajouter, Modifier, Supprimer (soft delete via Actif=false)
- Colonnes visibles: Nom, Prix, Icône, Actif

#### Onglet 2: Gestion Chambres
- Tableau CHAMBRES éditable
- Bouton: Ajouter nouvelle chambre

#### Onglet 3: Paramètres
- Code PIN pour accès admin (optionnel)
- Paramètres devise/langue

---

## 🔄 NAVIGATION COMPLÈTE

```
Accueil (Écran 1: Boissons)
    ↓ [Clic boisson]
Sélection Chambre (Écran 2)
    ↓ [Clic chambre] → Enregistrement auto + Toast ✓
Retour Écran 1 (automatique)

Menu latéral / Tabs:
- 🏠 Accueil (Écran 1)
- 📋 Historique Jour (Écran 3)
- 📊 Résumé Jour (Écran 4)
- 📈 Rapports (Écran 5)
- ⚙️ Admin (Écran 6)
```

---

## ✅ CHECKLIST DE CONFIGURATION GLIDE

### A. Créer les Tables
- [ ] Table BOISSONS avec données initiales
- [ ] Table CHAMBRES avec données initiales (42 chambres)
- [ ] Table CONSOMMATIONS (vide, structure seule)

### B. Configurer les Relations
- [ ] CONSOMMATIONS.Chambre_ID → CHAMBRES.ID (many-to-one)
- [ ] CONSOMMATIONS.Boisson_ID → BOISSONS.ID (many-to-one)

### C. Créer les Colonnes Calculées
- [ ] CONSOMMATIONS.Date_Jour = format(DateHeure, "YYYY-MM-DD")
- [ ] CONSOMMATIONS.Heure = format(DateHeure, "HH:mm:ss")
- [ ] CHAMBRES.Consommations_Total = count + sum(Prix) des relations

### D. Construire les Écrans
- [ ] Écran 1: Grille Boissons
- [ ] Écran 2: Grille Chambres
- [ ] Écran 3: Liste Historique avec filtres
- [ ] Écran 4: Tableau Récapitulatif
- [ ] Écran 5: Rapport Période
- [ ] Écran 6: Admin Panels

### E. Configurer les Actions
- [ ] Actions de clic boutons boisson
- [ ] Actions de clic boutons chambre (enregistrement + navigation)
- [ ] Actions de suppression
- [ ] Export CSV/Excel

### F. Optimisations UX
- [ ] Augmenter taille boutons pour iPad
- [ ] Ajouter haptic feedback (vibration) au clic
- [ ] Personnaliser couleurs par boisson (optionnel)
- [ ] Ajouter loading states
- [ ] Responsivité landscape/portrait

---

## 📤 EXPORT AUTOMATIQUE

**Actions d'export:**
1. **CSV:** Trigger sur bouton → Export CONSOMMATIONS filtrées par période
2. **Excel:** Trigger sur bouton → Export avec mise en forme

**Format CSV:**
```
Date,Heure,Chambre,Boisson,Prix
2026-06-12,14:30:00,101,Bière,2.50
2026-06-12,14:32:15,105,Champagne,5.00
```

---

## 🚀 ORDRE DE DÉPLOIEMENT RECOMMANDÉ

1. **Phase 1 (MVP):** Écrans 1, 2 + Table CONSOMMATIONS
2. **Phase 2:** Écrans 3, 4 (Historique & Résumé)
3. **Phase 3:** Écrans 5, 6 (Rapports & Admin)
4. **Phase 4:** Optimisations UX & Export

---

## 💾 FORMAT GOOGLE SHEETS (si choix)

Si vous utilisez Google Sheets, les 3 feuilles à créer:
- Feuille 1: `Boissons`
- Feuille 2: `Chambres`
- Feuille 3: `Consommations` (ou laisser Glide la créer)

