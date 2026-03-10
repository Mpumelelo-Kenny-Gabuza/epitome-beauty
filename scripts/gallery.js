// Gallery Data - Images for each treatment category
const galleryData = {
    all: [
        {
            id: 1,
            image: 'images/Work/Work 02.jpeg'
        },
        {
            id: 2,
            image: 'images/Work/Work 01.jpeg',
        },
        {
            id: 3,
            image: 'images/Work/Work 03.jpeg',
        },
        {
            id: 4,
            image: 'images/Work/Work 06.jpeg',
        },
        {
            id: 5,
            image: 'images/Work/Work 04.jpeg',
        },
        {
            id: 6,
            image: 'images/Work/Work 05.jpeg',
        },
        {
            id: 7,
            image: 'images/Work//Work 07.jpeg',
        },
        {
            id: 8,
            image: 'images/Work/Work 08.jpeg',
        },
        {
            id: 9,
            image: 'images/Work/Work 09.jpeg',
        },
        {
            id: 10,
            image: 'images/Work/Work 10.jpeg',
        }
    ],
};

// Gallery State
let currentCategory = 'all';
let isAutoRotating = false;
let rotationSpeed = null;
let rotationInterval;
let displayedItems = 4; 

// Initialize Gallery
function initializeGallery() {
    loadGalleryItems();
    setupEventListeners();
    startAutoRotation();
}

// Preload local images
function preloadImages() {
    const allImages = [];

    // Collect all image URLs from galleryData
    Object.values(galleryData).forEach(category => {
        category.forEach(item => {
            if (!allImages.includes(item.image)) {
                allImages.push(item.image);
            }
        });
    });

    // Preload each image
    allImages.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onerror = function () {
            console.warn('Could not load image:', url);
            // You can set a fallback image here if needed
            // img.src = 'images/fallback.jpg';
        };
    });
}

// Load Gallery Items
function loadGalleryItems() {
    const grid = document.getElementById('pinterestGrid');
    grid.innerHTML = '';

    const items = galleryData[currentCategory];
    const itemsToShow = Math.min(displayedItems, items.length);

    for (let i = 0; i < itemsToShow; i++) {
        const item = items[i];
        const gridItem = createGridItem(item);
        grid.appendChild(gridItem);

        // Add staggered animation delay
        setTimeout(() => {
            gridItem.style.animationDelay = `${i * 0.1}s`;
        }, 10);
    }
}

// Create Grid Item
function createGridItem(item) {
    const div = document.createElement('div');
    div.className = 'pinterest-item';
    div.setAttribute('data-category', item.category);

    div.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="pinterest-img" loading="lazy">
            `;

    div.addEventListener('click', () => openLightbox(item));
    return div;
}

// Open Lightbox
function openLightbox(item) {
    document.getElementById('lightboxImage').src = item.image;
    document.getElementById('lightboxImage').alt = item.title;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxDescription').textContent = item.description;
    document.getElementById('lightboxCategory').textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    document.getElementById('lightboxDuration').textContent = item.duration;
    document.getElementById('lightboxPrice').textContent = item.price;

    const lightbox = new bootstrap.Modal(document.getElementById('galleryLightbox'));
    lightbox.show();
}

// Setup Event Listeners
function setupEventListeners() {

    // Load more button
    document.getElementById('loadMoreBtn').addEventListener('click', function () {
        displayedItems += 7;
        loadGalleryItems();

        // Hide button if all items loaded
        if (displayedItems >= galleryData[currentCategory].length) {
            this.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeGallery);