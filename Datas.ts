import { ImgHTMLAttributes } from "react";
import { StaticImageData } from "next/image";
import {
  SugesstionItem1,
  SugesstionItem2,
  SugesstionItem3,
  SugesstionItem4,
} from "./public/sugesstion";
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
import {
  Speacker_1,
  Speacker_2,
  Speacker_3,
  Speacker_4,
} from "./public/speackerSug";
import {
  Category_1,
  Category_2,
  Category_3,
  Category_4,
  Category_5,
  Category_6,
} from "./public/Category";

import {
  banner_1,
  banner_2,
  banner_3,
  banner_4,
} from "./public/CategoryBanners/Digital";

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
export const Categories: { image: StaticImageData; title: string }[] = [
  { image: Category_1, title: "پلی استیشن" },
  { image: Category_2, title: "ایفون" },
  { image: Category_3, title: "ایکس باکس" },
  { image: Category_4, title: "سامسونگ" },
  { image: Category_5, title: "سامسونگ" },
  { image: Category_6, title: "سامسونگ" },
];

export const offerProducts = [
  { image: iphone_1, title: "ایفون 11", price: "600$", offer: "570$" },
  { image: sam1, title: "s21", price: "800$", offer: "780$" },
  { image: ps1, title: "پی اس 4", price: "400$", offer: "375$" },
  { image: iphone_2, title: "ایفون 12 ", price: "700$", offer: "685$" },
  { image: iphone_3, title: "ایفون 13", price: "900$", offer: "875$" },
  { image: xbox1, title: "xbox1", price: "400$", offer: "380$" },
];

export const SugesstionItems = [
  SugesstionItem1,
  SugesstionItem3,
  SugesstionItem2,
  SugesstionItem4,
];
export const SpeackerSugs = [Speacker_1, Speacker_2, Speacker_3, Speacker_4];

export const BSProducts = [
  { image: iphone_1, title: "ایفون 11", price: "600$" },
  { image: iphone_1, title: "ایفون 11", price: "600$" },
  { image: iphone_1, title: "ایفون 11", price: "600$" },
  { image: iphone_1, title: "ایفون 11", price: "600$" },
  { image: iphone_1, title: "ایفون 11", price: "600$" },
];

export const CategoryBannersData = [
  { image: banner_1 },
  { image: banner_2 },
  { image: banner_3 },
  { image: banner_4 },
];
