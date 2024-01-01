import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";

import {ProductDescription} from "./ProductDetail";
import BannerCarousal from "./BannerCarousal";
import NewArrivals from "./NewArrivals";
import BlackBoxes from "./BlackBoxes";
import TopSellProducts from "./TopSellProducts";
function WelcomePage() {
    return (
        <>
            <HeroSection />
            <NewArrivals />
            <BlackBoxes />
            <TopSellProducts />
            <BannerCarousal />
        </>
    );
}

export default WelcomePage;
