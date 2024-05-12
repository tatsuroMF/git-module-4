import "../scss/updates.scss";

//components
import { useTheme } from "./components/theme";
import { UseburgerMenu } from "./components/burger-menu";
import { UseSlider } from "./components/updates/slider";
import { UseTabs } from "./components/updates/tabs";
import { useAccardion } from "./components/home/accardion-mobile";
useTheme();
UseSlider();
UseTabs();
UseburgerMenu();
useAccardion();
