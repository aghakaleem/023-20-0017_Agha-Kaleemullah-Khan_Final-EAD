import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import button from "bootstrap/js/src/button";


export default function ContactUs (){

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value});
    }


    return(
        <>

            <section className={"contact"} id={"contact"}>
                <Container >
                    <Row className={"align-items-center"}>

                        <Col md={12} >
                            <h2>Contact Us</h2>
                            <form onSubmit={onFormUpdate}>
                                <Row>
                                    <Col sm={6} className={"px-1"}>
                                        <input type="text" placeholder={"First Name"} value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}/>


                                    </Col>
                                    <Col sm={6} className={"px-1"}>
                                        <input type="text" placeholder={"Last Name"} value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12} className={"px-1"}>
                                        <input type="email" placeholder={"Email"} value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12} className={"px-1"}>
                                        <textarea  placeholder={"Your Message"} rows={6} value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}> </textarea>
                                        <Button variant={"success"} type={"submit"}><span>{buttonText}</span></Button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "Danger" : "Success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}