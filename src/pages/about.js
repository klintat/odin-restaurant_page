function about() {
    const content = document.getElementById("content");
    const aboutContainer = document.createElement("div");
    const aboutTitle = document.createElement("div");
    const aboutHeading = document.createElement("div");
    const aboutText = document.createElement("div");
    const aboutTitleText = document.createElement("div");
    
    aboutContainer.classList.add("about-container");
    aboutTitle.classList.add("about-title");
    aboutText.classList.add("about-text");
    aboutHeading.classList.add("about-heading");
    aboutTitleText.classList.add("title-text");

    aboutTitleText.textContent = "Pancake Bar";
    aboutHeading.textContent = "About Us";
    aboutText.innerHTML = `Pancake Bar your one-stop destination for fluffy, delicious pancakes! 
    We're passionate about creating the perfect pancake experience, from the moment you step through our doors to your last bite.
    Our menu boasts a tantalizing array of pancake creations, from classic buttermilk to indulgent chocolate chip and banana. 
    We use only the freshest ingredients to ensure every bite is a taste sensation. 
    Whether you're a sweet tooth or a savory lover, we have something to satisfy your cravings. But it's not just about the pancakes. 
    We pride ourselves on creating a warm and inviting atmosphere where you can relax and enjoy your meal. 
    Our friendly staff is committed to providing exceptional service and making your visit unforgettable. 
    So come on in, grab a seat, and let us flip your world upside down with our amazing pancakes!
    <br><br><strong><i>Our Story:</i></strong><br> Our journey began in a small, cozy kitchen where we experimented with different flavors and toppings, 
    perfecting the art of the pancake. We quickly realized that our creations were more than just breakfast; they were a way to bring people 
    together and create unforgettable moments.
    <br><br><strong><i>Our Commitment:</i></strong><br> Today, Pancake Bar is a place where friends and families can gather to enjoy a delicious meal 
    and create lasting memories. We're committed to using the finest, freshest ingredients to ensure that every bite is as amazing as the first.`;

    content.appendChild(aboutContainer);
    aboutContainer.appendChild(aboutTitle);
    aboutTitle.appendChild(aboutTitleText);
    aboutContainer.appendChild(aboutHeading);
    aboutContainer.appendChild(aboutText);
}

export { about }