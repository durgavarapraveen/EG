import './App.css';
import "@fontsource/montserrat";
import Login from './Components/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router';
import MobileVerify from './Components/MobileVerify';
import OtpForm from './Components/OTPform';
import Name from './Components/Name';
import PersonalInfo_1 from './Components/PersonalInfo_1';
import Home from './Head/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/Mobileverification' exact component={MobileVerify} />
          <Route path='/Name' exact component={Name} />
          <Route path='/PersonalInfo_1' exact component={PersonalInfo_1} />
          <Route path='/Home' exact component={Home} />
        </Switch>
      </Router>
      {/* <OtpForm /> */}
    </div>
  );
}

export default App;
