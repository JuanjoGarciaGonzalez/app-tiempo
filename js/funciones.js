window.addEventListener("load", function() {
    document.querySelector(".loader").classList.toggle("loaderClose")
})

const ubicacion_usuario = document.querySelector(".ubicacion-usuario")
const buscar = document.querySelector(".buscar")

const temperatura = document.querySelector(".temperatura")
const tiempo = document.querySelector(".tiempo")
const fecha = document.querySelector(".fecha")
const lugar = document.querySelector(".lugar")
const imagen_principal = document.querySelector(".imagen-principal")

const viento = document.querySelector(".viento")
const humedad = document.querySelector(".humedad")
const visibilidad = document.querySelector(".visibilidad")
const atmos = document.querySelector(".atmos")

function getGET()
{
    // capturamos la url
    var loc = document.location.href
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1]
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&')
        var get = {}
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=')
            get[tmp[0]] = unescape(decodeURI(tmp[1]))
        }
        return get
    }
}

const valores = getGET()
const latitudInicial = valores['latitud']
const longitudInicial = valores['longitud']
const localizacionInicial = valores['localizacionInicial']
  
if(latitudInicial != null && longitudInicial != null) {
    window.addEventListener('load', primeraPeticionGeo(latitudInicial, longitudInicial))
}else {
    window.addEventListener('load', primeraPeticionLoc(localizacionInicial))
}


ubicacion_usuario.addEventListener('click', datosUbicacionActual)


function primeraPeticionGeo(lat, lon) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&lang=es&units=metric&appid=4b3ca0bfd4394579f0b567c81999c600'
    peticionApi(url)
}

function primeraPeticionLoc(loc) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + loc + '&lang=es&units=metric&appid=4b3ca0bfd4394579f0b567c81999c600'
    peticionApi(url)
}

function datosUbicacionActual() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
        let longitud = posicion.coords.longitude
        let latitud = posicion.coords.latitude
        // ubicación actual
        const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitud + '&lon=' + longitud + '&lang=es&units=metric&appid=4b3ca0bfd4394579f0b567c81999c600'
        peticionApi(url)
        })
    }
}

buscar.addEventListener("submit", function(event) {
    const input = document.querySelector(".input")
    const valor = input.value
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + valor + '&lang=es&units=metric&appid=4b3ca0bfd4394579f0b567c81999c600'
    peticionApi(url)
    event.preventDefault()
})

function peticionApi(url) {
    
    fetch(url)
            .then( response => {
                if (!response.ok) {
                    const mensaje_error = document.querySelector(".mensaje-error")
                    mensaje_error.style.visibility = "visible"
                    buscar.reset()
                }else {
                    const mensaje_error = document.querySelector(".mensaje-error")
                    mensaje_error.style.visibility = "hidden"
                    buscar.reset()
                    data = response.json()
 
                    .then( data => {
                        temperatura.innerHTML = Math.round(data.list[0].main.temp) + '<span>ºc</span>'
                        // PRIMERA LETRA MAYÚSCULA
                        function capitalizarPrimeraLetra(str) {
                            return str.charAt(0).toUpperCase() + str.slice(1)
                        }
                        tiempo.innerHTML = capitalizarPrimeraLetra(data.list[0].weather[0].description)
                        const fechaHoy = new Date()
                        const añoActual = fechaHoy.getFullYear()
                        const hoy = fechaHoy.getDate()
                        const mesActual = fechaHoy.getMonth() + 1
                        let horaActual= fechaHoy.getHours()
                        fecha.innerHTML = 'Hoy · ' + hoy + '/' + mesActual + '/' + añoActual
                        lugar.innerHTML = '<i class="fas fa-map-marker-alt"></i>' + data.city.name
                        viento.innerHTML = Math.round(data.list[0].wind.speed) + '<span class="medida">km/h</span>'
                        humedad.innerHTML = data.list[0].main.humidity + '<span class="medida">%</span>'
                        visibilidad.innerHTML = (data.list[0].visibility / 100) + '<span class="medida">km</span>'
                        atmos.innerHTML = data.list[0].main.pressure + '<span class="medida">mb</span>'
                        // icono animado
                        switch(data.list[0].weather[0].main) {
                            case 'Clear':
                                if(horaActual > 7 && horaActual < 19) {
                                    imagen_principal.src = 'images/animated/day.svg'
                                }else {
                                    imagen_principal.src = 'images/animated/night.svg'
                                }
                                break
            
                            case 'Clouds':
                                if(horaActual >= 7 && horaActual <= 19) {
                                    imagen_principal.src = 'images/animated/cloudy-day-1.svg'
                                }else {
                                    imagen_principal.src = 'images/animated/cloudy-night-1.svg'
                                }
                                break
            
                            case 'Thunderstorm':
                                imagen_principal.src = 'images/animated/thunder.svg'
                                break
            
                            case 'Drizzle':
                                imagen_principal.src = 'images/animated/rainy-2.svg'
                                break
            
                            case 'Rain':
                                imagen_principal.src = 'images/animated/rainy-7.svg'
                                break
            
                            case 'Snow':
                                imagen_principal.src = 'images/animated/snowy-6.svg'
                                break
            
                            case 'Atmosphere':
                                imagen_principal.src = 'images/animated/weather.svg'
                                break
                            
                            default:
                                if(horaActual >= 7 && horaActual <= 19) {
                                    imagen_principal.src = 'images/animated/cloudy-day-1.svg'
                                }else {
                                    imagen_principal.src = 'images/animated/cloudy-night-1.svg'
                                }
                        }
        
                        // CREAR LOS DIVS PROXIMOS DIAS
                        const divProx = document.querySelector(".proximos-dias")
                        divProx.innerHTML = ''
                        
                        for (let i = 1; i < 6; i++) {
                            if(i == 1) {
                                divProx.innerHTML += '<div><p class="fecha-prox">Mañana</p><img src="" alt="" class="imagen-prox"><div class="temp-max-min"><span class="max">' + Math.round(data.list[i].main.temp_max) + 'ºc</span><span class="min">' + Math.round(data.list[i].main.temp_min) + 'ºc</span></div></div>' 
                            }else {
                                divProx.innerHTML += '<div><p class="fecha-prox">' +  (hoy + i) + '/' + mesActual + '/' + añoActual + '</p><img src="" alt="" class="imagen-prox"><div class="temp-max-min"><span class="max">' + Math.round(data.list[i].main.temp_max) + 'ºc</span><span class="min">' + Math.round(data.list[i].main.temp_min) + 'ºc</span></div></div>' 
                            }
                            
                        }
        
                        //CAMBIAR SRC IMAGEN PROXIMOS DIAS
                        const imagen_prox = document.querySelectorAll(".imagen-prox")
        
                        for (let i = 0; i < 5; i++) {
                                switch(data.list[(i + 1)].weather[0].main) {
                                    case 'Clear':
                                        if(horaActual >= 7 && horaActual <= 19) {
                                            imagen_prox[i].src = 'images/animated/day.svg'
                                        }else {
                                            imagen_prox[i].src = 'images/animated/night.svg'
                                        }
                                        break
                    
                                    case 'Clouds':
                                        if(horaActual >= 7 && horaActual <= 19) {
                                            imagen_prox[i].src = 'images/animated/cloudy-day-1.svg'
                                        }else {
                                            imagen_prox[i].src = 'images/animated/cloudy-night-1.svg'
                                        }
                                        break
                    
                                    case 'Thunderstorm':
                                        imagen_prox[i].src = 'images/animated/thunder.svg'
                                        break
                    
                                    case 'Drizzle':
                                        imagen_prox[i].src = 'images/animated/rainy-2.svg'
                                        break
                    
                                    case 'Rain':
                                        imagen_prox[i].src = 'images/animated/rainy-7.svg'
                                        break
                    
                                    case 'Snow':
                                        imagen_prox[i].src = 'images/animated/snowy-6.svg'
                                        break
                    
                                    case 'Atmosphere':
                                        imagen_prox[i].src = 'images/animated/weather.svg'
                                        break
                                    
                                    default:
                                        if(horaActual >= 7 && horaActual <= 19) {
                                            imagen_prox[i].src = 'images/animated/cloudy-day-1.svg'
                                        }else {
                                            imagen_prox[i].src = 'images/animated/cloudy-night-1.svg'
                                        }
                                }
                        }
               
                })
                }
                
            })

            .catch( error => {
                console.log(error)
            })


}

