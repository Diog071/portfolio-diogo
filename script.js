const botao = document.getElementById("btnProjetos");

botao.addEventListener("click", function () {
    botao.textContent = "Indo para projetos... 🚀";

    setTimeout(() => {
        botao.textContent = "Ver Projetos";
    }, 2000);
});window.addEventListener("load", () => {
    console.log("Portfólio carregado com sucesso 🚀");
});const mensagem = document.getElementById("mensagem");

const hora = new Date().getHours();

if (hora < 12) {
    mensagem.textContent = "Bom dia! Vamos construir algo hoje ☀️";
} else if (hora < 18) {
    mensagem.textContent = "Boa tarde! Hora de evoluir 💻";
} else {
    mensagem.textContent = "Boa noite! Último push do dia 🌙";
}