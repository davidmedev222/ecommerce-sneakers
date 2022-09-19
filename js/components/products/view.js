//* FUNCION PARA VISUALIZAR PRODUCTOS A TRAVES DEL DOM CON EL FETCH
const productsView = (contenido) => {
    //? APLICAR A CADA PRODUCTO DEL ARRAY RECIBIDO POR PARAMETRO
    contenido.forEach((cadaProduct) => {
        //? NODO VACIO AL EJECUTAR FUNCION PRODUCTS VIEW
        nodoProductsContent.textContent = "";
        //? CLONACION DEL TEMPLATE PRODUCTS
        const clonProducts = templateProducts.cloneNode(true);
        clonProducts.querySelector(".products-price").textContent = `$${cadaProduct.price}`;
        AttributeDataId(clonProducts, ".products-arrow", 0, cadaProduct);
        clonProducts.querySelector(".products-img").setAttribute("src", `./img/${cadaProduct.imageOne}`);
        clonProducts.querySelector(".products-name").textContent = cadaProduct.name;
        clonProducts.querySelector(".products-btn").dataset.name = cadaProduct.name;
        clonProducts.querySelector(".products-btn").dataset.price = cadaProduct.price;
        clonProducts.querySelector(".products-btn").dataset.image = cadaProduct.imageOne;
        clonProducts.querySelector(".products-btn").dataset.color = cadaProduct.color;
        clonProducts.querySelector(".products-btn").dataset.id = cadaProduct.id;
        //? ADJUNTO EL CLON MODIFICADO AL FRAGMENT PRODUCTS
        fragmentProducts.appendChild(clonProducts);
    });
    //? ADJUNTO EL FRAGMENT COMPLETO AL NODO PRODUCTS CONTENT
    nodoProductsContent.appendChild(fragmentProducts);
};
//* FUNCION PARA MOSTRAR PESTAÑA FLOTANTE
const windowView = (ev) => {
    //? VALOR DEL DATA ID GUARDADO EN UNA VARIABLE
    const productWindowId = ev.target.dataset.id;
    //? FUNCION A EJECUTAR
    fetchProductsWindow(productWindowId);
    //? CLASE AÑADIDA AL NODO WINDOW
    nodoWindow.classList.add("products-window-visibility");
};

//* FUNCION PARA CERRAR PESTAÑA FLOTANTE
const windowClose = () => {
    //? CLASE ELIMINADA DEL NODO WINDOW
    nodoWindow.classList.remove("products-window-visibility");
};

//* FUNCION PARA VISUALIZAR PRODUCTO EN LA PESTAÑA FLOTANTE
const productsWindowView = (content) => {
    //? APLICAR AL PRODUCTO DEL ARRAY RECIBIDO POR PARAMETRO
    content.forEach((elProduct) => {
        //? NODO VACIO AL EJECUTAR FUNCION PRODUCTS WINDOW VIEW
        nodoWindowContent.textContent = "";
        //? CLONACION DEL TEMPLATE WINDOW
        const clonWindow = templateWindow.cloneNode(true);
        clonWindow.querySelectorAll(".products-window-image")[0].setAttribute("src", `./img/${elProduct.imageOne}`);
        clonWindow.querySelectorAll(".products-window-image")[1].setAttribute("src", `./img/${elProduct.imageTwo}`);
        clonWindow.querySelector(".products-window-collection").textContent = `${elProduct.collection} ${elProduct.year}`;
        clonWindow.querySelector(".products-window-name").textContent = elProduct.name;
        clonWindow.querySelector(".products-window-color").textContent = elProduct.color;
        clonWindow.querySelector(".products-window-price").textContent = `${elProduct.price} USD`;
        clonWindow.querySelector(".products-window-designer").textContent = elProduct.designer;
        clonWindow.querySelector(".products-window-location").textContent = elProduct.location;
        clonWindow.querySelector(".products-window-launch").textContent = elProduct.launch;
        //? ADJUNTO EL CLON MODIFICADO AL FRAGMENT WINDOW
        fragmentWindow.appendChild(clonWindow);
    });
    //? ADJUNTO EL FRAGMENT COMPLETO AL NODO WINDOW CONTENT
    nodoWindowContent.appendChild(fragmentWindow);
};
