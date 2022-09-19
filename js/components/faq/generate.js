//* NODO FAQ ORDER PARA UTILIZAR
const nodoFaqOrder = document.querySelector(".faq-order");
//* GENERADOR ALEATORIO DE ORDEN AL CARGAR EL SITIO
const faqOrder = Math.floor(Math.random() * 100000);

//* FUNCION GENERAR ORDEN
const faq = () => {
    //? GUARDAR EN LOCALSTORAGE FAR ORDER CON LA CLAVE CART-ORDEN
    localStorage.setItem("cart-order", JSON.stringify(faqOrder));
    //? EL CONTENIDO DEL NODO ES IGUAL A LOS GUARDADO EN LOCALSTORAGE
    nodoFaqOrder.textContent = `#${JSON.parse(localStorage.getItem("cart-order"))}`;
    //? SE AGREGA LA CLASE AL NODO FAQ ORDER
    nodoFaqOrder.classList.add("faq-order-visibility");
};

//* FUNCION PARA VISUALIZAR ORDEN SI EXISTE EN LOCALSTORAGE
const faqOrderView = () => {
    //? NODO FAQ GENERATE DESACTIVADO
    document.querySelector(".faq-generate").disabled = true;
    //? SE AGREGA LA CLASE AL NODO FAQ ORDER
    nodoFaqOrder.classList.add("faq-order-visibility");
    //? EL CONTENIDO DEL NODO ES IGUAL A LO GUARDADO EN LOCALSTORAGE
    nodoFaqOrder.textContent = `#${JSON.parse(localStorage.getItem("cart-order"))}`;
};
//? EJECUTAR SOLAMENTE SI EXISTE INFORMACION CON LA CLAVE CART ORDEN EN LS
JSON.parse(localStorage.getItem("cart-order")) && faqOrderView();
