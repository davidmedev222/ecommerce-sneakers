//* EVENTO AL TERMINAR DE CARGAR DOM PARA EL SITIO
document.addEventListener("DOMContentLoaded", () => {
    //? EJECUTAR FUNCION
    fetchProducts();
});

//* EVENTOS CLICK PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA EL NODO BTN AGREGAR PRODUCTO
    ev.target.matches(".products-btn") && cartSave(ev);
});
