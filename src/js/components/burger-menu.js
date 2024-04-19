export const UseburgerMenu = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const body = document.body;

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove("burger--active");
    burgerMenu.classList.remove("header-nav--visible");
    overlay.classList.remove("overlay--visible");
    body.classList.remove("body--fixed");
  };

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--active");
    burgerMenu.classList.toggle("header-nav--visible");
    overlay.classList.toggle("overlay--visible");
    body.classList.toggle("body--fixed");
  });

  overlay.addEventListener("click", closeBurgerMenu);


  window.addEventListener("scroll", function() {
    const scrolled = window.scrollY;
    const element = document.querySelector(".header-sticky"); // Замените "yourElementId" на ID вашего элемента
  
    if (scrolled > 250) {
        element.classList.add("header--fade"); // Замените "yourClassName" на название класса, который нужно добавить
    } else {
        element.classList.remove("header--fade");
    }
  });
};


