import {useEffect, useState} from "react";
import {useEcommerceData} from "../context/EcommerceContext";
import {APIs} from "../const/APIs";
import axios from "axios";
import {Link} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function AllProducts() {
    const {product,setProducts, error, setError} = useEcommerceData()

    const fetchAllProductsData = async () => {
        await axios.get(APIs.ECOMMERCE.PRODUCTS.ADD_PRODUCT).then(res=> {
            console.log(res)
            setProducts(res.data)
            setError(false)
        }).catch(err=> {
            setError(true)
            console.log(err)
        })
    }

    useEffect(()=> {
        fetchAllProductsData()
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                {product.slice(0, 8).map(p => (
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
        </Container>
    );
}

export default AllProducts;