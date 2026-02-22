document.addEventListener('DOMContentLoaded', () => {
    // View Navigation Elements
    const loginView = document.getElementById('login-view');
    const appView = document.getElementById('app-view');
    const btnEntrar = document.getElementById('btn-entrar');
    const btnSalir = document.getElementById('btn-salir');

    // Module Navigation Elements
    const navBtns = document.querySelectorAll('.nav-btn');
    const contentFrame = document.getElementById('content-frame');
    const moduleTitle = document.getElementById('current-module-title');

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

    // --- Sidebar Module Navigation ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.app-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);


    const welcomeScreen = document.getElementById('welcome-screen');
    const btnInicio = document.getElementById('btn-inicio');
    const moduleBtns = document.querySelectorAll('.module-btn');

    // Handle Module clicks
    moduleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active state from all buttons
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active state to the clicked button
            const targetBtn = e.currentTarget;
            targetBtn.classList.add('active');

            // Update the header title mapped to the module
            moduleTitle.textContent = targetBtn.textContent.trim();

            // Update the iframe source if there is one configured
            const newUrl = targetBtn.getAttribute('data-url');
            if (newUrl && contentFrame.src !== newUrl) {
                // To force a reload even if it is the same link for the illusion of switching:
                contentFrame.src = newUrl;
            }

            // Hide welcome screen and show iframe
            welcomeScreen.classList.remove('active');
            contentFrame.classList.remove('hidden');

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // Handle Inicio click
    if (btnInicio) {
        btnInicio.addEventListener('click', (e) => {
            // Remove active state from all buttons
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active state to Inicio
            btnInicio.classList.add('active');

            // Update header title
            moduleTitle.textContent = 'Inicio';

            // Show welcome screen and hide iframe
            contentFrame.classList.add('hidden');
            // Slight delay before activating welcome screen for smoother transition
            setTimeout(() => {
                welcomeScreen.classList.add('active');
            }, 50);

            // Close sidebar on mobile after clicking
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    }
});
