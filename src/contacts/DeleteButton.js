import React, {Component} from 'react';
import ContactFormApi from '../api/ContactFormApi';
import toastr from 'toastr';

class DeleteButton extends Component {

  onClick(){
    const api = new ContactFormApi();
    console.log("deleting contact id: ",this.props.id);
    var del = api.deleteContact(this.props.id);
    this.props.deleteRow(this.props.id);
    del.done(function(d){
      toastr.success("Contact Deleted");
    });
      
  }

  render() {
    return (
      <button className="btn btn-xs btn-primary" onClick={() => {this.onClick(this.props.id)}}>Delete</button>
    );
  }
}
export default DeleteButton;