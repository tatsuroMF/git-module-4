import "../scss/contact.scss";

//components
import { useNewsSliderSecond } from "./components/home/swiper";
import { useTheme } from "./components/theme";
import { UseburgerMenu } from "./components/burger-menu";
// import { UseMap } from "./components/map/map";
import { useIntelTel} from "./components/map/int-tel";
import { useAccardion } from "./components/home/accardion-mobile";
UseburgerMenu();
useAccardion();
// UseMap()
useIntelTel()
useNewsSliderSecond();
useTheme();
