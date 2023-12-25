export function init() { 
    let content = document.getElementById("content")
    

    let heading = document.createElement("h1")
    heading.textContent = "COOL RESTAURANT"

    let subtext = document.createElement("p")
    subtext.textContent = "This lovely restaurant in the middle of this cool place has really nice food!"
    
    let image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    image.width = 400
    image.height = 250
    
    content.append(heading, subtext, image)
}