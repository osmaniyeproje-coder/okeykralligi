const History = {

    render() {

        const area = document.getElementById("historyList");

        if (!area) return;

        const games = Games.getAll();

        if (games.length === 0) {

            area.innerHTML = "Henüz oyun oynanmadı.";

            return;

        }

        let html = "";

        games.reverse().forEach(game => {

            html += `
                <div class="historyItem">

                    <strong>${game.date}</strong>

                    <br>

                    ${game.type}

                </div>
            `;

        });

        area.innerHTML = html;

    }

};
