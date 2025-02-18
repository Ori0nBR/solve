function toggleDiv() {
    var div = document.getElementById("back");
    var icon = document.getElementById("up-down");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";  
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up"); 
    } else {
        div.style.display = "none";   
        icon.classList.remove("fa-angle-up"); 
        icon.classList.add("fa-angle-down"); 
    }
}

/*Botão de Menu mobile navbar*/
document.addEventListener("DOMContentLoaded", function() {
    const menuMobile = document.querySelector(".menu-mobile");
    const nav = document.querySelector("nav");
    const menuLinks = document.querySelectorAll("nav ul li a");

    // Alterna o menu ao clicar no ícone
    menuMobile.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer item
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("active");
        });
    });
});