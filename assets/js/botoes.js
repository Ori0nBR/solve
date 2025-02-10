function toggleDiv() {
    var div = document.getElementById("back");
    var icon = document.getElementById("up-down");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";  // Exibe a div
        icon.classList.remove("fa-angle-down"); // Remove seta para baixo
        icon.classList.add("fa-angle-up"); // Adiciona seta para cima
    } else {
        div.style.display = "none";   // Oculta a div
        icon.classList.remove("fa-angle-up"); // Remove seta para cima
        icon.classList.add("fa-angle-down"); // Adiciona seta para baixo
    }
}