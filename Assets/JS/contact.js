// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');

    const successEl = document.getElementById('contact-success');

    function showError(el, message) {
        const id = 'error-' + el.id;
        const msgEl = document.getElementById(id);
        if (msgEl) msgEl.textContent = message;
        el.setAttribute('aria-invalid', 'true');
    }

    function clearError(el) {
        const id = 'error-' + el.id;
        const msgEl = document.getElementById(id);
        if (msgEl) msgEl.textContent = '';
        el.removeAttribute('aria-invalid');
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
        successEl.style.display = 'none';
        successEl.textContent = '';

        // Name
        if (!nameEl.value.trim()) {
            showError(nameEl, 'Full name is required.');
            valid = false;
        } else {
            clearError(nameEl);
        }

        // Email
        if (!emailEl.value.trim()) {
            showError(emailEl, 'Email is required.');
            valid = false;
        } else if (!isValidEmail(emailEl.value.trim())) {
            showError(emailEl, 'Please enter a valid email (name@example.com).');
            valid = false;
        } else {
            clearError(emailEl);
        }

        // Subject
        if (!subjectEl.value.trim()) {
            showError(subjectEl, 'Subject is required.');
            valid = false;
        } else {
            clearError(subjectEl);
        }

        // Message
        if (!messageEl.value.trim()) {
            showError(messageEl, 'Message is required.');
            valid = false;
        } else if (messageEl.value.trim().length < 10) {
            showError(messageEl, 'Message must be at least 10 characters.');
            valid = false;
        } else {
            clearError(messageEl);
        }

        if (valid) {
            
            successEl.style.display = 'block';
            successEl.textContent = 'Thank you! Your message has been sent.';
            form.reset();
            
            successEl.focus && successEl.focus();
        }
    });

    [nameEl, emailEl, subjectEl, messageEl].forEach((el) => {
        el.addEventListener('input', () => clearError(el));
    });
});
