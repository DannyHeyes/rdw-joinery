import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar/navbar';
import Home from './components/Pages/Landing/home';
import Gallery from './components/Pages/Gallery/gallery';
import Contact from './components/Pages/Contact/contact';
import Footer from './components/common/footer/footer';

// import TemporaryLanding from './components/Pages/Temp/temp';
import history from './history';


// General Function to scroll render each page to top of page. 
export function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


function App() {

  return (
    <div>

    {/* <Route exact path="/" component={TemporaryLanding} /> */}
    
    <Router history={history}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
      </Router>
 

    </div>
  );
}

export default App;
