import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactFormApi from './ContactFormApi';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: null,
      appstate: "list"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    if(this.refs.contactForm.isValid()){
      const data = this.refs.contactForm.getFormData();
      this.setState({submitted: data});
      const api = new ContactFormApi();
      const ret = api.newContact(data);
      console.log("handleSubmit_result: " + ret);
    }
  }

  render() {
    let submitted;
    if(this.state.submitted !== null) {
      submitted = 
        <div className="alert alert-success">
          <p>ContactForm data:</p>
          <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
        </div>
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          <h3 className="panel-title pull-left">Contact Form</h3>
        </div>
        <div className="panel-body">
          <ContactForm ref="contactForm"/>
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
        </div>
      {submitted}
      </div>
    );
  }
}

export default App;
