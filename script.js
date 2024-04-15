// Toggle project descriptions
const projectDescriptions = document.querySelectorAll('.project-description');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    projectDescriptions.forEach(description => {
        description.classList.toggle('hidden');
    });
});

// Form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        messageInput.classList.add('invalid');
    } else {
        messageInput.classList.remove('invalid');
    }

    if (!isValid) {
        event.preventDefault();
    }
});
