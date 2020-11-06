const contenedorArchivo = document.getElementById("otros");

window.onload = () => {
  obtenerArchivo();
};

obtenerArchivo = () => {
  try {
    fetch("./archivo-proyectos.json")
      .then((respuesta) => respuesta.json())
      .then((resultado) => mostrarArchivo(resultado.archivoProyectos));
  } catch (error) {
    console.log(error);
  }
};

mostrarArchivo = (listado) => {
  listado.map((proyecto) => {
    const { titulo, descripcion, tec1, tec2, tec3, github, web } = proyecto;

    contenedorArchivo.innerHTML += `
        <div class="col-lg-4 col-xs-12 pb-3 mt-3">
            <div class="card card-archivo">
                <div class="card-body d-flex flex-column justify-content-around text-left p-5">
                    <div class="links">
                        <a href="${proyecto.github}"><i class="fab fa-github mr-3"></i></a>
                        <a href="${proyecto.web}"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <h5 class="card-title">${proyecto.titulo}</h5>
                    <p class="card-text">${proyecto.descripcion}</p>
                    <div class="tecnologias">
                        <span>${proyecto.tec1}  </span>
                        <span>${proyecto.tec2}  </span>
                        <span>${proyecto.tec3}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
};
