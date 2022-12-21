
function busquedaBoton(){
    let busquedaUsuario = document.getElementById("buscador").value
    console.log(busquedaUsuario)

    //GENERO - TERROR
    if(busquedaUsuario=="terror" || busquedaUsuario=="TERROR" || busquedaUsuario=="Terror")
    {
        window.open("Categorias/terror/cTerror.html", "_self")
    }

    //TRAILER - JUEGOS
    if(busquedaUsuario=="juegos" || busquedaUsuario=="JUEGOS" || busquedaUsuario=="Juegos" || busquedaUsuario=="Trailer Juegos" || busquedaUsuario=="trailer juegos")
    {
        window.open("Trailers/Juegos/trailerJuegos.html", "_self")
    }
}

function press_Enter(){
    tecla_enter = event.keyCode;

    if(tecla_enter== 13)
    {
        return busquedaBoton();
    }
}

window.onkeydown = press_Enter;