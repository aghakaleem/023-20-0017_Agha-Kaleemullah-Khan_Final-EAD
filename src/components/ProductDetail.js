import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {APIs} from "../const/APIs";
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const ProductDescription = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const fetchProductById = async () => {
        await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_SINGLE_PRODUCT + `/${productId}`).then(res => {
            console.log(res)
            setProduct(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const fetchRelatedProducts = async () => {
        // Fetch related products based on the product category
        await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_RELATED_PRODUCTS + `/${product.category}`).then(res => {
            console.log(res)
            setRelatedProducts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }


    useEffect(()=> {
        fetchProductById()
        fetchRelatedProducts()
    }, [product])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card className="mb-3">
                            <Card.Img className="card-img img-fluid product-image" src={product.image} alt={product.title} />
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <h1 className="h2">{product.title}</h1>
                                <p className="h3 py-2">${product.price}</p>
                                <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                </p>
                                <h6>Description:</h6>
                                <p>{product.description}</p>
                                <form action="" method="GET">
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Buy</Button>
                                        </div>
                                        <div className="col d-grid">
                                            <Button type="submit" className="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</Button>
                                        </div>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={"pt-5"}>
                <h3>Related Products</h3>
                {relatedProducts.map((relatedProduct, index) => (
                    <Col lg={3} md={6} sm={12} className="mb-4" key={index}>
                        <Card>
                            <Card.Img variant="top" src={relatedProduct.image} />
                            <Card.Body>
                                <Card.Title>{relatedProduct.title}</Card.Title>
                                <Card.Text>Price {relatedProduct.price}</Card.Text>
                                <Link to={`/products/${relatedProduct.id}`} className="btn btn-dark">Visit Product</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </>
    )
}
