const inimigos = [
    {nome: "Goblin", armadura: 5},
    {nome: "Orc", armadura: 8},
    {nome: "Dragão", armadura: 12},
    {nome: "Jureg, the boss", armadura: 30}
];

let inimigoAtual = {};
let atqPlayer = 31;
let goldPlayer = 0;
let vidaInimigo = 100;
const vidaMaxima = 100;

function carregarNovoInimigo() {
    inimigoAtual = inimigos[Math.floor(Math.random() * inimigos.length)];
    vidaInimigo = 100;
    recarregarJogo();
}

function atacarInimigo() {
    const damage = Math.max(0, atqPlayer - inimigoAtual.armadura);
    vidaInimigo = Math.max(0, vidaInimigo - damage);

    if (vidaInimigo === 0) {
        let goldGanho = (inimigoAtual.nome === "Jureg, the boss") ? 50 : 10;
        goldPlayer += goldGanho;
        alert(`Você derrotou ${inimigoAtual.nome} e ganhou ${goldGanho} ouro!`);
        carregarNovoInimigo();
    }

    recarregarJogo();
}

function aprimorarAtaque() {
    if (goldPlayer >= 10) {
        goldPlayer -= 10;
        atqPlayer += 5;
        // alert("Você aprimorou seu ataque em 5");
        recarregarJogo();
    } else {
        // alert("Você não tem ouro suficiente!");
    }
}

function recarregarJogo() {
    document.getElementById("nomeInimigo").textContent = inimigoAtual.nome;
    document.getElementById("armaduraInimigo").textContent = inimigoAtual.armadura;
    document.getElementById("atqPlayer").textContent = atqPlayer;
    document.getElementById("gold").textContent = goldPlayer;
    document.getElementById("barraVida").textContent = vidaInimigo + "%"; 

    const healthPercentage = (vidaInimigo / vidaMaxima) * 100;
    document.getElementById("barraVida").style.width = healthPercentage + "%";

}

carregarNovoInimigo();