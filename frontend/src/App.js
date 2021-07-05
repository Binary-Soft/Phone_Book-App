import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Home from './components/Home'
import ContactSeparate from './components/ContactSeparate'
// import AddPage from './components/AddPage'
import { SearchContext } from './SearchContext'
import { useState } from 'react'
// import Header  from './components/Header'

function App() {

  const [data, setData] = useState([])
  
  return (
    <SearchContext.Provider value={{data,setData}}>
    <Router>
     
        <Navigation />
     
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/contact/:_id" exact component={ContactSeparate}></Route>
        {/* <Route path="/"  component={AddPage}></Route> */}
      </Switch>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
