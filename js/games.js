const Games = {

    load() {

        const db = Storage.get();

        if (!db.games) {

            db.games = [];

            Storage.save(db);

        }

    },

    add(game) {

        const db = Storage.get();

        game.id = Date.now();

        game.date = new Date().toLocaleString("tr-TR");

        db.games.push(game);

        Storage.save(db);

        UI.renderLeaderboard();

        UI.renderHistory();

    },

    getAll() {

        return Storage.get().games;

    }

};
