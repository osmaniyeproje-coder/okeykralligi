const UI = {

    init() {

        this.renderLeaderboard();

    },

    renderLeaderboard() {

        const scoreTable = document.getElementById("scoreTable");

        if (!scoreTable) return;

        const players = Players.getAll();

        let html = "";

        players.forEach(player => {

            html += `
                <div class="scoreItem">
                    <strong>${player.name}</strong>
                    <span style="float:right;">0 Puan</span>
                </div>
            `;

        });

        scoreTable.innerHTML = html;

    }

};
