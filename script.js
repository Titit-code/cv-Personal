// MODO OSCURO / CLARO
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  btn.textContent =
    document.body.classList.contains("light")
      ? "Modo oscuro"
      : "Modo claro";
});


// ANIMACIÓN AL SCROLL
const elements = document.querySelectorAll(".fade");

const showOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
