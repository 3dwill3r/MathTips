const toggle = document.getElementById("darkModeToggle");

if (toggle) {
    toggle.checked = localStorage.getItem("darkMode") === "true";

    if (toggle.checked) {
        document.body.classList.add("dark");
    }

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", toggle.checked);
    });
}
