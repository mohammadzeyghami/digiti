import { ImgHTMLAttributes } from "react";
import {
  ps1,
  xbox1,
  sam1,
  iphone_1,
  iphone_2,
  iphone_3,
} from "./public/products";
import {
  SwiperItem1,
  SwiperItem2,
  SwiperItem3,
  SwiperItem4,
} from "./public/swiperSection";
export const NavbarItems: string[] = [
  "لوازم دیجیتال",
  "خانه و اشپزخانه",
  "لباس",
  "ابزار صنعتی",
  "اخبار",
];

export const aboutUs: string[] = ["درباره ی من ", "ارتباط با من ", "اخبار"];
export const SwiperItems: any = [
  SwiperItem1,
  SwiperItem2,
  SwiperItem3,
  SwiperItem4,
];
export const Categories: { image: any; title: string }[] = [
  { image: ps1, title: "پلی استیشن" },
  { image: iphone_1, title: "ایفون" },
  { image: xbox1, title: "ایکس باکس" },
  { image: sam1, title: "سامسونگ" },
];

export const offerProducts = [
  { image: iphone_1, title: "ایفون 11", price: "600$", offer: "570$" },
  { image: sam1, title: "سامسونگ اس 21", price: "800$", offer: "780$" },
  { image: ps1, title: "پلی استیشن 4", price: "400$", offer: "375$" },
  { image: iphone_2, title: "ایفون 12 ", price: "700$", offer: "685$" },
  { image: iphone_3, title: "ایفون 13", price: "900$", offer: "875$" },
  { image: xbox1, title: "ایکس باکس 1 ", price: "400$", offer: "380$" },
];
