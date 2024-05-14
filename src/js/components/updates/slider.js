import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export const UseSlider = () => {
  new Swiper(".quality-swiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    slidesPerView: 1,
    spaceBetween: 32,

    breakpoints: {
      979: {
        slidesPerView: 2.5,
      },
      577: {
        slidesPerView: 2,
      },
    },
  });
};
export const UseSliderSecond = () => {
  new Swiper(".articles-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: ".articles__button-next",
      prevEl: ".articles__button-prev",
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      577: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      420: {
        slidesPerView: 1.5,
        spaceBetween: 32,
      },
    },
  });
};
