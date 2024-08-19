import { propiedades_venta } from "./modules/venta_modulo.js"

let render_venta = ""
let propiedad_vent = ""

for (propiedad_vent of propiedades_venta){
    render_venta +=
        `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                src=${propiedad_vent.src}
                class="card-img-top"
                alt="Imagen del departamento"
                />
                <div class="card-body">
                <h5 class="card-title">
                    ${propiedad_vent.nombre}
                </h5>
                <p class="card-text">
                    ${propiedad_vent.descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad_vent.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad_vent.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad_vent.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad_vent.costo} dolares</p>

                <p class=${propiedad_vent.smoke?"text-success":"text-danger"}>
                    <i class=${propiedad_vent.smoke?'"fas fa-smoking"':'"fas fa-smoking-ban"'}></i> ${propiedad_vent.smoke?" Permitido fumar":" No se permite fumar"}
                </p>
                <p class=${propiedad_vent.pets?"text-success":"text-danger"}>
                    <i class="${propiedad_vent.pets?'fas fa-paw':'fa-solid fa-ban'}"></i> ${propiedad_vent.pets?" Mascotas permitidas":" No se permiten mascotas"}
                </p>
                </div>
            </div>
        </div>
        `
}
const prop_venta = document.getElementById("prop_venta")
prop_venta.innerHTML = render_venta