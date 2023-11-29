document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Simule uma requisição assíncrona para o servidor
        setTimeout(() => {
            alert(`Agendamento Confirmado:\n\nNome: ${name}\nE-mail: ${email}\nServiço: ${service}\nData: ${date}\nHorário: ${time}`);
            form.reset();
        }, 500);
    });
});
