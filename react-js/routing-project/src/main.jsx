import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./components/pages/Home.jsx";
import Aboutus from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Cart from "./components/pages/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/pages/Login.jsx";
import Faq from "./components/pages/Faq.jsx";
import Layout from "./components/common/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route element={<Layout/>}>
              <Route path={"/"} element={<Home />} />
              {/* http://localhost:5173/about-us */}
              <Route path={"/about-us"} element={<Aboutus />} />

              <Route path={"/services"} element={<Services />} />

              <Route path={"/cart"} element={<Cart />} />

               <Route path={"/login"} element={<Login />} />

              <Route path={"/faq"} element={<Faq />} />
         </Route>
        

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
