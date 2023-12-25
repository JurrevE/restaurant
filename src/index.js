import { init } from "./init.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";
import "./styles.css"

function clearpage() {
    let content = document.getElementById("content")
    content.innerHTML = ""
}


function createButtons() {
    let buttondiv = document.createElement("div")
    buttondiv.id = "buttondiv"
    let content = document.getElementById("content")
    let homebutton = document.createElement("button")
    homebutton.id = "homebutton"
    homebutton.textContent = "Home"
    
    let menubutton = document.createElement("button")
    menubutton.id = "menubutton"
    menubutton.textContent = "Menu"

    let contactbutton= document.createElement("button")
    contactbutton.id = "contactbutton"
    contactbutton.textContent = "Contact"

    buttondiv.append(homebutton, menubutton, contactbutton)
    content.append(buttondiv)
}

function buttonFunc() {
     homebutton.addEventListener("click", function() {
        console.log("kanker")
        clearpage()
        createButtons()
        buttonFunc()
        init()
        
    })
    menubutton.addEventListener("click", function() {
        console.log("kanker2")
        clearpage()
        createButtons()
        buttonFunc()
        createMenuPage()
        
    })

    contactbutton.addEventListener("click", function() {
        console.log("kanker3")
        clearpage()
        createButtons()
        buttonFunc()
        createContactPage()
    })
}
createButtons()
buttonFunc()
init()




