import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import {APIs} from "../const/APIs";

const BannerCarousel = () => {
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCT)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error(err);
            });

    }, []);

    return (
        <Carousel variant="dark" className={"mt-4"} activeIndex={index} onSelect={handleSelect}>
            {products.map((product, index) => (
                <Carousel.Item key={index}>
                    <Container>
                        <Row>

                            <Col lg={4} xs={12} className={"align-items-center pt-5 ps-5"}>

                                <h3 >{product.title}</h3>
                                <p>{product.description}</p>

                            </Col>

                            <Col lg={8} xs={12}>
                                <img className="carousel-image w-100 float-end" src={product.image} alt={product.title} />
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default BannerCarousel;