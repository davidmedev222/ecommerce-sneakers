//* EVENTOS CLICK PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA EL NODO BTN AGREGAR PRODUCTO
    ev.target.matches(".products-btn") && cartAdd(ev);

    //? EVENTO PARA EL NODO BTN AUMENTAR CANTIDAD
    ev.target.matches(".cart-increase, .cart-increase svg, .cart-increase svg path") && cartIncrease(ev);

    //? EVENTO PARA EL NODO BTN DISMINUIR CANTIDAD
    ev.target.matches(".cart-decrease, .cart-decrease svg, .cart-decrease svg path") && cartDecrease(ev);

    //? EVENTO PARA EL NODO BTN ELIMINAR PRODUCT
    ev.target.matches(".cart-delete, .cart-delete svg, .cart-delete svg path ") && cartDelete(ev);

    //? EVENTO PARA EL NODO BTN APLICAR CUPON
    ev.target.matches(".cart-apply") && cartCupon();
});
