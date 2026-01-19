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
import Product from "./components/pages/Product.jsx";
import ProductDetails from "./components/pages/ProductDetails.jsx";
import Error404 from "./components/pages/Error404.jsx";
import UseEffectExample from "./components/pages/UseEffectExample.jsx";
import ProductAPIWork from "./components/pages/ProductAPIWork.jsx";
import ProductDetailswithApi from "./components/pages/ProductDetailswithApi.jsx";
import MainContext from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
  
    <MainContext>
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
                   <Route path={"/cart"} element={<Cart />} />
                  <Route path={"/product"} element={<Product />} />

                  <Route path={"/use-effect"} element={<UseEffectExample />} />

                  <Route path={"/product-api"} element={<ProductAPIWork />} />


                  <Route path={"/product-details/:pid"} element={<ProductDetails />} />

                    <Route path={"/productview/:pid"} element={<ProductDetailswithApi />} />

                  <Route path={"*"} element={<Error404 />} />
            </Route>
            

          </Routes>
        </BrowserRouter>
    </MainContext> 
  </>
);
