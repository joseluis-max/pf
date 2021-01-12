import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import AboutMe from './pages/AboutMe'
import DashBoard from './pages/DashBoard'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <div className="main">
      <Switch>
      <Route exact path="/" component={DashBoard}/>
      <Route exact path="/aboutme" component={AboutMe}/>

    </Switch>
    </div>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
