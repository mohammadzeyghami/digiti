import { ImgHTMLAttributes } from "react";
import { ps1, xbox1, sam1, iphone_1 } from "./public/products";
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
