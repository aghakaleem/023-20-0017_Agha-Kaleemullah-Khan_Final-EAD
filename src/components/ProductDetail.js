import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {APIs} from "../const/APIs";
import {Card, Col, Modal, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
export const ProductDescription = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
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


    // Increase quantity
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    // Decrease quantity
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // Add to cart
    const addToCart = () => {
        setCartItems([...cartItems, {...product, quantity}])
        setShowCart(true)
    }

    // Remove from cart
    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((item, i) => i !== index))
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
                            <Card.Img className="card-img img-fluid product-detail-image" src={product.image} alt={product.title} />
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <h1 className="h2">{product.title}</h1>
                                <p className="h3 py-2 text-danger">${product.price}</p>
                                <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                </p>

                                <form action="" method="GET">
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Button type="submit" variant={"outline-dark"} className="btn-lg" name="submit" value="buy">Buy</Button>
                                        </div>
                                        <div className="col d-grid">
                                            <Button type="submit" variant={"outline-dark"} onClick={addToCart} className="btn-lg" name="submit" value="addtocard">Add To Cart</Button>
                                        </div>

                                        <div className={"border-1 mt-3"}>

                                            <Button variant={"outline-dark"} onClick={decreaseQuantity}>-</Button>
                                            <Button variant={"outline-dark w-50"}> {quantity} </Button>
                                            <Button variant={"outline-dark"} onClick={increaseQuantity}>+</Button>

                                        </div>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

                <Row>
                    <Card>
                        <Card.Body>
                            <h3>Product Details</h3>
                            <p>{product.description}</p>
                        </Card.Body>
                    </Card>
                </Row>


                <Row className={"pt-5"}>
                    <Col lg={12} xs={12} className={"banner-text pt-5 ps-5 d-flex justify-content-center align-items-center"}>

                        <div className="text-center">
                            <h1>Related Products</h1>
                            <p>Browse our Related products</p>
                        </div>

                    </Col>
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
                <Row className="justify-content-center mb-5">
                    <Button variant="primary" style={{ width: '120px' }}>Shop Now</Button>
                </Row>
            </Container>
            <Modal show={showCart} onHide={() => setShowCart(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                </Modal.Body>
            </Modal>
        </>
    )
}
