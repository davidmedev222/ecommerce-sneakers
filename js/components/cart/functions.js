//* FUNCION AGREGAR AL CARRITO
function cartSave(ev) {
    //? PRODUCTO CREADO DESDE EL EVENTO CLICK
    const product = {
        name: ev.target.dataset.name,
        quantity: 1,
        price: parseInt(ev.target.dataset.price),
        image: ev.target.dataset.image,
        id: ev.target.dataset.id,
    };
    //? FUNCION PARA SABER EXISTENCIA DE UN PRODUCTO EN EL CARRITO
    const index = cart.findIndex((cadaElement) => product.id === cadaElement.id);
    index === -1 ? cart.push(product) : cart[index].quantity++;
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartNotification();
}

//* FUNCION GUARDAR PRODUCTOS AGREGADOS A LOCAL STORAGE
const cartLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//* FUNCION NOTIFICACION DE AGREGADO AL CARRITO
const cartNotification = () => {
    Toastify({
        text: "SE AGREGO AL CARRITO",
        duration: 3000,
        position: "right",
        style: {
            background: "#181818",
            color: "#e6e6e6",
            fontSize: "1rem",
            fontWeight: "600",
        },
    }).showToast();
};
