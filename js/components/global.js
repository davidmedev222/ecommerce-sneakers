//* CARRITO DE PRODUCTOS
let cart = JSON.parse(localStorage.getItem("products-cart")) || [];

//* CUPON PARA EL CARRITO
let cupon = JSON.parse(localStorage.getItem("cart-cupon")) || "2JORDAN2";

//* NODO DE CANTIDAD DE PRODUCTOS DEL HEADER
let cartBadge = document.querySelector(".header-badge");

//* FUNCION VISUALIZAR CANTIDAD DE PRODUCTOS EN EL ICONO DEL CARRITO
const cartViewBadge = () => {
    //? EL CONTENIDO DEL NODO VA A SER IGUAL A LA LONGITUD DEL CARRITO
    cartBadge.textContent = cart.length;
};
//? SE EJECUTA PARA VISUALIZAR AL CARGAR EL SITIO
cartViewBadge();

//* FUNCION PARA CREAR ATRIBUTO DATA EN LOS NODOS BTN, SVG Y PATH
const AttributeDataId = (clon, btn, indice, product) => {
    clon.querySelectorAll(btn)[indice].dataset.id = product.id;
    clon.querySelectorAll(`${btn} svg`)[indice].dataset.id = product.id;
    clon.querySelectorAll(`${btn} svg path`)[indice].dataset.id = product.id;
};
