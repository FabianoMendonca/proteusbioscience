async function loadHeader() {
    const header = await fetch("../components/header.html").then(r => r.text());
    document.getElementById("header-placeholder").innerHTML = header;

    // Ativar menu mobile depois de carregar o header
    const toggleBtn = document.querySelector("#mobile-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
}

loadHeader();