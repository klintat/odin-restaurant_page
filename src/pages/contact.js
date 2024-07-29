import contactImage from '../assets/images/stack-pic.jpg'

function contact() {
    const content = document.getElementById("content");
    const contactContainer = document.createElement("div");
    const contactInfoTitle =document.createElement("div");
    const contactInfo = document.createElement("div");
    const workingTimeTitle =document.createElement("div");
    const workingTime = document.createElement("div");
    const imageContainer = document.createElement("div");
    const contactImg = new Image ();
    contactImg.src = contactImage;

    content.classList.add("contact-content");
    contactContainer.classList.add("contact-container");
    contactInfoTitle.classList.add("contact-info-title");
    contactInfo.classList.add("contact-info");
    workingTimeTitle.classList.add("working-time-title");
    workingTime.classList.add("working-time");
    imageContainer.classList.add("img-container");
    contactImg.classList.add("contact-img");

    contactInfoTitle.innerHTML = `Contact us`;
    contactInfo.innerHTML = `Email: contact@pancakebar.com<br><br>Phone: (+371) 21234567
    <br><br>Address: 987 Pancake boulevard, Flat Town, FT-2244`;
    workingTimeTitle.innerHTML = `Working Hours`;
    workingTime.innerHTML = `Mon - Fri: 8:00 a.m. - 8:00 p.m.<br><br>Sat - Sun: 9:00 a.m. - 9:00 p.m.`;

    content.appendChild(contactContainer);
    contactContainer.appendChild(contactInfoTitle);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(imageContainer);
    imageContainer.appendChild(contactImg);
    contactContainer.appendChild(workingTimeTitle);
    contactContainer.appendChild(workingTime);
}

export {contact}