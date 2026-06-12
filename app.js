go(screen) {
    this.state.previous = this.state.screen;
    this.state.screen = screen;
    this.render();
}

back() {

    if (this.state.screen === "rooms") {
        this.state.screen = "drinks";
    }

    else if (this.state.screen === "drinks") {
        this.state.screen = "categories";
    }

    else {
        this.state.screen = "categories";
    }

    this.render();
}
