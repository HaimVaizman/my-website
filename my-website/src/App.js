import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Accessibility } from './Accessibility';
import { Permitforuseexceeds } from './Permitforuseexceeds';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import {Linking} from 'react'

const phoneNumber = '0506831839'

class App extends Component {
  render() {
    return (
     
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
          
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/accessibility" component={Accessibility} />
              <Route path="/Permitforuseexceeds" component={Permitforuseexceeds} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />


           
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>


    );
  }
}

export default App;
