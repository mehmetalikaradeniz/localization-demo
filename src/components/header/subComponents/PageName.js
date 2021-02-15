import '../../../lang/i18n';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import React, {useEffect, useRef, useState } from 'react';
function PageName(props){
    const { t } = useTranslation();
    const [currentPath, setCurrentPath] = useState("");
    const [currentPageName, setCurrentPageName] = useState("");

    const location = useLocation();
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            setCurrentPath(location.pathname);
            setCurrentPageName(getTitle());
            mounted.current = true;
          } else {
            setCurrentPath(location.pathname);
            setCurrentPageName(getTitle());
          }
    });

    const getTitle = () => {
        switch(currentPath){
            case "/contact-us":
                return "CONTACT_US";
            default:
                return "HOME"
        }
    }
    return(
        <div style={{color: "white"}}>
            {t(currentPageName)}
        
        </div>
    );
}

export default PageName;