document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailDigitado = document.getElementById("loginEmail").value.trim();

    const senhaDigitada = document.getElementById("loginSenha").value;

    const userSalvo = localStorage.getItem("user");

    if (!userSalvo) {
        alert("❌ Nenhum usuário cadastrado");
        return;
    }

    const user = JSON.parse(userSalvo);

    if (emailDigitado === user.email && senhaDigitada === user.senha) {
        alert("✅ Login realizado com sucesso!");
        window.location.href = "../index.html";
    } else {
        alert("❌ E-mail ou senha incorretos");
    }
});
