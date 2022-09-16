//* FUNCION FETCH PARA CONSUMIR Y CREAR PRODUCTOS
const fetchProducts = async () => {
    //? INTENTAR CON ESTAS OPCIONES
    try {
        const respuesta = await fetch("./js/json/products.json");
        const contenido = await respuesta.json();
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
