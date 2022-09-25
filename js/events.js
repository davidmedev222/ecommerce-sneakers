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

    //? EVENTO PARA EL NODO BTN MOSTRAR PESTAÑA FLOTANTE
    ev.target.matches(".products-arrow, .products-arrow svg, .products-arrow svg path") && windowView(ev);

    //? EVENTO PARA EL NODO BTN CERRAR PESTAÑA FLOTANTE
    ev.target.matches(".products-window-close, .products-window-close svg, .products-window-close svg path") &&
        windowClose();

    //? EVENTO PARA EL NODO GENERAR ORDEN DE COMPRA
    ev.target.matches(".faq-generate") && faq();
});

//* EVENTO SCROLL PARA LA PESTAÑA DEL SITIO
window.addEventListener("scroll", () => {
    //? VARIABLE IGUAL AL VALOR DEL SCROLL DEL EJE Y
    const headerScroll = window.scrollY;
    //? ALTERNAR CLASE SI LA CONDICION SE CUMPLE
    nodoHeader.classList.toggle("header-sticky", headerScroll <= headerScrollDefault);
    //? VALOR DE LA VARIABLE ACTUALIZADO
    headerScrollDefault = headerScroll;
    //? EJECUTAR SOLAMENTE SI EL SCROLL DEL EJE Y ES IGUAL A 0
    window.scrollY === 0 && nodoHeader.classList.remove("header-sticky");
});

//* EVENTO LOAD PARA LA PESTAÑA DEL SITIO
window.addEventListener("load", (ev) => {
    //? EJECUTAR DELETE LOADING DESPUES DE 750 MILISEGUNDOS
    setTimeout(loadingClose, 500);
    setTimeout(loadingDelete, 4500);
});
