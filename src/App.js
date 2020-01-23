import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from "react-router-dom/route";
class App extends Component {
  render(){
  return (
      <Router>
      <div className="App">
        <Route path="/" render={
          ()=>{
            return(<h1>welcome to the home</h1>);
              }
        }/>
      </div>
      </Router>
      );
  }
}
export default App;
