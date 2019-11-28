import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div  class="content">
         <Route path="/healthInfo" component="HealthInfo"/>
         <Route path="/healthCare" component="HealthCare"/>
         <Route path="/healthFinance" component="healthFinance"/>
         <Route path="/healthMembership" component="HealthMembership"/>
      </div>
    </div>
  );
}

export default App;
