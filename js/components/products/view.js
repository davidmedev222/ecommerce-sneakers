//* FUNCION PARA VISUALIZAR PRODUCTOS A TRAVES DEL DOM CON EL FETCH
const productsView = (contenido) => {
    //? APLICAR A CADA PRODUCTO DEL ARRAY
    contenido.forEach((cadaProduct) => {
        //? CLONACION DEL TEMPLATE PRODUCTS
        const clonProducts = templateProducts.cloneNode(true);
        clonProducts.querySelector(".products-price").textContent = `$${cadaProduct.price}`;
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
