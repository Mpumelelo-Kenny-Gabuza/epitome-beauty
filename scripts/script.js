// ==================== HOME SWIPER ====================
if (document.querySelector(".mySwiper")) {
  var homeSwiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// ==================== TESTIMONIAL SWIPER ====================
if (document.querySelector(".testimonial-swiper")) {
  var testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// ==================== NAV MENU TOGGLE ====================
const menuBtn = document.querySelector(".lnr-menu");
const navList = document.querySelector(".navlist");

if (menuBtn && navList) {
  menuBtn.onclick = function () {
    menuBtn.classList.toggle("lnr-chevron-up");
    navList.classList.toggle("active");
  };
}

// ==================== SCROLL REVEAL ====================
if (typeof ScrollReveal !== "undefined") {
  const animation = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  function safeReveal(selector, options) {
    if (document.querySelector(selector)) {
      animation.reveal(selector, options);
    }
  }

  // About Section
  safeReveal(".about-container .left .content", { delay: 200, origin: "top" });
  safeReveal(".about-container .right", { delay: 200, origin: "right" });

  // Services Section
  safeReveal(".services-container .col-1", { delay: 200, origin: "top" });
  safeReveal(".services-container .col-2", { delay: 400, origin: "top" });
  safeReveal(".services-container .col-3", { delay: 600, origin: "top" });
  safeReveal(".services-container .col-4", { delay: 800, origin: "top" });



  // Blog Section
  safeReveal(".blog-container", { delay: 200, origin: "right" });

  // Contact Section
  safeReveal(".contact-container .left", { delay: 200, origin: "bottom" });
  safeReveal(".contact-container .right", { delay: 200, origin: "top" });

  // Footer
  safeReveal(".footer-container", { delay: 200, origin: "top" });
}
