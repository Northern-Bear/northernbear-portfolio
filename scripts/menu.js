const mediaQuery = window.matchMedia('(max-width: 75em)');

const toggleMenu = () => {
    if (mediaQuery.matches) {
        const menuItems = document.getElementById("my-links");
        if (menuItems.style.display === "block") {
            menuItems.style.display = "none";
        } else {
            menuItems.style.display = "block";
        };
    } else { 
        menuitems.style.display = "flex";
    }
};