import { propiedades_alquiler } from "./modules/alquiler_modulo.js";

let alquiler = "";
for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
    let propiedad_alq = propiedades_alquiler[i];
    alquiler += `
      <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src=${propiedad_alq.src}
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">
                ${propiedad_alq.nombre}
            </h5>
            <p class="card-text">
                ${propiedad_alq.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad_alq.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad_alq.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad_alq.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad_alq.costo} dolares</p>

            <p class=${propiedad_alq.smoke?"text-success":"text-danger"}>
                <i class=${propiedad_alq.smoke?'"fas fa-smoking"':'"fas fa-smoking-ban"'}></i> ${propiedad_alq.smoke?" Permitido fumar":" No se permite fumar"}
            </p>
            <p class=${propiedad_alq.pets?"text-success":"text-danger"}>
                <i class="${propiedad_alq.pets?'fas fa-paw':'fa-solid fa-ban'}"></i> ${propiedad_alq.pets?" Mascotas permitidas":" No se permiten mascotas"}
            </p>
            </div>
        </div>
      </div>
    `;
}
const ele = document.getElementById("prop_alquiler_index");
ele.innerHTML = alquiler;