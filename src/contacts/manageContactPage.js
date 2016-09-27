import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ContactFormApi from '../api/ContactApi';
import toastr from 'toastr';

class ManageContactPage extends Component {
    constructor() {
        super();
        this.ContactApi = new ContactFormApi();
        this.state = {
            contact: { id: '', firstName: '', Title: '', phoneNumber: '', address: '', city: '', state: '', zipCode: ''},
            errors: {},
            dirty: false
        };
    }
    willTransitionFrom(transition, component) {
        if(component.state.dirty && !confirm('Leave without saving?')) {
            transition.abort();
        }
    }

    componentWillMount(){
        const contactId = this.props.params.id;
        if(contactId) {
            this.setState({contact: this.ContactApi.getContactById(contactId)});
        }
    }

    setContactState(event) {
        this.setState({dirty: true});
        const contact = this.state.contact;
        const field = event.target.name;
        const value = event.target.value;
        contact[field] = value;
        return this.setState({contact: contact});
    }

    contactFormIsValid() {
        let formIsValid = true;
        let errors = this.state.errors;
        errors = {};  //clear error object

        if(this.state.author.firstName.length === 0) {
            errors.firstName = "First Name is required";
            formIsValid = false;
        }

        if(this.state.author.Title.length === 0) {
            errors.Title = "Last Name is required";
            formIsValid = false;
        }
        if(this.state.author.phoneNumber.length === 0) {
            errors.phoneNumber = "Phone Number is required";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
        
    }

    saveContact(event) {
        event.preventDefault();
        if(!this.contactFormIsValid()) {
            return;
        }
        this.ContactApi.saveContact(this.state.contact);
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