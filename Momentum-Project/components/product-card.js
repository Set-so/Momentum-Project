class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Product';
        const artist = this.getAttribute('artist') || 'Artist';
        const price = this.getAttribute('price') || '$0.00';
        const image = this.getAttribute('image') || '';
        const tags = this.getAttribute('tags') || '';

        this.innerHTML = `
            <div class="product-card group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300 min-w-[280px]">
                <div class="relative h-48 overflow-hidden">
                    <img 
                        src="${image}" 
                        alt="${title}"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute top-4 right-4">
                        <button class="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors">
                            <i data-feather="heart" class="w-5 h-5 text-white"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h3 class="font-bold text-lg text-white truncate">${title}</h3>
                            <p class="text-gray-400 text-sm">${artist}</p>
                        </div>
                        <span class="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            ${price}
                        </span>
                    </div>
                    
                    <div class="mb-4">
                        <div class="flex flex-wrap gap-2">
                            ${tags.split(',').map(tag => `
                                <span class="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">${tag.trim()}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <button class="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600/80 to-purple-600/80 hover:from-indigo-600 hover:to-purple-600 font-semibold transition-all duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        
        // Actualizar iconos después de que el componente se cargue
        setTimeout(() => {
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 100);
    }
}

customElements.define('product-card', ProductCard);