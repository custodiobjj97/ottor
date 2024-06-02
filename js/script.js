import menuMobile from "./module/menuMobile.js";
import ScrollAnimation from "./module/scrollAnimation.js";
import SlideNav from "./module/slidenav.js";
import scrollSmooth from "./module/scrollSmoth.js";
const menu = new menuMobile('.toggle','.list-menu');

menu.init()

const scroll =  new ScrollAnimation('.scroll');
scroll.init()


const slide = new SlideNav('.slide','.slide-wrapper');

slide.init()

slide.addControl('.custom-controls')


const smooth = new scrollSmooth('.list-menu li a')

smooth.init()

