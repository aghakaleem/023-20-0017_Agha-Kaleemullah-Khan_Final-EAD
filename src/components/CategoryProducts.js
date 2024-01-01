import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {APIs} from "../const/APIs";
import {Link, useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export const CategoryProducts = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const fetchCategoryProductsData = async () => {

        if (category) {
            await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_RELATED_PRODUCTS + `/${category}`)
                .then(res => {
                    setProducts(res.data);
                    setError(false);
                })
                .catch(err => {
                    setError(true);
                    console.log(err);
                });
        }
    }

    useEffect(() => {
        fetchCategoryProductsData();
    }, [category]);

    return (
        <>
            <Container>
                {
                    products.length === 0 ? <div className={"d-flex my-5 justify-content-center align-items-center"}>
                            {
                                error ? <span className={"text-danger"}>"Error while fetching data from api</span> :
                                    <Spinner animation="grow"/>
                            }
                        </div> :
                        <Row>
                            {products.map(p => {
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
};
