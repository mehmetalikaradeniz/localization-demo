import {NavDropdown} from 'react-bootstrap'
import React, {useEffect, useContext, useState } from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import countryList from '../lang/countryList';
import { useTranslation } from "react-i18next";
import '../lang/i18n';


function CountryListDropdown(){
    const { t } = useTranslation();
    const [title, setTitle] = useState();
    const handleOnClick = (value) => {
        setTitle(value.name);
        console.log(value);
    }
    return(
        <DropdownButton id="dropdown-basic-button" title={t("COUNTRY_LIST_DROPDOWN_TITLE")}>
            {
                countryList.map(
                    (element) => <Dropdown.Item key={element.id} onClick = {() => handleOnClick(element)}>{element.name}</Dropdown.Item>
                )
            }
        </DropdownButton>
    );

}

export default CountryListDropdown;