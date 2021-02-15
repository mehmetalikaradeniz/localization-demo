import {Nav, NavDropdown} from 'react-bootstrap';
import React, {useEffect, useContext, useState } from 'react';
import {Context} from '../../../store/store';
import {i18n} from '../../../lang/i18n';
import { useTranslation } from "react-i18next";
import LoginForm from '../../../forms/loginForm'
function AuthButton(){
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [state, dispatch] = useContext(Context);
    const { t } = useTranslation();

    const logOut = () =>{
        dispatch({
            type: "REMOVE_USER"
        });
    }
    return(
        <>
            {
                state.userInfo == null ?
                <>
                    <Nav.Link onClick={() => setShowLoginModal(true)}>{t("LOG_IN")}</Nav.Link>
                    <LoginForm
                        show={showLoginModal}
                        onHide={() => setShowLoginModal(false)}
                    />
                </> :
                <NavDropdown title={state.userInfo.name} id="basic-nav-dropdown">
                    <NavDropdown.Item >{state.userInfo.email}</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => logOut()}>{t("LOG_OUT")}</NavDropdown.Item>
                </NavDropdown>
            }

        </>
    );
}

export default AuthButton;