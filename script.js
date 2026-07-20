
// ===============================
// OKEY KRALLIĞI v1.0
// ===============================

const players = [
    { id: 1, name: "Bahattin Konut", score: 0 },
    { id: 2, name: "Mehmet Can Zile", score: 0 },
    { id: 3, name: "Ahmet Ziya Bitim", score: 0 },
    { id: 4, name: "Deniz Kuyluk", score: 0 },
    { id: 5, name: "Seçkin Yılmaz", score: 0 },
    { id: 6, name: "Rüştü Korkmaz", score: 0 },
    { id: 7, name: "Recep Koca", score: 0 },
    { id: 8, name: "Gökhan Toprak", score: 0 },
    { id: 9, name: "Veysi Temel", score: 0 },
    { id: 10, name: "Hakan Göktaş", score: 0 },
    { id: 11, name: "Murat Gül", score: 0 },
    { id: 12, name: "Aytek Evren", score: 0 },
    { id: 13, name: "Fatih Öztekin", score: 0 },
    { id: 14, name: "Ahmet Erkam Ketmen", score: 0 },
    { id: 15, name: "Uğur Ede", score: 0 }
];

function saveData() {
    localStorage.setItem("okeyKralligiPlayers", JSON.stringify(players));
}

function loadData() {
    const data = localStorage.getItem("okeyKralligiPlayers");

    if (data) {
        const saved = JSON.parse(data);
        players.splice(0, players.length, ...saved);
    } else {
        saveData();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    console.log("Okey Krallığı başlatıldı.");
    console.log(players);
});
