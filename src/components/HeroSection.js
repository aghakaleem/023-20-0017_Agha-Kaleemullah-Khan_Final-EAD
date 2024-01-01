import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/images/callsense.png'
import BannerCarousel from "./BannerCarousal";
import {Col, Container, Row} from "react-bootstrap";
import banner1 from "../assets/images/banner1.jpeg";
import React from "react";
function HeroSection() {
    return (

        <Carousel>
            <Carousel.Item>
                <Container>
                    <Row>

                        <Col lg={5} xs={12} className={"banner-text pt-5 ps-5 justify-content-center align-items-center"}>

                            <h1 >Welcome to Agha Shop</h1>
                            <p>Where you will find every kind of categories of products</p>

                        </Col>

                        <Col lg={7} xs={12}>
                            <img className="banner-image w-100 float-end" src={banner1} alt={"banner image"} />
                        </Col>

                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>


        // <BannerCarousel />


    );
}

export default HeroSection;
