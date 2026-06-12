class App {

constructor() {
    this.state = {
        screen: "categories",
        previous: null,

        selectedCategory: null,
        selectedDrink: null
    };

    this.render();
}

/* =========================
   NAVIGATION
========================= */

go(screen) {
    this.state.previous = this.state.screen;
    this.state.screen = screen;
    this.render();
}

back() {
    this.state.screen = this.state.previous || "categories";
    this.render();
}

/* =========================
   AJOUT CONSOMMATION
========================= */

addConsumption(room, drink) {

    const item = {
        id: Date.now(),
        room,
        drinkName: drink.name,
        price: drink.price,
        date: new Date().toISOString()
    };

    DATA.consumptions.push(item);
    localStorage.setItem("consumptions", JSON.stringify(DATA.consumptions));
}

/* =========================
   CAISSE
========================= */

renderCash() {

    const grouped = {};

    DATA.consumptions.forEach(c => {

        const day = new Date(c.date).toISOString().split("T")[0];

        if (!grouped[day]) grouped[day] = {};
        if (!grouped[day][c.room]) grouped[day][c.room] = [];

        grouped[day][c.room].push(c);
    });

    const days = Object.keys(grouped).sort().reverse();

    return `
    <div class="screen">

        <h1>📊 Caisse</h1>

        ${days.map(day => {

            const rooms = grouped[day];

            const totalDay = Object.values(rooms)
                .flat()
                .reduce((a,b)=>a+b.price,0);

            return `
            <div style="background:#fff;padding:15px;margin:10px 0;border-radius:10px;">

                <h2>📅 ${day} — ${totalDay.toFixed(2)}€</h2>

                ${Object.keys(rooms).sort((a,b)=>a-b).map(room => {

                    const items = rooms[room];
                    const totalRoom = items.reduce((a,b)=>a+b.price,0);

                    return `
                    <div style="margin-top:10px;padding:10px;border:1px solid #eee;border-radius:8px;">

                        <h3>🚪 Chambre ${room} — ${totalRoom.toFixed(2)}€</h3>

                        ${items.map(i=>`
                            <div style="display:flex;justify-content:space-between;">
                                <span>${i.drinkName}</span>
                                <strong>${i.price.toFixed(2)}€</strong>
                            </div>
                        `).join("")}

                    </div>
                    `;
                }).join("")}

            </div>
            `;
        }).join("")}

        <button onclick="app.back()">← Retour</button>

    </div>
    `;
}

/* =========================
   CATEGORIES
========================= */

renderCategories() {

    return `
    <div class="screen">

        <h1>Catégories</h1>

        ${DATA.categories.map(c=>`
            <button onclick="app.goDrinks(${c.id})"
                style="background:${c.color}">
                ${c.name}
            </button>
        `).join("")}

        <button onclick="app.go('cash')">📊 Caisse</button>

    </div>
    `;
}

/* =========================
   DRINKS
========================= */

goDrinks(catId) {
    this.state.selectedCategory = catId;
    this.go("drinks");
}

renderDrinks() {

    const drinks = DATA.drinks
        .filter(d => d.category === this.state.selectedCategory);

    return `
    <div class="screen">

        <h2>Boissons</h2>

        ${drinks.map(d=>`
            <button onclick="app.goRooms(${d.id})">
                ${d.name} - ${d.price}€
            </button>
        `).join("")}

        <button onclick="app.back()">← Retour</button>

    </div>
    `;
}

/* =========================
   ROOMS
========================= */

goRooms(drinkId) {
    this.state.selectedDrink = DATA.drinks.find(d => d.id === drinkId);
    this.go("rooms");
}

renderRooms() {

    return `
    <div class="screen">

        <h2>Chambres</h2>

        ${DATA.rooms.map(r=>`
            <button onclick="app.selectRoom(${r})">
                Chambre ${r}
            </button>
        `).join("")}

        <button onclick="app.back()">← Retour</button>

    </div>
    `;
}

selectRoom(room) {

    this.addConsumption(room, this.state.selectedDrink);

    alert("Ajouté ✔");

    this.state.screen = "categories";
    this.render();
}

/* =========================
   RENDER GLOBAL
========================= */

render() {

    const app = document.getElementById("app");

    switch(this.state.screen) {

        case "categories":
            app.innerHTML = this.renderCategories();
            break;

        case "drinks":
            app.innerHTML = this.renderDrinks();
            break;

        case "rooms":
            app.innerHTML = this.renderRooms();
            break;

        case "cash":
            app.innerHTML = this.renderCash();
            break;
    }
}

}

let app;

document.addEventListener("DOMContentLoaded", () => {
    app = new App();
});
