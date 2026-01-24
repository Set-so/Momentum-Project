// components/navbar.js
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800">
                <div class="container mx-auto px-6 py-2 flex justify-between items-center">
                    <!-- Logo -->
                    <div class="flex items-center gap-7">
                        <img 
                            src="assets/logos/Momentum Records Logo.PNG"
                            alt="Momentum Records Logo"
                            class="w-16 h-16 object-contain"
                        >
                        <span class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Momentum Records
                        </span>
                    </div>
                    
                    <!-- Botón Hamburguesa -->
                    <button id="menuToggle" class="md:hidden text-gray-300 hover:text-white focus:outline-none">
                        <i data-feather="menu" class="w-6 h-6"></i>
                    </button>
                    
                    <!-- Navegación Desktop -->
                    <div id="navMenu" class="hidden md:flex items-center gap-4">
                        <a href="index.html" class="nav-icon active" title="Home">
                            <i data-feather="home" class="w-5 h-5"></i>
                            <span class="nav-tooltip">Home</span>
                        </a>
                        
                        <a href="whats-new.html" class="nav-icon" title="What's New">
                            <i data-feather="star" class="w-5 h-5"></i>
                            <span class="nav-tooltip">What's New</span>
                        </a>
                        
                        <a href="albums.html" class="nav-icon" title="Albums">
                            <i data-feather="layers" class="w-5 h-5"></i>
                            <span class="nav-tooltip">Albums</span>
                        </a>

                        <a href="beats.html" class="nav-icon" title="Beats">
                            <i data-feather="headphones" class="w-5 h-5"></i>
                            <span class="nav-tooltip">Beats</span>
                        </a>
                        
                        <a href="cart.html" class="nav-icon relative" title="Cart">
                            <i data-feather="shopping-cart" class="w-5 h-5"></i>
                            <span class="nav-tooltip">Shopping Cart</span>
                            <span id="cartCounter" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center hidden">0</span>
                        </a>
                    </div>
                </div>
                
                <!-- Menú Móvil -->
                <div id="mobileMenu" class="md:hidden fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-lg border-l border-gray-800 transform translate-x-full transition-transform duration-300 ease-in-out z-40">
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-8">
                            <div class="flex items-center gap-3">
                                <img 
                                    src="assets/logos/Momentum Records Logo.PNG"
                                    alt="Momentum Records Logo"
                                    class="w-8 h-8 object-contain"
                                >
                                <span class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Menu
                                </span>
                            </div>
                            <button id="closeMenu" class="text-gray-300 hover:text-white">
                                <i data-feather="x" class="w-6 h-6"></i>
                            </button>
                        </div>
                        
                        <div class="space-y-4">
                            <a href="index.html" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-white">
                                <i data-feather="home" class="w-5 h-5"></i>
                                <span>Home</span>
                            </a>
                            
                            <a href="whats-new.html" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300">
                                <i data-feather="star" class="w-5 h-5"></i>
                                <span>What's New</span>
                            </a>
                            
                            <a href="albums.html" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300">
                                <i data-feather="layers" class="w-5 h-5"></i>
                                <span>Albums</span>
                            </a>

                            <a href="beats.html" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300">
                                <i data-feather="headphones" class="w-5 h-5"></i>
                                <span>Beats</span>
                            </a>
                            
                            <a href="cart.html" class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 relative">
                                <i data-feather="shopping-cart" class="w-5 h-5"></i>
                                <span>Shopping Cart</span>
                                <span id="mobileCartCounter" class="absolute left-8 -top-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center hidden">0</span>
                            </a>
                        </div>
                        
                        <div class="my-6 border-t border-gray-800"></div>
                        
                        <div class="text-gray-400 text-sm">
                            <p class="mb-2">Premium audio production since 2021</p>
                        </div>
                    </div>
                </div>
            </nav>
        `;
        
        // Inicializar después de que el DOM esté listo
        setTimeout(() => this.initNavbar(), 0);
    }

    initNavbar() {
        try {
            const menuToggle = this.querySelector('#menuToggle');
            const closeMenu = this.querySelector('#closeMenu');
            const mobileMenu = this.querySelector('#mobileMenu');
            
            if (!menuToggle || !closeMenu || !mobileMenu) return;
            
            // Crear overlay
            let overlay = document.querySelector('.menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'menu-overlay';
                document.body.appendChild(overlay);
            }
            
            // Funciones para menú
            const openMenu = () => {
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            };
            
            const closeMobileMenu = () => {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            };
            
            // Event Listeners
            menuToggle.addEventListener('click', openMenu);
            closeMenu.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            
            // Cerrar menú con enlaces móviles
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            // Cerrar con ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
            
            // Cerrar en resize
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    closeMobileMenu();
                }
            });
            
            // Inicializar contador del carrito
            this.initCartCounter();
            
        } catch (error) {
            console.error('Error initializing navbar:', error);
        }
    }
    
    initCartCounter() {
        const cartCounter = this.querySelector('#cartCounter');
        const mobileCartCounter = this.querySelector('#mobileCartCounter');
        
        if (!cartCounter || !mobileCartCounter) return;
        
        window.updateCartCounter = (count) => {
            const counters = [cartCounter, mobileCartCounter];
            counters.forEach(counter => {
                if (count > 0) {
                    counter.textContent = count;
                    counter.classList.remove('hidden');
                } else {
                    counter.classList.add('hidden');
                }
            });
        };
        
        // Inicializar con 0
        window.updateCartCounter(0);
    }
}

// Registrar componente
if (!customElements.get('custom-navbar')) {
    customElements.define('custom-navbar', CustomNavbar);
}