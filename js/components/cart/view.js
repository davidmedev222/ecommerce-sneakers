//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA PRODUCTOS DEL CARRITO
const nodoCartContent = document.querySelector(".cart-content");
const templateCartProduct = document.getElementById("template-cart-product").content;
const fragmentCartProduct = document.createDocumentFragment();

//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA TOTAL DEL CARRITO
const nodoCartEnd = document.querySelector(".cart-end");
const templateCartEnd = document.getElementById("template-cart-end").content;
const fragmentCartEnd = document.createDocumentFragment();

//* FUNCION PARA CREAR ATRIBUTO DATA EN LOS BTN DISMINUIR, AUMENTAR Y ELIMINAR PRODUCTO
const cartAttributeData = (clon, btn, indice, product) => {
    clon.querySelectorAll(btn)[indice].dataset.id = product.id;
    clon.querySelectorAll(`${btn} svg`)[indice].dataset.id = product.id;
    clon.querySelectorAll(`${btn} svg path`)[indice].dataset.id = product.id;
};

//* FUNCION PARA VISUALIZAR EL CARRITO
const cartView = () => {
    //? APLICAR A CADA PRODUCTO DEL CARRITO
    cart.forEach((cadaProduct) => {
        //? CLONACION DEL TEMPLATE CART PRODUCT
        const clonCartProduct = templateCartProduct.cloneNode(true);
        clonCartProduct.querySelector(".cart-picture img").setAttribute("src", `../img/${cadaProduct.image}`);
        clonCartProduct.querySelector(".cart-name").textContent = cadaProduct.name;
        clonCartProduct.querySelector(".cart-color").textContent = cadaProduct.color;
        clonCartProduct.querySelector(".cart-price").textContent = `${cadaProduct.price * cadaProduct.quantity} USD`;
        clonCartProduct.querySelector(".cart-quantity").textContent = cadaProduct.quantity;
        cartAttributeData(clonCartProduct, ".cart-btn", 0, cadaProduct);
        cartAttributeData(clonCartProduct, ".cart-btn", 1, cadaProduct);
        cartAttributeData(clonCartProduct, ".cart-btn", 2, cadaProduct);
        //? ADJUNTO EL CLON MODIFICADO AL FRAGMENT CART PRODUCT
        fragmentCartProduct.appendChild(clonCartProduct);
    });
    //? ADJUNTO EL FRAGMENT COMPLETO AL NODO CART CONTENT
    nodoCartContent.appendChild(fragmentCartProduct);
    //? METODO PARA CALCULAR EL PRECIO TOTAL DE TODOS LOS PRODUCTOS
    const cartTotal = cart.reduce((acumulador, element) => acumulador + element.price * element.quantity, 0);
    //? CLONACION DEL TEMPLATE CART END
    const clonCartEnd = templateCartEnd.cloneNode(true);
    clonCartEnd.querySelector(".cart-description").textContent = `(${cart.length}) products`;
    clonCartEnd.querySelector(".cart-price").textContent = `${cartTotal} USD`;
    //? ADJUNTO EL CLON MODIFICADO AL FRAGMENT CART END
    fragmentCartEnd.appendChild(clonCartEnd);
    //? ADJUNTO EL FRAGMENT COMPLETO AL NODO CART END
    nodoCartEnd.appendChild(fragmentCartEnd);
};

//* FUNCION VISUALIZAR CARRITO SI EXISTEN PRODUCTOS
const cartLoad = () => {
    //? EJECUTAR SOLAMENTE SI EXISTEN ELEMENTS EN CART
    cart.length > 0 && cartView();
};
//? SE EJECUTA PARA VISUALIZAR EL CARRITO AL CARGAR EL SITIO
cartLoad();

//* FUNCION DISMINUIR CANTIDAD DEL PRODUCTO
const cartDecrease = (ev) => {
    //? NODOS VACIOS AL EJECUTAR FUNCION CART INCREASE
    nodoCartContent.textContent = "";
    nodoCartEnd.textContent = "";
    //? RECORRER ARRAY Y APLICAR METODO FINDINDEX
    const decrease = cart.findIndex((cadaProduct) => parseInt(ev.target.dataset.id) === cadaProduct.id);
    //? EJECUTAR SOLAMENTE SI LA CANTIDAD DEL PRODUCTO ES MAYOR A 1
    cart[decrease].quantity > 1 && cart[decrease].quantity--;
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartLoad();
};

//* FUNCION AUMENTAR CANTIDAD DEL PRODUCTO
const cartIncrease = (ev) => {
    //? NODOS VACIOS AL EJECUTAR FUNCION CART INCREASE
    nodoCartContent.textContent = "";
    nodoCartEnd.textContent = "";
    //? RECORRER ARRAY Y APLICAR METODO FINDINDEX
    const increase = cart.findIndex((cadaElement) => parseInt(ev.target.dataset.id) === cadaElement.id);
    //? EJECUTAR SOLAMENTE SI INCREASE NO ES IGUAL A -1
    increase != -1 && cart[increase].quantity++;
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartLoad();
};

//* FUNCION ELIMINAR PRODUCTO
const cartDelete = (ev) => {
    //? NODOS VACIOS AL EJECUTAR FUNCION CART INCREASE
    nodoCartContent.textContent = "";
    nodoCartEnd.textContent = "";
    //? RECORRER ARRAY Y APLICAR METODO FILTER
    cart = cart.filter((cadaProduct) => cadaProduct.id != parseInt(ev.target.dataset.id));
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartViewBadge();
    cartLoad();
};

//* FUNCION CUPON DE DESCUENTO
const cartCupon = () => {
    //? VALOR DEL NODO INPUT DEL CUPON
    const inputCupon = document.querySelector(".cart-cupon").value;
    //? SI ES IGUAL SE APLICA EL CUPON, SINO SE MUESTRA UNA NOTIFICACION
    inputCupon === cupon ? cartCuponApply() : cartNotification("CODE INVALID");
};
//? FUNCION APLICAR CUPON DE DESCUENTO
const cartCuponApply = () => {
    //? NODOS VACIOS AL EJECUTAR FUNCION CART CUPON APPLY
    nodoCartContent.textContent = "";
    nodoCartEnd.textContent = "";
    //? SE ACTUALIZA EL VALOR DEL CUPON
    cupon = "DAVIDMEDEV";
    cartLocalStorage("cart-cupon", JSON.stringify(cupon));
    //? SE MODIFICA EL PRECIO EN LOS PRODUCTOS
    cart.forEach((cadaProduct) => {
        cadaProduct.price = cadaProduct.price - 100;
    });
    //? FUNCIONES A EJECUTAR
    cartLocalStorage("products-cart", JSON.stringify(cart));
    cartNotification("CODE APPLIED");
    cartLoad();
    //? SE BLOQUEAN EL INPUT Y BOTON DEL CUPON
    document.querySelector(".cart-cupon").disabled = true;
    document.querySelector(".cart-apply").disabled = true;
};
