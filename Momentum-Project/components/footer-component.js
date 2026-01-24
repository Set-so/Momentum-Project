// components/footer.js
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-900 border-t border-gray-800 py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <div class="flex items-center gap-2 mb-2">
    <img src="assets/Momentum Records Logo.PNG" alt="Momentum Records Logo" class="w-20 h-20">
    <span class="text-xl font-bold">Momentum Records.</span>
</div>
                    <p class="text-gray-400 text-sm"> Premium audio production since 2021.</p>
                </div>
                
                <div class="flex gap-4">
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i data-feather="instagram" class="w-5 h-5.5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
        <i data-feather="x" class="w-6 h-5.5"></i>
    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i data-feather="youtube" class="w-6 h-5.5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white">
                        <i data-feather="facebook" class="w-5 h-5.2"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; 2026 Momentum Records. All rights reserved.</p>
                <div class="mt-2">
                    <a href="#" class="hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" class="hover:text-white mx-2">Terms of Service</a>
                    <a href="#" class="hover:text-white mx-2">Contact</a>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

if (!customElements.get('custom-footer')) {
    customElements.define('custom-footer', CustomFooter);
}