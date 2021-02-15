import {NavDropdown} from 'react-bootstrap'
import React, {useEffect, useContext, useState } from 'react';
import {Context} from '../store/store'
import languageList from '../lang/languageList'
import {i18n} from '../lang/i18n'
function LanguageNavDropdown(){
    const [state, dispatch] = useContext(Context);
    const handleOnClick = (value) => {
        i18n.changeLanguage(value);
        dispatch({type: 'CHANGE_LANGUAGE', payload: value});
    }
    return(
        <NavDropdown title = {state.language.name} id="collasible-nav-dropdown">
            {
                languageList.map(
                    (element) => <NavDropdown.Item key={element.id} onClick = {() => handleOnClick(element.id)}>{element.name}</NavDropdown.Item>
                )
            }
        </NavDropdown>
    );
}

export default LanguageNavDropdown;