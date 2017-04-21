import React, {Component} from 'react';
import {Link} from 'react-router';
import ContactFormApi from '../api/ContactFormApi';
import ContactList from './ContactList';
import toastr from 'toastr';

class ContactPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: []
        };
        this.deleteContact = this.deleteContact.bind(this);
    }

    
    deleteContact(id){
        console.log("deleteContact",id);
        var contacts = [...this.state.contacts];
        const idx = contacts.findIndex(contact => contact.ID === id);
        contacts = [...contacts.slice(0,idx), ...contacts.slice(idx+1)]; 
        this.setState({contacts});
    }

    componentDidMount() {
        const api = new ContactFormApi();
        const cts = api.getAllContacts();
        cts.done(function(response){
            console.log("ajax response");
            console.log(response);
            if(response.value) {
                this.setState({contacts: response.value});
            } else {
                console.log(response);
            }
        }.bind(this));
        cts.fail(function(error){
            console.log(error);
            toastr.error("Could not get the list of contacts.");
        })
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <Link to="newcontact" className="btn btn-default">Add Contact</Link>
                <ContactList deleteRow={this.deleteContact} contacts={this.state.contacts}  />
            </div>
        );
    }
}

export default ContactPage;