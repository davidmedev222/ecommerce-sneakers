//* FUNCION FETCH PARA CONSUMIR Y CREAR PRODUCTOS
const fetchProducts = async () => {
    try {
        const respuesta = await fetch("./js/json/products.json");
        const contenido = await respuesta.json();
        products(contenido);
    } catch (error) {
        console.log(error);
    }
};

//* FUNCION PARA CREAR PRODUCTOS A TRAVES DEL DOM CON EL FETCH
const products = (contenido) => {
    contenido.forEach((cadaProduct) => {
        const clonProducts = templateProducts.content.cloneNode(true);
        clonProducts.querySelector(".products-price").textContent = cadaProduct.price;
        clonProducts.querySelector(".products-img").setAttribute("src", `./img/${cadaProduct.imageOne}`);
        clonProducts.querySelector(".products-name").textContent = cadaProduct.name;
        fragmentProducts.appendChild(clonProducts);
    });
    nodoProducts.appendChild(fragmentProducts);
};
