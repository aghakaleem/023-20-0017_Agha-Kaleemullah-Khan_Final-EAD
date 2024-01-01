import HeroSection from "./HeroSection";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import SocialMediaProfiles from "./SocialMediaProfiles";
import {ProductDescription} from "./ProductDetail";
import BannerCarousal from "./BannerCarousal";


function WelcomePage() {
    return (
        <>
            <HeroSection />
            <BannerCarousal />
            <SocialMediaProfiles />
            <Projects />
            <ContactUs />
        </>
    );
}

export default WelcomePage;
