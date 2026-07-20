
const App = {

    init() {

        console.log("👑 Okey Krallığı Başlatıldı");

        Storage.init();

        UI.init();

        Players.load();

        Games.load();

        UI.renderLeaderboard();

    }

};
