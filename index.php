<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiempo</title>
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- ESTILOS PROPIOS -->
    <link rel="stylesheet" href="css/estilos_index.css">
    <!-- FUNCIONES PROPIAS -->
    <script src="js/index.js" defer></script>
</head>
<body>
    <div class="titulo">
        <span>Ver el tiempo</span>
        <img src="images/animated/cloudy-day-1.svg" alt="Logo título">
    </div>
    
    <div class="opciones">
        <button class="ubicacion-usuario" title="Tu ubicación"><span>Desde tu ubicación</span></button>
        <div class="separador">
            <div class="separador_uno"></div>
            <span class="o">o</span>
            <div class="separador_dos"></div>
        </div>
        <form action="" class="buscar">
            <input type="text" name="busqueda" class="input" placeholder="Buscar localización" required maxlength="30">
            <button type="submit" class="submit" title="Buscar"><i class="fas fa-search"></i></button>
        </form>
    </div>
</body>
</html>