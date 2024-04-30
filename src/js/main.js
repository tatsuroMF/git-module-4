import "../scss/main.scss";
import {
  useNewsSlider,
  useNewsSliderSecond,
  useNewSliderThird,
} from "./components/home/swiper";
import { useTheme } from "./components/theme";
import { UseburgerMenu } from "./components/burger-menu";
import { useAccardion } from "./components/home/accardion-mobile";
useNewsSlider();
useAccardion();
useNewsSliderSecond();
useNewSliderThird();
UseburgerMenu();
useTheme();
