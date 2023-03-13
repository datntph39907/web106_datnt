function menu() {
    var x = document.getElementById("menuMB");
    
    if (x.className === "menu-2") {
        x.className += " show";
    } else {
        x.className = "menu-2";
    }
}