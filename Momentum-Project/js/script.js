        // Inicializar Feather Icons
        feather.replace();
        
        // Control del menú móvil
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const closeMenu = document.getElementById('closeMenu');
            const mobileMenu = document.getElementById('mobileMenu');
            
            // Crear overlay
            const overlay = document.createElement('div');
            overlay.className = 'menu-overlay';
            document.body.appendChild(overlay);
            
            // Función para abrir menú
            function openMenu() {
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                feather.replace();
            }
            
            // Función para cerrar menú
            function closeMobileMenu() {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Event listeners
            menuToggle.addEventListener('click', openMenu);
            closeMenu.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            
            // Cerrar menú al hacer clic en un enlace (solo móvil)
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            // Cerrar menú con tecla ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
            
            // Actualizar iconos cuando se redimensione la ventana
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    closeMobileMenu();
                }
                feather.replace();
            });
            
            // Inicializar contador del carrito
            const cartCounter = document.getElementById('cartCounter');
            const mobileCartCounter = document.getElementById('mobileCartCounter');
            
            // Función para actualizar contador
            function updateCartCounter(count) {
                if (count > 0) {
                    cartCounter.textContent = count;
                    cartCounter.classList.remove('hidden');
                    mobileCartCounter.textContent = count;
                    mobileCartCounter.classList.remove('hidden');
                } else {
                    cartCounter.classList.add('hidden');
                    mobileCartCounter.classList.add('hidden');
                }
            }
            
            // Ejemplo: iniciar con 0 items
            updateCartCounter(0);
            
            // Función para manejar newsletter
            function handleNewsletter(event) {
                event.preventDefault();
                const email = event.target.querySelector('input[type="email"]').value;
                if(email) {
                    alert(`Thanks for subscribing with ${email}! Check your inbox for updates.`);
                    event.target.reset();
                }
            }
            
            // Initialize components
            console.log('Momentum Records loaded');

            
        });

