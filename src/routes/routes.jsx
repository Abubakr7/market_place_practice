import { lazy } from "react";

export const layout =lazy(()=> import ("../layout/Layout"))
export const Aksesuari =lazy(()=> import ("../pages/Aksesuari/Aksesuari/Aksesuari"))
export const About =lazy(()=> import ("../pages/About/About"))
export const Career =lazy(()=> import ("../pages/Career/Career"))
export const Bluzkid =lazy(()=> import ("../pages/Detyam/Devochki/Bluzkid"))
export const Shorti =lazy(()=> import ("../pages/Detyam/Malchik/Shorti"))
export const DobTovar =lazy(()=> import ("../pages/DobTovar/DobTovar"))
export const Dostavka =lazy(()=> import ("../pages/Dostavka/Dostavka"))
export const Home =lazy(()=>import("../pages/Home/Home"))