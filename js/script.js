const mobileMenuButton = document.getElementById("mobile-menu-button");
const navigationLinks = document.getElementById("navigation-links");
const mobileMenuIcon = mobileMenuButton.querySelector("i");
mobileMenuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isMenuOpen = navigationLinks.classList.contains("open");
  mobileMenuIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-3-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  mobileMenuIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".hero-image .image img", { ...scrollRevealOptions });
ScrollReveal().reveal(".hero-label", { ...scrollRevealOptions, delay: 500 });
ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".hero-content > p", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".hero-actions", { ...scrollRevealOptions, delay: 2000 });
ScrollReveal().reveal(".food-card", {
  ...scrollRevealOptions,
  delay: 2500,
  interval: 500,
});
ScrollReveal().reveal(".hero-image-footer", {
  ...scrollRevealOptions,
  delay: 4000,
});
ScrollReveal().reveal(".menu-item", { ...scrollRevealOptions, interval: 500 });
ScrollReveal().reveal(".menu-actions", { ...scrollRevealOptions, delay: 1500 });
ScrollReveal().reveal(".service-card", {
  ...scrollRevealOptions,
  interval: 500,
});
ScrollReveal().reveal(".food-cart-image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".food-cart-content .section-title", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".food-cart-content p", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".food-cart-actions", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".testimonials-image img", {
  ...scrollRevealOptions,
  origin: "left",
});
const customerSlider = new Swiper(".customer-slider", {
  loop: true,
  navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
});
