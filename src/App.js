import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Appheader from './AppHeader'
import Appfooter from './AppFooter';
import Apphome from './AppHome';
import Appshop from './AppShop';
import Apptravels from './AppTravels';
import Appcourses from './AppCourses'
import Appcontact from './AppContact';
import Appabout from './AppAbout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="sitewrapper">
          <Appheader />
          <Route exact path='/' component={Apphome} />
          <Route path='/shop' component={Appshop} />
          <Route path='/travels' component={Apptravels} />
          <Route path='/courses' component={Appcourses} />
          <Route path='/contact' component={Appcontact} />
          <Route path='/about' component={Appabout} />
          <Appfooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
