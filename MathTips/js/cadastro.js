// ===== MÁSCARAS =====
document.getElementById("cpf").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.value = v;
});

document.getElementById("telefone").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = v;
});

// ===== VALIDA CPF =====
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * (10 - i);
    }

    let dig1 = (soma * 10) % 11;
    if (dig1 === 10) dig1 = 0;
    if (dig1 != cpf[9]) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }

    let dig2 = (soma * 10) % 11;
    if (dig2 === 10) dig2 = 0;

    return dig2 == cpf[10];
}

// ===== VALIDA TELEFONE =====
function validarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");
    return telefone.length === 11;
}

// ===== SUBMIT =====
document
    .getElementById("cadastroForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value;
        const telefone = document.getElementById("telefone").value;
        const senha = document.getElementById("senha").value;
        const confirmar = document.getElementById("confirmarSenha").value;

        if (!validarCPF(cpf)) {
            alert("❌ CPF inválido");
            return;
        }

        if (!validarTelefone(telefone)) {
            alert("❌ Telefone inválido");
            return;
        }

        if (senha !== confirmar) {
            alert("❌ As senhas não coincidem");
            return;
        }

        // Simula salvamento
        localStorage.setItem("user", JSON.stringify({ nome, email, senha }));

        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    });
