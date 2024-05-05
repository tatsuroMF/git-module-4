import "../scss/about.scss";

//components
import { useTheme } from "./components/theme";
import { UseburgerMenu } from "./components/burger-menu";
import {
  UseBeliewsSlider,
  UseCreatorsSlider,UseCreatorsSliderSecond
} from "./components/about/about-slides";

import { useAccardion } from "./components/home/accardion-mobile";
useTheme();
UseburgerMenu();
UseBeliewsSlider();
UseCreatorsSlider();
UseCreatorsSliderSecond()
useAccardion();
