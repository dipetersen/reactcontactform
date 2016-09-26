import React, {Component} from 'react';
import Router, { hasHistory } from 'react-router';
import ContactForm from './ContactForm';
import ContactFormApi from './Api/ContactApi';
import toastr from 'toastr';

class ManageContactPage extends Component {
    constructor() {
        super();
        this.State = {
            contact: { id: '', firstName: '', Title: '', phoneNumber: '', address: '', city: '', state: '', zipCode: ''},
            errors: {},
            dirty: false
        }
    }
    willTransitionFrom(transition, component) {
        if(component.state.dirty && !confirm('Leave without saving?')) {
            transition.abort();
        }
    }

    componentWillMount(){
        const contactId = this.props.params.id //from the path '/contact:id'
        if(contactId) {
            this.setState({contact: ContactApi.getContactById(contactId)});
        }
    }

    setContactState(event) {
        this.setState({dirty: true});
        const field = event.target.name;
        const value = event.target.value;
        this.state.contact[field] = value;
        return this.setState({contact: this.state.contact});
    }

    contactFormIsValid() {
        const formIsValid = true;
        this.state.errors = {};  //clear error object

        if(this.state.author.firstName.length === 0) {
            this.state.errors.firstName = "First Name is required";
            formIsValid = false;
        }

        if(this.state.author.Title.length === 0) {
            this.state.errors.Title = "Last Name is required";
            formIsValid = false;
        }
        if(this.state.author.phoneNumber.length === 0) {
            this.state.errors.phoneNumber = "Phone Number is required";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
        
    }

    saveContact(event) {
        event.preventDefault();
        if(!this.contactFormIsValid()) {
            return;
        }
        ContactApi.saveContact(this.state.contact);
        this.setState({dirty: false});
        toastr.success('Contact saved');
        this.transitionTo('contacts');
    }



    render() {
        return (
            <ContactForm
                contact={this.state.contact}
                onChange={this.setContactState}
                onSave={this.saveContact}
                errors={this.state.errors} />
        );
    }
}


export default ManageContactPage;