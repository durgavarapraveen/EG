import './App.css';
import "@fontsource/montserrat";

import Login from './Components/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router';
import TextInput from './Components/TextInput';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <TextInput label='Email' type='text' />
      <TextInput label='Password' type='password' /> */}
    </div>
  );
}

export default App;
