// Toggle Sidebar
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

// Disable Right Click & Inspect
document.addEventListener("contextmenu", event => event.preventDefault());

document.addEventListener("keydown", event => {
    if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i' || event.key === 'j' || event.key === 'c') || event.key === 'F12') {
        event.preventDefault();
    }
});
