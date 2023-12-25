export function createMenuPage() {
    let content = document.getElementById("content")
    
    let menuHeadline = document.createElement("h1");
    menuHeadline.textContent = "OUR MENU!!";
    
    let menuText = document.createElement("h2");
    menuText.textContent = "KIES WAT LEKKERS!";
    
    content.append(menuHeadline, menuText)
}
