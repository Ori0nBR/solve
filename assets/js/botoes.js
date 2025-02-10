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