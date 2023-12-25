export function createContactPage() {
    let content = document.getElementById("content")

    let contactHeadline = document.createElement("h1")
    contactHeadline.textContent = "CONTACT US!!"

    let contactNumber = document.createElement("h3")
    contactNumber.textContent = "Phone number: 0610439260"

    content.append(contactHeadline, contactNumber)
}