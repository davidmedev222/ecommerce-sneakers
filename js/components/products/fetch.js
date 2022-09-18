//* FUNCION FETCH PARA CONSUMIR Y CREAR PRODUCTOS
const fetchProducts = async () => {
    //? INTENTAR CON ESTAS OPCIONES
    try {
        //? ESPERAR A CONSUMIR API PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        const respuesta = await fetch("./js/json/products.json");
        //? ESPERAR A TRANSFORMAR EL JSON A OBJETO PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        const contenido = await respuesta.json();
        //? EJECUTAR SOLAMENTE SI EXISTE EL CUPON APLICADO
        JSON.parse(localStorage.getItem("cart-cupon")) &&
            contenido.forEach((cadaProduct) => {
                cadaProduct.price = cadaProduct.price - 100;
            });
        //? EJECUTAR VISUALIZAR PRODUCTOS
        productsView(contenido);
        //? SINO CAPTURAR EL ERROR
    } catch (error) {
        console.log(error);
    }
};

//* EVENTO AL TERMINAR DE CARGAR DOM PARA EL SITIO
document.addEventListener("DOMContentLoaded", () => {
    //? EJECUTAR FUNCION
    fetchProducts();
});
