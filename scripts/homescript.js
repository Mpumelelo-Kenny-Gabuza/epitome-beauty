// Initialize Swiper
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });

        // Search functionality
        document.getElementById('home-search-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const input = document.getElementById('home-search').value.toLowerCase().trim();

            // Map keywords to pages
            const servicePages = [
                { keywords: ["gel toes", "pedi", "buff", "soak", "acrylic", "manicure", "nail art", "nail fix", "paraffin", "nails", "nail"], page: "additional-nail-services.html" },
                { keywords: ["wax", "waxing", "bikini", "hollywood", "brazilian", "arms", "legs", "ear", "nose", "eyebrow", "chin", "lip", "hair removal"], page: "waxing.html" },
                { keywords: ["cluster", "classic", "lash", "eyelash", "lashes"], page: "lashes.html" },
                { keywords: ["makeup", "bridal", "evening", "glam"], page: "makeup.html" },
                { keywords: ["facial", "skin", "treatment", "glow"], page: "facial.html" }
            ];

            let targetPage = "services.html"; // default fallback

            for (const service of servicePages) {
                if (service.keywords.some(k => input.includes(k))) {
                    targetPage = service.page;
                    break;
                }
            }

            // Redirect user with query string for filtering
            window.location.href = targetPage + "?q=" + encodeURIComponent(input);
        });

        // Active link highlighting
        const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navlist .nav-link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentLocation) {
                link.classList.add('active');
            }
        });