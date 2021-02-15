import React, { useEffect, useState } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import LanguageNavDropdown from '../LanguageNavDropdown';
import PageName from './subComponents/PageName';
import * as Icon from 'react-bootstrap-icons';
import AuthButton from './subComponents/AuthButton';
import '../../lang/i18n';
import { useTranslation } from "react-i18next";
import {
    Link
  } from "react-router-dom";
function Header(){
    const { t } = useTranslation();
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">
                        <Icon.EmojiSmile color="#3FBA6B" />
                    </Link>
                </Navbar.Brand>
                <PageName />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Link className={"nav-link"} to="/">
                            {t("HOME")}
                        </Link>
                        <Link className={"nav-link"} to="/contact-us">
                            {t("CONTACT_US")}
                        </Link>
                        <LanguageNavDropdown />
                        <AuthButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;