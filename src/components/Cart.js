import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

function Cart({ cartItems, removeFromCart }) {
    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Row>
                    {cartItems.map((item, index) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={index}>
                            <Card className="mb-4">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <p>Quantity: {item.quantity}</p>
                                    <Button variant="dark" onClick={() => removeFromCart(index)}>Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default Cart;