

import Image from "next/image"; 
import BannerSection from "./components/pages/home-components/BannerSection";
import CollectionSection from "./components/pages/home-components/CollectionSection";
import ProductTabs from "./components/pages/home-components/ProductTabs";
import BestsellingProducts from "./components/pages/home-components/BestsellingProducts";

export default function Home() {
  //Api Calls can be made here for server side rendering
  //Api Data can be sent to components as props

  return (
    <>
        <BannerSection/>
        <CollectionSection/>
        <ProductTabs/>
        <BestsellingProducts/>
    
    </>
  );
}
