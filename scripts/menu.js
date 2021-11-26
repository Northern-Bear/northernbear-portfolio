const toggleMenu = () => {
    const menuItems = document.getElementById("my-links");
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}