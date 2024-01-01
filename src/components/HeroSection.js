import Carousel from 'react-bootstrap/Carousel';

import BannerCarousel from "./BannerCarousal";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
function HeroSection() {
    return (

        <Carousel>
            <Carousel.Item>
                <Container>
                    <Row>

                        <Col lg={12} xs={12} className={"banner-text pt-5 ps-5 d-flex justify-content-center align-items-center"}>

                            <div className="text-center">
                                <h1>Discover New Arrivals</h1>
                                <p>Recently added shirts!</p>
                            </div>

                        </Col>

                        {/*<Col lg={7} xs={12}>*/}
                        {/*    <img className="banner-image w-100 float-end" src={banner1} alt={"banner image"} />*/}
                        {/*</Col>*/}

                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>


        // <BannerCarousel />


    );
}

export default HeroSection;
