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

document.getElementById('toggle-projects-btn').addEventListener('click', function() {
    var projects = [
        document.getElementById('project7'),
        document.getElementById('project8'),
        document.getElementById('project9'),
        document.getElementById('project10'),
        document.getElementById('project11'),
        document.getElementById('project12')
    ];
    
    var allHidden = projects.every(function(project) {
        return project.style.display === 'none';
    });

    projects.forEach(function(project) {
        project.style.display = allHidden ? 'block' : 'none';
    });

    var button = document.getElementById('toggle-projects-btn');
    button.textContent = allHidden ? 'Menos Projetos' : 'Mais Projetos';
});