let links = document.querySelector('.header .menu');
document.querySelector('.botonMenu').addEventListener('click', function(){
    links.classList.toggle('active')
});

document.addEventListener('DOMContentLoaded', function() {
    const botonObtener = document.querySelector('.boton');
    const ventanaAgregar = document.querySelector('.ventana__agregar');
    const botonAgregar = ventanaAgregar.querySelector('button');
    const cerrarVentana = ventanaAgregar.querySelector('.cerrar__ventana');

    botonObtener.addEventListener('click', function() {
        ventanaAgregar.classList.toggle('mostrar');
    });

    botonAgregar.addEventListener('click', function() {
        ventanaAgregar.classList.remove('mostrar');
    });

    cerrarVentana.addEventListener('click', function() {
        ventanaAgregar.classList.remove('mostrar');
    });
});
