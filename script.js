const toggleButton = document.getElementById('toggleButton');
        const header = document.getElementById('header');

        toggleButton.addEventListener('click', () => {
            header.classList.toggle('hidden');
            toggleButton.textContent = header.classList.contains('hidden') ? 'Off' : 'On'; // Muda a seta
        });
