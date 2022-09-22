//* FUNCION AGREGAR AL CARRITO
const cartAdd = (ev) => {
    //? PRODUCTO CREADO DESDE EL EVENTO CLICK
    const product = {
        name: ev.target.dataset.name,
        quantity: 1,
        price: parseInt(ev.target.dataset.price),
        image: ev.target.dataset.image,
        color: ev.target.dataset.color,
        id: parseInt(ev.target.dataset.id),
    };
    //? RECORRER ARRAY Y APLICAR METODO FINDINDEX
    const index = cart.findIndex((cadaElement) => product.id === cadaElement.id);
    index === -1 ? cart.push(product) : cart[index].quantity++;
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartViewBadge();
    cartNotification("ADDED TO CART");
};

//* FUNCION GUARDAR PRODUCTOS AGREGADOS A LOCAL STORAGE
const cartLocalStorage = (clave, valor) => {
    //? ALMACENAR INFORMACION AL LS CON CLAVE Y VALOR PASADO POR PARAM
    localStorage.setItem(clave, valor);
};

//* FUNCION NOTIFICACION DE AGREGADO AL CARRITO
const cartNotification = (message) => {
    Toastify({
        text: message,
        duration: 3000,
        position: "right",
        className: "toastify",
    }).showToast();
};
