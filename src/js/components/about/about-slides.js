import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const UseBeliewsSlider = () => {
  new Swiper(".beliews-slider ", {
    spaceBetween: 30,
    loop: true,
    speed: 1300,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
};
export const UseCreatorsSlider = () => {
  new Swiper(".creators-slider", {
    effect: "coverflow",
    loop: true,
    coverflowEffect: {
      rotate: 30,
      depth: 10,
      modifier: 1,
      slideShadows: true,
    },
    slidesPerView: 3,

    spaceBetween: 15,
    centeredSlides: true,

    navigation: {
      nextEl: ".creators__button-next",
      prevEl: ".creators__button-prev",
    },
    // breakpoints: {
    //   1201: {
    //     slidesPerView: 1.5,
    //   },
    //   993: {
    //     slidesPerView: 2,
    //   },
    //   751: {
    //     slidesPerView: 2.5,
    //   },
    //   577:{
    //     slidesPerView: 3,
    //   },
    // },
  });
};
export const UseCreatorsSliderSecond = () => {
  function innerWidth () {
    if(window.innerWidth < 992){
      new Swiper(".creators-slider--second", {
        loop: true,
        slidesPerView: 1,
    
        spaceBetween: 15,
        centeredSlides: true,
    
        pagination: {
          el: ".creators-pagination",
          dynamicBullets: true,
        },
    
        navigation: {
          nextEl: ".creators-button--second--next",
          prevEl: ".creators-button--second--prev",
        },
    
        breakpoints: {
          388: {
            slidesPerView: 1,
          },
          577: {
            slidesPerView: 2,
          },
          911: {
            slidesPerView: 3,
          },
        },
      });
    }
  }
  innerWidth()
};
