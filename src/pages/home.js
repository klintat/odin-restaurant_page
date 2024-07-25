import { pageSwitch } from "..";
import { menu } from "/src/pages/menu.js";

function home() {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    container.classList.add("home-container");
    content.appendChild(container);
    
    const title = document.createElement("div");
    title.classList.add("title");
    const titleName = document.createTextNode("Pancake Bar");
    title.appendChild(titleName);
    container.appendChild(title);

    const description = document.createElement("div");
    description.classList.add("text");
    const descriptionText = document.createTextNode("Ditch the ordinary breakfast! Build your dream stack at a pancake bar. Fluffy pancakes, a symphony of toppings and endless combinations. Sweet or savory, the choice is yours!")
    description.appendChild(descriptionText);
    container.appendChild(description);

    const orderBtn = document.createElement("button");
    const orderBtnText = document.createTextNode("ORDER NOW");
    orderBtn.classList.add("btn-order");
    orderBtn.appendChild(orderBtnText);
    description.appendChild(orderBtn);

    orderBtn.addEventListener('click', () => {
        pageSwitch(menu);
    });

    const pictureSlide = document.createElement("div");
    pictureSlide.classList.add("mini-pictures");
    container.appendChild(pictureSlide);
    
    const pictureOne = document.createElement("div");
    pictureSlide.appendChild(pictureOne);
    pictureOne.classList.add("first-picture");

    const pictureTwo = document.createElement("div");
    pictureSlide.appendChild(pictureTwo);
    pictureTwo.classList.add("second-picture");

    const pictureThree = document.createElement("div");
    pictureSlide.appendChild(pictureThree);
    pictureThree.classList.add("third-picture");

    const pictureFour = document.createElement("div");
    pictureSlide.appendChild(pictureFour);
    pictureFour.classList.add("fourth-picture");

    const pictureFive = document.createElement("div");
    pictureSlide.appendChild(pictureFive);
    pictureFive.classList.add("fifth-picture");
}

export { home };