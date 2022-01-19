<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiempo</title>
  <!-- FONT AWESOME -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- ESTILOS PROPIOS -->
  <link rel="stylesheet" href="css/estilos_tiempo.css">
  <!-- FUNCIONES PROPIAS -->
  <script src="js/funciones.js" defer></script>
</head>
<body>
  <div class="loader">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>

  <div class="aside">

    <div class="menu">
      <form action="" class="buscar">
        <input type="text" name="busqueda" class="input" placeholder="Buscar localización" required maxlength="30">
        <button type="submit" class="submit" title="Buscar"><i class="fas fa-search"></i></button>
        <p class="mensaje-error">No se ha encontrado esa localización</p>
      </form>
      <button class="ubicacion-usuario" title="Tu ubicación"><i class="fas fa-location-arrow"></i></button>
    </div>

    <div class="imagen">
      <img src="images/Cloud-background.png" alt="Fondo imagen" class="fondo-imagen">
      <img src="" alt="" class="imagen-principal">
    </div>

    <div class="informacion">
      <p class="temperatura"></p>
      <p class="tiempo"></p>
      <div class="fechaylugar">
        <p class="lugar"></p>
        <p class="fecha"></p>
      </div>
    </div>

  </div>

  <div class="contenido">
    <!-- <div class="cambio-temperaturas">
      <button class="celsius activa">ºc</button>
      <button class="fahrenheit">ºf</button>
    </div> -->

    <div class="proximos-dias">

    </div>

    <div class="datos-hoy">
      <h4>Destacado de hoy</h4>
      <div class="grid-datos">
        <div class="uno">
          <p class="datos_titulo">Viento</p>
          <span class="viento"></span>
        </div>
        <div class="dos">
          <p class="datos_titulo">Humedad</p>
          <span class="humedad"></span>
        </div>
        <div class="tres">
          <p class="datos_titulo">Visibilidad</p>
          <span class="visibilidad"></span>
        </div>
        <div class="cuatro">
          <p class="datos_titulo">Presión atmosférica</p>
          <span class="atmos"></span>
        </div>
      </div>
    </div>

    <footer class="footer">
      Creado por<a href="https://juanjogarciagonzalez.herokuapp.com/" target="_blank">Juanjo García González </a>- devChallenges.io
    </footer>
  </div>
</body>
</html>