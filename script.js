document.addEventListener('DOMContentLoaded', () => {
    // View Navigation Elements
    const loginView = document.getElementById('login-view');
    const appView = document.getElementById('app-view');
    const btnEntrar = document.getElementById('btn-entrar');
    const btnSalir = document.getElementById('btn-salir');

    const backBtn = document.getElementById('back-btn');
    const contentFrame = document.getElementById('content-frame');
    const moduleTitle = document.getElementById('current-module-title');
    const welcomeScreen = document.getElementById('welcome-screen');
    const moduleBtns = document.querySelectorAll('.module-btn');

    // --- Main View Navigation Functions ---
    const goToApp = () => {
        loginView.classList.remove('active');
        // Slight delay for smooth scale transition
        setTimeout(() => {
            appView.classList.add('active');
        }, 100);
    };

    const goToLogin = () => {
        appView.classList.remove('active');
        // Slight delay for smooth scale transition
        setTimeout(() => {
            loginView.classList.add('active');
        }, 100);
    };

    if (btnEntrar) btnEntrar.addEventListener('click', goToApp);
    if (btnSalir) btnSalir.addEventListener('click', goToLogin);

    const showWelcomeScreen = () => {
        moduleTitle.textContent = 'Inicio';
        contentFrame.classList.add('hidden');
        if (backBtn) backBtn.style.display = 'none';

        // Slight delay before activating welcome screen for smoother transition
        setTimeout(() => {
            welcomeScreen.classList.add('active');
        }, 50);
    };

    if (backBtn) {
        backBtn.addEventListener('click', showWelcomeScreen);
    }

    // Handle Module clicks
    if (moduleBtns) {
        moduleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetBtn = e.currentTarget;

                // Update the header title mapped to the module
                const title = targetBtn.getAttribute('data-title') || targetBtn.textContent.trim();
                moduleTitle.textContent = title;

                // Show back button
                if (backBtn) backBtn.style.display = 'flex';

                // Update the iframe source if there is one configured
                const newUrl = targetBtn.getAttribute('data-url');
                if (newUrl && contentFrame.src !== newUrl) {
                    contentFrame.src = newUrl;
                }

                // Hide welcome screen and show iframe
                welcomeScreen.classList.remove('active');
                contentFrame.classList.remove('hidden');
            });
        });
    }
});
