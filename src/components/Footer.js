import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark" id="footer">
            <Container>
                <Row>
                    <Col md={4} className="pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={4} className="pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li> <Link to={`/category-products/jewelery`} className="btn btn-dark">Jewellery</Link></li>
                            <li><Link to={"/category-products/men's clothing"} className="btn btn-dark">Men's Clothing</Link></li>
                            <li><Link to={"/category-products/women's clothing"} className="btn btn-dark">Women's Clothing</Link></li>
                            <li><Link to={"/category-products/electronics"} className="btn btn-dark">Electronics</Link></li>
                        </ul>
                        men's clothing
                    </Col>

                    <Col md={4} className="pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link to={"/"} className="btn btn-dark">Home</Link></li>
                            <li><a className="text-decoration-none" href="#">Contact</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                            <div className="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div>
                </Row>
            </Container>

            <div className="w-100 bg-black py-3">
                <Container>
                    <Row className="pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2021 Company Name
                            </p>
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;