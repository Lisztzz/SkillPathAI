document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-iniciar-sesion');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // Limpia mensajes previos
        form.querySelectorAll('.error-message').forEach(span => span.textContent = '');

        // Email
        const emailInput = form.querySelector('#email');
        const emailError = emailInput ? emailInput.nextElementSibling : null;
        if (emailInput) {
            if (!emailInput.value) {
                emailError.textContent = 'Por favor, completa este campo.';
                valid = false;
            } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value)) {
                emailError.textContent = 'Por favor, ingresa un correo válido.';
                valid = false;
            } else {
                emailError.textContent = '';
            }
        }

        // Password
        const passInput = form.querySelector('#password');
        const passError = passInput ? passInput.nextElementSibling : null;
        if (passInput) {
            if (!passInput.value) {
                passError.textContent = 'Por favor, completa este campo.';
                valid = false;
            } else if (passInput.value.length < 8) {
                passError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                valid = false;
            } else {
                passError.textContent = '';
            }
        }

        if (valid) {
            window.location.href = 'index.html';
        }
    });

    // Limpia el mensaje al escribir
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function () {
            const errorSpan = input.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.textContent = '';
            }
        });
    });
});