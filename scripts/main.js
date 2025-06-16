// Array de servicios disponibles
const services = [
    { name: "Custom Cake", price: 25 },
    { name: "Event Catering", price: 100 },
    { name: "Bread Delivery", price: 10 },
    { name: "Other", price: 0 }
];

// Mostrar saludo personalizado si existe en localStorage
function showGreeting() {
    const name = localStorage.getItem("bakeryName");
    const greetingDiv = document.getElementById("greeting");
    if (greetingDiv) {
        greetingDiv.textContent = name
            ? `Welcome back, ${name}!`
            : "Welcome to Panadería Buen Pan!";
    }
}

// Guardar nombre del usuario al enviar el formulario
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem("bakeryName", name);

    // Mostrar resumen del servicio solicitado
    const service = document.getElementById("service").value;
    const found = services.find(s => s.name === service);
    const price = found ? found.price : 0;
    const summary = document.getElementById("service-summary");
    if (summary) {
        summary.innerHTML = `
            <strong>Thank you, ${name}!</strong><br>
            You requested: <em>${service}</em>.<br>
            Estimated price: <strong>$${price}</strong>
        `;
    }
    showGreeting();
}

// Mostrar lista de servicios en la página (ejemplo de array y template literals)
function renderServicesList() {
    const listDiv = document.getElementById("services-list");
    if (listDiv) {
        listDiv.innerHTML = services.map(s =>
            `<li>${s.name} - <strong>$${s.price}</strong></li>`
        ).join("");
    }
}

// Evento para limpiar el nombre guardado
function clearName() {
    localStorage.removeItem("bakeryName");
    showGreeting();
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    showGreeting();
    renderServicesList();

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    const clearBtn = document.getElementById("clear-name");
    if (clearBtn) {
        clearBtn.addEventListener("click", clearName);
    }
});