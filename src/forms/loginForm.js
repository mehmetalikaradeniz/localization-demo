import {Modal, Form, Row, Button} from 'react-bootstrap';
import React, {useContext, useState } from 'react';
import LanguageNavDropdown from '../components/LanguageNavDropdown';
import '../lang/i18n';
import { useTranslation } from "react-i18next";
import {Context} from '../store/store'

function LoginModal(props) {
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            submit();
            event.stopPropagation();
        }
        setValidated(true);
        
    };
    const submit = () => {
        setValidated(true);
        dispatch({
          type: 'SET_USER', 
          payload: {
              name: name,
              email: email,
              password: password
          }});
          props.onHide();
    }

    const nameHandler = (e) =>{
        setName(e.target.value);
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value);
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <LanguageNavDropdown />
        </Modal.Header>
        <Modal.Body>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}  className={"loginForm"}>
                <Form.Group as={Row} controlId="validationCustom056">
                    <Form.Label>{t('NAME')}</Form.Label>
                    <Form.Control required
                        type="text"
                        onChange={nameHandler}
                    />
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustom057">
                    <Form.Label>{t('EMAIL')}</Form.Label>
                    <Form.Control required 
                        type="email" 
                        placeholder="someone@email.com"
                        onChange={emailHandler}/>
                </Form.Group>
                <Form.Group as={Row} controlId="validationCustom058">
                    <Form.Label>{t('PASSWORD')}</Form.Label>
                    <Form.Control required 
                        type="password" 
                        onChange={passwordHandler}/>
                </Form.Group>
                <Button type="submit">{t("LOG_IN")}</Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

  export default LoginModal;
  