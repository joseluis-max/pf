import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import AboutMe from './pages/AboutMe'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      skills:[]
    }
  }
  componentDidMount(){
    try{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => this.setState({'skills': data}))
    }catch(err){
      console.error(err)
    }
  }
  render(){
    return(
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="main">
        <Switch>
        <Route exact path="/" component={DashBoard}/>
        <Route exact path="/aboutme" component={ props => <AboutMe skills={this.state.skills} />}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contacts" component={Contacts}/>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
    )
  };
}

export default App;
