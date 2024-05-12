import Swiper from "swiper/bundle";
export const UseSlider = () => {
  new Swiper(".quality-swiper", {
    direction: "vertical",
    slidesPerView: 2,
   
  });
};
