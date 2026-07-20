const Storage = {

    KEY: "okeyDB",

    init() {

        if (!localStorage.getItem(this.KEY)) {

            const database = {

                season: "Temmuz 2026",

                players: [],

                games: [],

                settings: {
                    adminPassword: "baho123"
                },

                rules: []

            };

            localStorage.setItem(this.KEY, JSON.stringify(database));

        }

    },

    get() {

        return JSON.parse(localStorage.getItem(this.KEY));

    },

    save(data) {

        localStorage.setItem(this.KEY, JSON.stringify(data));

    }

};
