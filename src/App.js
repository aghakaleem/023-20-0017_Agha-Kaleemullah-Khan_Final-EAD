import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import AllProducts from "./components/AllProducts";
import Reviews from "./components/Reviews";
import {ProductDescription} from "./components/ProductDetail";
import ContactUs from "./components/ContactUs";
import {CategoryProducts} from "./components/CategoryProducts";
import Cart from "./components/Cart";
function App() {
    return (<div>
            <Header/>
                <Routes>
                    <Route path={'/'} element={<WelcomePage/>}/>
                    <Route path={'/products'} element={<AllProducts/>}/>
                    <Route path={'/products/:productId'} element={<ProductDescription />}/>
                    <Route path={'/category-products/:category'} element={<CategoryProducts/>}/>
                    <Route path={'/reviews'} element={<Reviews/>}/>
                    <Route path={'/contact-us'} element={<ContactUs/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            <Footer/>
        </div>);
}

export default App;
