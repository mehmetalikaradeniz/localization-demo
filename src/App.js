import React from "react";
import Store from './store/store'
import Header from './components/header/Header';
import Home from './pages/home';
import ContactUs from './pages/contactUs';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {  
  return (
    <Store>
         <Router>
          <>
            <Header />
            <Switch>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </>
        </Router>
    </Store>
  );
}

export default App;
