// main.js

// Función para enviar consulta desde el index
function enviarConsulta(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Tomamos los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación rápida: todos los campos obligatorios
    if (!nombre || !telefono || !correo || !mensaje) {
        alert("Por favor, completá todos los campos antes de enviar.");
        return;
    }

    // Armamos el mensaje para WhatsApp
    const numeroWhatsApp = "5491165244318"; // <-- reemplazá con tu número
    const texto = `Hola! Tengo una consulta:%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Correo: ${correo}%0A
Mensaje: ${mensaje}`;

    // Abrimos WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, "_blank");

    // Opcional: resetear formulario
    document.getElementById("form-consulta").reset();
}

// Conectamos la función al formulario
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-consulta");
    formulario.addEventListener("submit", enviarConsulta);
});




document.getElementById("formTaxi").addEventListener("submit", function(e) {
    e.preventDefault();
    enviarPedido();
});

function enviarPedido() {

    // 📥 CAPTURAR DATOS
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const vuelo = document.getElementById("vuelo").value.trim();
    const nota = document.getElementById("nota").value.trim();

    const equipajeSeleccionado = document.querySelector('input[name="equipaje"]:checked');
    const equipaje = equipajeSeleccionado ? equipajeSeleccionado.value : "No especificado";

    // 🚫 VALIDACIÓN
    if (!fecha || !hora || !origen || !destino || !nombre || !celular) {
        alert("⚠️ Por favor completá todos los campos obligatorios.");
        return;
    }

    // 🧾 MENSAJE PRO (más limpio)
    let mensaje = `🚖 *PEDIDO DE TAXI* \n\n`;

    mensaje += `📅 *Fecha:* ${fecha}\n`;
    mensaje += `⏰ *Hora:* ${hora}\n`;
    mensaje += `📍 *Origen:* ${origen}\n`;
    mensaje += `📍 *Destino:* ${destino}\n\n`;

    mensaje += `👤 *Pasajero:* ${nombre}\n`;
    mensaje += `📱 *Celular:* ${celular}\n\n`;

    mensaje += `✈️ *Vuelo/Barco:* ${vuelo || "No especificado"}\n`;
    mensaje += `🧳 *Equipaje:* ${equipaje}\n`;
    mensaje += `📝 *Nota:* ${nota || "Sin detalles"}`;

    // 📲 TU NÚMERO
    const telefono = "5491165244318";

    // 🔗 CODIFICAR MENSAJE (IMPORTANTE)
    const mensajeCodificado = encodeURIComponent(mensaje);

    const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    // 🚀 ABRIR WHATSAPP
    window.open(url, "_blank");
}