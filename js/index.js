const ubicacion_usuario = document.querySelector(".ubicacion-usuario")
ubicacion_usuario.addEventListener('click', datosUbicacionActual)

const localizacion = document.querySelector(".buscar")
localizacion.addEventListener("submit", datosLocalizacion)

function datosUbicacionActual() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            const longitud = posicion.coords.longitude
            const latitud = posicion.coords.latitude
            window.location.href = 'tiempo.html?latitud=' + latitud + '&longitud=' + longitud
        })
    }
}

function datosLocalizacion(event) {
    const input = document.querySelector(".input")
    const localizacionInicial = input.value
    window.location.href = 'tiempo.html?localizacionInicial=' + localizacionInicial
    event.preventDefault()
    localizacion.reset()
}
