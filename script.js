// ======================================
// OKEY KRALLIĞI v1.0
// ======================================

const ADMIN_PASSWORD = "baho123";

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

// Sayfa geçişleri
function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".menuBtn,.bottomBtn").forEach(btn=>{
        btn.classList.remove("active");

        if(btn.dataset.page===pageId){
            btn.classList.add("active");
        }
    });

}

// Menü butonları
document.querySelectorAll(".menuBtn,.bottomBtn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        showPage(btn.dataset.page);

    });

});

// Puan tablosu
function renderScores(){

    const table=document.getElementById("scoreTable");

    const sorted=[...players].sort((a,b)=>b.score-a.score);

    table.innerHTML="";

    sorted.forEach((player,index)=>{

        const medal=[
            "🥇",
            "🥈",
            "🥉"
        ];

        const icon=medal[index] || `${index+1}.`;

        table.innerHTML+=`

<div class="scoreItem">

<div class="scoreName">

${icon} ${player.name}

</div>

<div class="scorePoint">

${player.score}

</div>

</div>

`;

    });

}

// Yönetici Girişi
function login(){

    const pass=document.getElementById("adminPassword").value;

    if(pass===ADMIN_PASSWORD){

        document.getElementById("adminPanel").style.display="block";

        alert("Yönetici Girişi Başarılı");

    }else{

        alert("Şifre Hatalı");

    }

}

document.addEventListener("DOMContentLoaded",()=>{

    renderScores();

    const loginBtn=document.getElementById("loginBtn");

    if(loginBtn){

        loginBtn.addEventListener("click",login);

    }

});
