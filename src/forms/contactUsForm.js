import {Form, Row, Col, Button, Container} from 'react-bootstrap';
import React, {useEffect, useContext, useState } from 'react';
import {i18n} from '../lang/i18n';
import {Context} from '../store/store'
import { useTranslation } from "react-i18next";
import countryList from '../lang/countryList';
import Select from 'react-select'
function ContactUsForm() {
    const countries = [];
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState(null);
    const [countryIsValid, setCountryIsValid] = useState(0);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false && country === "") {
            event.preventDefault();
            if(country === ""){
                setCountryIsValid(-1);
            }
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            console.log({
                name,
                email,
                phoneNumber,
                country,
                message
            })
            event.stopPropagation();
        }
        if(country !== ""){
            setCountryIsValid(1);
        }
        setValidated(true);
        
    };

    useEffect(() => {
        countryList.map((element) => {
            countries.push({
                value: element.id,
                label: t(element.id)
            });
        });
        if(state.userInfo !== null){
            setName(state.userInfo.name);
            setEmail(state.userInfo.email);
        }
    });
  


    const nameHandler = (e) =>{
        setName(e.target.value);
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }
    const phoneNumberHandler = (e) =>{
        setPhoneNumber(e.target.value);
    }
    const countryHandler = (e) =>{
        setCountry(e);
        if(country === ""){
            setCountryIsValid(1);
        }
    }
    const messageHandler = (e) =>{
        setMessage(e.target.value);
    }

    const getCountrySelectClassName = () => {
        switch(countryIsValid){
            case -1:
                return "invalid";
            case 1:
               return "valid";
            default:
                return "default";
        }
    }

    return (
      <Container>
          <Row className={"contactUsFormRow"}>
              <Col md="6" sm="12">
                <h1>
                    {t("CONTACT_US")}
                </h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="validationCustom01">
                        <Form.Label>{t("NAME")}</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={name}
                            onChange={nameHandler}
                        />
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Form.Label>{t("EMAIL")}</Form.Label>
                        <Form.Control required 
                            type="email" 
                            placeholder="someone@email.com" 
                            value={email}
                            onChange={emailHandler}
                        />
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationCustom04">
                        <Form.Label>{t("PHONE_NUMBER")}</Form.Label>
                        <Form.Control 
                            type="tel" 
                            minLength="11" 
                            maxLength="11"  
                            required 
                            onChange={phoneNumberHandler}/>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>{t("COUNTRY")}</Form.Label>
                        <Select 
                            options={countries} 
                            className={`countrySelect ${getCountrySelectClassName()}`} 
                            onChange={e => { countryHandler(e ? e.value : '') }}
                        />
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{t("MESSAGE")}</Form.Label>
                        <Form.Control required as="textarea" rows={3} onChange={messageHandler}/>
                    </Form.Group>
                    <Button type="submit">{t("SUBMIT")}</Button>
                </Form>
              </Col>
          </Row>
      </Container>
    );
  }

  export default ContactUsForm;