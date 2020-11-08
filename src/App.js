import logo from './logo.svg';
import './App.css';
import * as Survey from "survey-react";
import "survey-react/survey.css";

import { Component } from 'react';

export default class App extends Component{
  json = {
    elements: [
      { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
    ]
  };
  
   surveyJSON = { title: "Tell us, what technologies do you use?", showProgressBar: "top", pages: [
    { name:"page1", questions: [ 
        { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
        { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
     ]},
    { name: "page2", questions: [
      { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
      { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
    { name: "page3",questions: [
      { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
   ]
  }
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " , survey.data);
   }

  render(){
    var model = new Survey.Model(this.surveyJSON);
    
    return (<Survey.Survey   model={model} onComplete={this.onComplete}/>);
  }
 }

function App2() {
  const json = {
    elements: [
     { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
    ]
   };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Ok
        </div>
        <div className="card-body">
          fineee
        </div>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

//export default App;
