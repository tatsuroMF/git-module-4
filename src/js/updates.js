import "../scss/updates.scss";

//components
import { useTheme } from "./components/theme";
import { UseburgerMenu } from "./components/burger-menu";
import { UseSlider, UseSliderSecond } from "./components/updates/slider";

import { UseTabs } from "./components/updates/tabs";
import { useAccardion } from "./components/home/accardion-mobile";
useTheme();
UseSlider();
UseSliderSecond();
UseTabs();
UseburgerMenu();
useAccardion();
