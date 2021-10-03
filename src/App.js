
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NoFound from './components/NoFound/NoFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';


function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Courses></Courses>
          </Route>
          <Route exact path="/home">
            <Courses></Courses>
          </Route>
          <Route  exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
