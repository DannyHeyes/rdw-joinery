import { Route, Switch } from 'react-router-dom';
import Footer from './components/common/footer/footer';

import Navbar from './components/common/Navbar/navbar';
import Home from './components/Pages/Landing/home';
import Gallery from './components/Pages/Gallery/gallery';
import Contact from './components/Pages/Contact/contact';
import TemporaryLanding from './components/Pages/Temp/temp';


function App() {
  return (
    <div>

    <Route exact path="/" component={TemporaryLanding} />
    
      {/* <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/> */}

    </div>
  );
}

export default App;
