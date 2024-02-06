let links = document.querySelector('.header .menu');
document.querySelector('.botonMenu').addEventListener('click', function(){
    links.classList.toggle('active')
});

document.addEventListener('DOMContentLoaded', function() {
    const botonObtener = document.querySelector('.boton');
    const ventanaAgregar = document.querySelector('.ventana__agregar');
    const botonAgregar = ventanaAgregar.querySelector('button');
    const cerrarVentana = ventanaAgregar.querySelector('.cerrar__ventana');

    const icono = document.querySelector('.icono');
    const carrito = document.querySelector('.carrito');
    const botonCarrito = carrito.querySelector('button');
    const cerrarCarrito = carrito.querySelector('.cerrar__ventana');

    // Función para abrir o cerrar la ventana agregar
    function toggleVentanaAgregar() {
        ventanaAgregar.classList.toggle('mostrar');
    }

    // Función para abrir o cerrar la ventana carrito
    function toggleVentanaCarrito() {
        carrito.classList.toggle('mostrar');
    }

    botonObtener.addEventListener('click', toggleVentanaAgregar);
    botonAgregar.addEventListener('click', toggleVentanaAgregar);
    cerrarVentana.addEventListener('click', toggleVentanaAgregar);

    icono.addEventListener('click', toggleVentanaCarrito);
    botonCarrito.addEventListener('click', toggleVentanaCarrito);
    cerrarCarrito.addEventListener('click', toggleVentanaCarrito);
});
