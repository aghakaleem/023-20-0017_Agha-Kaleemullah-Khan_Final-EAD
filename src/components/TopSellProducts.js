import React, {useEffect, useState} from "react";
import {useEcommerceData} from "../context/EcommerceContext";
import {APIs} from "../const/APIs";
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function TopSellProducts() {
    const {product,setProducts, error, setError} = useEcommerceData()
    const [loading, setLoading] = useState(true)

    const fetchAllProductsData = async () => {
        await axios.get(APIs.ECOMMERCE.PRODUCTS.ADD_PRODUCT).then(res=> {
            console.log(res)
            setProducts(res.data)
            setError(false)
            setLoading(false)
        }).catch(err=> {
            setError(true)
            console.log(err)
            setLoading(false)
        })
    }

    useEffect(()=> {
        fetchAllProductsData()
    }, [])

    // Function to get 4 random products
    const getRandomProducts = (products, count) => {
        let randomProducts = [];
        for(let i = 0; i < count; i++) {
            let product = products[Math.floor(Math.random() * products.length)];
            randomProducts.push(product);
        }
        return randomProducts;
    }

    let randomProducts = getRandomProducts(product, 4);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={12} xs={12} className={"banner-text pt-5 ps-5 d-flex justify-content-center align-items-center"}>

                    <div className="text-center">
                        <h1>Top Sellers</h1>
                        <p>Browse our top-selling products</p>
                    </div>

                </Col>
                {randomProducts.map(p => (
                    <Col lg={3} md={6} sm={12} className="mb-4">
                        <Card className="border-0 m-3">
                            <Card.Img className={"product-image"} variant="top" src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>Price {p.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-center">
                <Button variant="primary" style={{ width: '120px' }}>Shop Now</Button>
            </Row>
        </Container>
    );
}

export default TopSellProducts;