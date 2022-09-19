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

//* FUNCION FETCH PARA CONSUMIR Y CREAR PRODUCTOS FILTRADOS
const fetchProductsFiltered = async (selectValue) => {
    //? INTENTAR CON ESTAS OPCIONES
    try {
        //? ESPERAR A CONSUMIR API PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        const response = await fetch("./js/json/products.json");
        //? ESPERAR A TRANSFORMAR EL JSON A OBJETO PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        let content = await response.json();
        //? EJECUTAR SOLAMENTE SI EXISTE EL CUPON APLICADO
        JSON.parse(localStorage.getItem("cart-cupon")) &&
            content.forEach((cadaProduct) => {
                cadaProduct.price = cadaProduct.price - 100;
            });
        //? ESPERAR A FILTRAR DEPENDIENDO EL VALOR RECIBIDO POR PARAMETRO
        content = await content.filter((cadaProduct) => cadaProduct.year === selectValue);
        //? EJECUTAR VISUALIZAR PRODUCTOS
        productsView(content);
        //? SINO, CAPTURAR ERROR
    } catch (error) {
        console.log(error);
    }
};

//* EVENTO PARA DETECTAR OPCION ELEGIDA DEL FILTRADO
nodoSelect.addEventListener("change", (ev) => {
    //? VALOR DEL SELECT GUARDADO EN SELECTVALUE
    const selectValue = ev.target.value;
    //? EJECUTAR FETCHPRODUCTS SI EL VALOR DEL SELECT ES IGUAL, SINO EJECUTAR FETCHPRODUCTSFILTERED
    selectValue === "ALL" ? fetchProducts() : fetchProductsFiltered(selectValue);
});

//* FUNCION FETCH PARA CONSUMIR Y CREAR PRODUCTOS EN LA PESTAÑA FLOTANTE
const fetchProductsWindow = async (productWindowId) => {
    //? INTENTAR CON ESTAS OPCIONES
    try {
        //? ESPERAR A CONSUMIR API PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        const response = await fetch("./js/json/products.json");
        //? ESPERAR A TRANSFORMAR EL JSON A OBJETO PARA AVANZAR Y GUARDARLA EN UNA VARIABLE
        let content = await response.json();
        //? ESPERAR A FILTRAR DEPENDIENDO EL VALOR RECIBIDO POR PARAMETRO
        content = await content.filter((cadaProduct) => cadaProduct.id === productWindowId);
        //? EJECUTAR VISUALIZAR PRODUCTOS DE LA PESTAÑA FLOTANTE
        productsWindowView(content);
        //? SINO, CAPTURAR ERROR
    } catch (error) {
        console.log(error);
    }
};
