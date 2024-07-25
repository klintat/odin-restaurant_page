import menuData from "../menu-items";

function menu() {
   const content = document.getElementById("content");
   const menuContainer = document.createElement("div");
   const barTitle = document.createElement("div");
   const menuTitle = document.createElement("div");
   const menuItems = document.createElement("div");
   

   menuContainer.classList.add("menu-container");
   barTitle.classList.add("menu-bar-title");
   barTitle.textContent = "Pancake Bar";
   menuTitle.classList.add("menu-title");
   menuTitle.textContent = "Menu";
   menuItems.classList.add("menu-items");

   content.appendChild(menuContainer);
   menuContainer.appendChild(barTitle);
   menuContainer.appendChild(menuTitle);
   menuContainer.appendChild(menuItems);

   const createMenu = array => {
      array.forEach(category => {
         const categoryContainer = document.createElement("div");
         const categoryTitle = document.createTextNode(category.categoryName);

         categoryContainer.appendChild(categoryTitle);

         category.items.forEach(item => {
            const itemContainer = document.createElement("div");
            const info = document.createElement("div");
            const name = document.createElement("div");
            const desc = document.createElement("div");
            const price = document.createElement("div");

            categoryContainer.classList.add('category-container');
            info.classList.add('info');
            itemContainer.classList.add('menu-item');
            name.classList.add('name');
            desc.classList.add('desc');
            price.classList.add('price');
            name.textContent = item.name;
            desc.textContent = item.description;
            price.textContent = item.price;

            categoryContainer.appendChild(itemContainer);
            itemContainer.appendChild(info);
            info.appendChild(name);
            info.appendChild(desc);
            info.appendChild(price);
         });

         menuItems.appendChild(categoryContainer);
      });
   };

   createMenu(menuData);
}

export { menu };