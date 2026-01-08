const btn = document.getElementById("darkModeToggle");
const themeSystem = localStorage.getItem("theme");

// Função para aplicar o tema e o ícone correto
const applyTheme = (isDark) => {
    if (isDark) {
        document.body.classList.add("dark");
        if (btn) btn.innerHTML = "☀️"; // Sol para o modo escuro
    } else {
        document.body.classList.remove("dark");
        if (btn) btn.innerHTML = "🌙"; // Lua para o modo claro
    }
};

// 1. Verifica a preferência salva ao carregar a página
if (themeSystem === "dark") {
    applyTheme(true);
}

// 2. Evento de clique para alternar
if (btn) {
    btn.addEventListener("click", () => {
        const isDarkNow = document.body.classList.toggle("dark");

        // Salva a nova preferência
        localStorage.setItem("theme", isDarkNow ? "dark" : "light");

        // Atualiza apenas o texto/ícone dentro do botão
        btn.innerHTML = isDarkNow ? "☀️" : "🌙";
    });
}
