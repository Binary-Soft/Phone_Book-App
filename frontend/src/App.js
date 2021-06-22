import './App.css';
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom' ;
import Navigation from './components/Navigation'
import Home from './components/Home'
// import AddPage from './components/AddPage'

// import Header  from './components/Header'

function App() {
  return (
     <Router>
            <Navigation/>
            <Switch>
              <Route path="/"  component={Home}></Route>
              {/* <Route path="/"  component={AddPage}></Route> */}
            </Switch>
     </Router>
  );
}

export default App;
