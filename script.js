// Sayfalar
const pages = document.querySelectorAll(".page");
const menuBtns = document.querySelectorAll(".menuBtn");
const bottomBtns = document.querySelectorAll(".bottomBtn");

// Oyuncular (şimdilik örnek)
const players = [
    "Ali",
    "Mehmet",
    "Hasan",
    "Murat",
    "Ahmet",
    "Mustafa",
    "Can",
    "Rüştü",
    "Uğur",
    "Fatih",
    "İsmail",
    "Emre",
    "Yusuf",
    "Osman",
    "Serkan"
];

// Sayfa değiştirme
function showPage(id){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    menuBtns.forEach(btn=>{
        btn.classList.remove("active");
        if(btn.dataset.page===id){
            btn.classList.add("active");
        }
    });

    bottomBtns.forEach(btn=>{
        btn.classList.remove("active");
        if(btn.dataset.page===id){
            btn.classList.add("active");
        }
    });

}

menuBtns.forEach(btn=>{

    btn.onclick=()=>{

        showPage(btn.dataset.page);

    }

});

bottomBtns.forEach(btn=>{

    btn.onclick=()=>{

        showPage(btn.dataset.page);

    }

});

// Oyuncuları göster
const playerList=document.getElementById("playerList");

players.forEach(name=>{

    const div=document.createElement("div");

    div.className="playerCard";

    div.innerHTML=`

    <span>${name}</span>

    <input type="checkbox">

    `;

    playerList.appendChild(div);

});

// Butonlar
document.getElementById("newGameBtn").onclick=()=>showPage("game");
document.getElementById("scoreBtn").onclick=()=>showPage("score");
document.getElementById("historyBtn").onclick=()=>showPage("history");
document.getElementById("rulesBtn").onclick=()=>showPage("rules");

// LocalStorage
if(!localStorage.getItem("okeyData")){
    localStorage.setItem("okeyData",JSON.stringify([]));
}

console.log("Okey Krallığı Hazır 👑");
