import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export const useNewsSlider = () => {
  new Swiper(".news-slider", {
    pagination: {
      el: ".news-pagination",
      type: "progressbar",
    },

    slidesPerView: "auto",
    spaceBetween: 32,
    // loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
export const useNewsSliderSecond = () => {
  new Swiper(".companies-slider", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".companies-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};
export const useNewSliderThird = () => {
  new Swiper(".reviews-slider", {
    slidesPerView: "auto",
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".reviews__button-next",
      prevEl: ".reviews__button-prev",
    },
  });
};
