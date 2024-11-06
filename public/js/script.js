
const obtenerFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate(); // Día del mes
    const mes = fecha.getMonth() + 1; // Mes (0-11, sumamos 1 para obtener el mes correcto)
    const anio = fecha.getFullYear(); // Año

    return `Hoy es ${dia}/${mes}/${anio}`;
};

document.addEventListener("DOMContentLoaded", () => {
    const fecha = document.getElementById("fecha");
    if (fecha) {
        fecha.textContent = obtenerFechaActual();
    }
});