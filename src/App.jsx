import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./layout/Layout";
import About from "./pages/About/About";
import Career from "./pages/Career/Career";
import Bluzki from "./pages/woman/Bluzki/Bluzki";

import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Nothing from "./pages/Nothing/Nothing";

import "./layout/components/Menu.css";
import Dostavka from "./pages/Dostavka/Dostavka";
import Vozvrat from "./pages/Vozvrat/Vozvrat";
import VozratDen from "./pages/VozratDen/VozvratDen";
import Pprodaji from "./pages/Pprodaji/Pprodaji";
import Pptp from "./pages/Pptp/Pptp";
import Login from "./pages/Login/Login";
import Korzina from "./pages/Korzina/Korzina";
import Bruki from "./pages/woman/Bruki/Bruki";
import { Verh } from "./pages/woman/Verh/Verh";
import Brukim from "./pages/Man/Brukim/Brukim";
import BrukimMOdal from "./pages/Man/Brukim/BrukimModal";
import Verhm from "./pages/Man/Verhm/Verhm";
import VerhmModal from "./pages/woman/Verh/VerhModal";
import Bluzkid from "./pages/Detyam/Devochki/Bluzkid";
import Shorti from "./pages/Detyam/Malchik/Shorti";
import DetskayaOb from "./pages/Obuv/DetskayaOb/DetskayaOb";
import Aksesuar from "./pages/Krasota/Aksesuar/Aksesuar";
import Aksesuari from "./pages/Aksesuari/Aksesuari/Aksesuari";
import BluzkiM from "./pages/woman/Bluzki/BluzkiM";
import BrukiModal from "./pages/woman/Bruki/BrukiModal";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import DobTovar from "./pages/DobTovar/DobTovar";
import Layout2 from "./Layout2/Layout2";
import Brands from "./pages2.jsx/Brands/Brands";
import Dashboard from "./Layout2/components/Dashboard";
import Users from "./pages2.jsx/user/User";
import Products from "./pages2.jsx/Products/Products";
import Categories from "./pages2.jsx/Categories/Categories";
import SubCategories from "./pages2.jsx/SubCategories/SubCategories";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/LoginAdmin",
    element: (
      <AuthCheck>
        <Suspense fallback={<Loading />}>
          <LoginAdmin />
        </Suspense>
      </AuthCheck>
    ),
  },
  {
    path: "/Dobtovar",
    element: (
      <Suspense fallback={<Loading />}>
        <DobTovar />
      </Suspense>
    ),
  },
  {
    path: "/Panel",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <Layout2 />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "Users",
        element: (
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "Products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "Categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "SubCategories",
        element: (
          <Suspense fallback={<Loading />}>
            <SubCategories />
          </Suspense>
        ),
      },
      {
        path: "Brands",
        element: (
          <Suspense fallback={<Loading />}>
            <Brands />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",

    element: (
      <Suspense fallback={<Loading />}>
        {" "}
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />{" "}
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Nothing />,
      },
      {
        path: "Pprodaji",
        element: (
          <Suspense fallback={<Loading />}>
            <Pprodaji />
          </Suspense>
        ),
      },
      {
        path: "Vozvrat",
        element: (
          <Suspense fallback={<Loading />}>
            <Vozvrat />
          </Suspense>
        ),
      },
      {
        path: "Dostavka",
        element: (
          <Suspense fallback={<Loading />}>
            <Dostavka />
          </Suspense>
        ),
      },
      {
        path: "VozvratDen",
        element: (
          <Suspense fallback={<Loading />}>
            <VozratDen />
          </Suspense>
        ),
      },
      {
        path: "/Career",
        element: (
          <Suspense fallback={<Loading />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/News",
        element: (
          <Suspense fallback={<Loading />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "/Pptp",
        element: (
          <Suspense fallback={<Loading />}>
            <Pptp />
          </Suspense>
        ),
      },
      {
        path: "/Login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/Korzina",
        element: (
          <Suspense fallback={<Loading />}>
            <Korzina />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Korzina />
          </Suspense>
        ),
      },
      {
        path: "/Bluzki",
        element: (
          <Suspense fallback={<Loading />}>
            <Bluzki />
          </Suspense>
        ),
      },
      {
        path: "/Bruki",
        element: (
          <Suspense fallback={<Loading />}>
            <Bruki />
          </Suspense>
        ),
      },
      {
        path: "/Verh",
        element: (
          <Suspense fallback={<Loading />}>
            <Verh />
          </Suspense>
        ),
      },
      {
        path: "/Brukim",
        element: (
          <Suspense fallback={<Loading />}>
            <Brukim />
          </Suspense>
        ),
      },
      {
        path: "/Verhm",
        element: (
          <Suspense fallback={<Loading />}>
            <Verhm />
          </Suspense>
        ),
      },
      {
        path: "/Bluzkid",
        element: (
          <Suspense fallback={<Loading />}>
            <Bluzkid />
          </Suspense>
        ),
      },
      {
        path: "/Shorti",
        element: (
          <Suspense fallback={<Loading />}>
            <Shorti />
          </Suspense>
        ),
      },
      {
        path: "/DetskayaOb",
        element: (
          <Suspense fallback={<Loading />}>
            <DetskayaOb />
          </Suspense>
        ),
      },
      {
        path: "/Aksesuar",
        element: (
          <Suspense fallback={<Loading />}>
            <Aksesuar />
          </Suspense>
        ),
      },
      {
        path: "/Aksesuari",
        element: (
          <Suspense fallback={<Loading />}>
            <Aksesuari />
          </Suspense>
        ),
      },
      {
        path: "/BluzkiM",
        element: (
          <Suspense fallback={<Loading />}>
            <BluzkiM />
          </Suspense>
        ),
      },
      {
        path: "/BrukiModal",
        element: (
          <Suspense fallback={<Loading />}>
            <BrukiModal />
          </Suspense>
        ),
      },
      {
        path: "/VerhModal",
        element: (
          <Suspense fallback={<Loading />}>
            <VerhmModal />
          </Suspense>
        ),
      },
      {
        path: "/BrukimModal",
        element: (
          <Suspense fallback={<Loading />}>
            <BrukimMOdal />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
