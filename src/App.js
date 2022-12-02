import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;