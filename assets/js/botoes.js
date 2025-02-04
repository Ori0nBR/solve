function toggleDiv() {
    var div = document.getElementById("back");
    if (div.style.display === "none") {
        div.style.display = "block"; // Exibe a div
    } 
    else {
        div.style.display = "none";  // Oculta a div
    }
}