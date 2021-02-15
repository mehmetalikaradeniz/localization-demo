import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
function Footer(){
    return(
        <footer>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
                <h2 style = {{ width: "100%", textAlign: "center", color: "white"}}>Footer</h2>
            </Navbar>
		</footer>
    );
}


export default Footer;