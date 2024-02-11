function pregunta(){
    let pregunta = document.querySelector("h2");
    pregunta.innerHTML = "¿Puedo ser tu San Valentín? 👉👈";
    let imagen = document.querySelector("img");
    imagen.src = "https://pbs.twimg.com/media/FLyVoESWYAYZYBw.jpg:large";
    let contenedor = document.querySelector(".imagen");
    contenedor.style.boxShadow = '4px 4px 0 0 #C3ACD0FF';
}