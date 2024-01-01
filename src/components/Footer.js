import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
import payment from "../assets/images/payments.png";
const Footer = () => {
    return (
        <footer className="bg-light" id="footer">
            <Container>
                <Row>
                    <Col md={3} className="pt-5">
                        <h5 className="h5 border-bottom pb-3 border-dark">Company Info</h5>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={"/"}> About Us </Link>
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={"/products"}> Products </Link>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={"/contact-us"}> Contact Us </Link>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={"/products"}> Shop </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col md={3} className="pt-5">
                        <h5 className="h5 text-dark border-bottom pb-3 border-dark">Help Links</h5>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li> <Link  style={{textDecoration: 'none', color: 'black'}} to={`/category-products/jewelery`} >Jewellery</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'black'}} to={"/category-products/men's clothing"} >Men's Clothing</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'black'}} to={"/category-products/women's clothing"} >Women's Clothing</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'black'}} to={"/category-products/electronics"} >Electronics</Link></li>
                        </ul>

                    </Col>

                    <Col md={3} className="pt-5">
                        <h5 className="h5 text-dark border-bottom pb-3 border-dark">Useful Links</h5>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><a style={{textDecoration: 'none', color: 'black'}} className="text-decoration-none" href="#">Special Offers</a></li>
                            <li><a style={{textDecoration: 'none', color: 'black'}} className="text-decoration-none" href="#">Gift Cards</a></li>
                            <li><a style={{textDecoration: 'none', color: 'black'}} className="text-decoration-none" href="#">Advertising</a></li>
                            <li><a style={{textDecoration: 'none', color: 'black'}} className="text-decoration-none" href="#">Terms of Use</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="pt-5">
                        <h5 className="h5 text-dark border-bottom pb-3 border-dark">Get in the Know</h5>
                        <ul className="list-unstyled text-light footer-link-list">
                            <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control bg-light border-light" id="subscribeEmail" placeholder="Email address" />
                                <div className="input-group-text  text-dark"> > </div>
                            </div>
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

                    </div>
                </Row>
            </Container>

            <div className="w-100 bg-light py-3 border-top">
                <Container>
                    <Row className="pt-2">
                        <Col md={6} lg={6}>
                            <p className="text-left text-dark">
                                © 2020 FasTech Systems Private Limited Sukkur, &nbsp;

                            </p>
                            <p className="text-left text-dark">
                                Privacy Policy
                                Terms & Conditions
                            </p>
                        </Col>
                        <Col md={6} lg={6}>
                            <img className={"float-end"} src={payment} alt="payment image"/>
                        </Col>

                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;