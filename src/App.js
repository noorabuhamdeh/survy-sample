import './App.css';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { Component } from 'react';
import Viewer from './Viewer';

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
  constructor(props){
    super(props);
    this.state={
      isDone:false,
      result: undefined,
    };
  }
  onComplete = (survey, options) => {
    //Write survey results into database
    this.setState({isDone:true, result: survey.data});
    console.log("Survey results: " , survey.data);
   }

  render(){
    if(! this.state.isDone){
      var model = new Survey.Model(this.surveyJSON);
      
      return (
        <div className="container">
          <Survey.Survey   model={model} onComplete={this.onComplete}/>
        </div>
      );
    }
    else 
      return (
            <div className="container">

            <div className="card">
              <div className="card-header">
                This is the result of your survay
              </div>
              <div className="card-body">
                <Viewer my_json_object={this.state.result} />
              </div>
            </div>
          </div>
      );
  }
 }

