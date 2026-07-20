const App = {

    init() {

        console.log("👑 Okey Krallığı Başlatıldı");

        Storage.init();

        Players.load();

        UI.init();

        Games.load();

    }

};
