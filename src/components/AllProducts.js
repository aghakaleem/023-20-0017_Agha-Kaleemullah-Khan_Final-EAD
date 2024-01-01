import Spinner from 'react-bootstrap/Spinner';
import {useEffect, useState} from "react";
import {useEcommerceData} from "../context/EcommerceContext";
import {APIs} from "../const/APIs";
import axios from "axios";
import {Link} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";
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
        <>
            <Container>
                {
                    product.length == 0 ? <div className={"d-flex my-5 justify-content-center align-items-center"}>
                        {
                            error ? <span className={"text-danger"}>"Error while fetching data from api</span> :
                                <Spinner animation="grow"/>
                        }
                    </div> :
                        <Row>
                        {product.map(p => {
                            return (
                                <Col lg={3} md={6} sm={12} className="mb-4">
                                    <Card className="mb-4">
                                        <Card.Img variant="top" src={p.image}/>
                                        <Card.Body>
                                            <Card.Title>{p.title}</Card.Title>
                                            <Card.Text>Price {p.price}</Card.Text>
                                            <Link to={`/products/${p.id}`} className="btn btn-dark">Visit Product</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                }
            </Container>
        </>
    );
}

export default AllProducts;
