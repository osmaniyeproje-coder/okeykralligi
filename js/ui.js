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
renderHistory() {

    History.render();

}
renderGamePlayers(){

const area=document.getElementById("gamePlayers");

if(!area) return;

const players=Players.getAll();

let html="";

players.forEach(player=>{

html+=`

<div class="gamePlayer">

<label>

<input
type="checkbox"
class="joinPlayer"
data-id="${player.id}"
>

${player.name}

</label>

<input
type="number"
value="0"
class="playerPoint"
data-id="${player.id}"
>

</div>

`;

});

area.innerHTML=html;

}
