import React, {Component} from 'react';
import ContactFormApi from '../api/ContactApi';
import ContactList from './ContactList';

class ContactPage extends Component {
    constructor(props){
        super(props);
        this.State = {
            contacts: []
        }
    }

    componentDidMount() {
        if(this.isMounted()){
            this.setState({contacts: ContactFormApi.getAllContacts()});
        }
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <a href="/#addcontact" className="btn btn-default">Add Contact</a>
                <ContactList contacts={this.State.contacts} />
            </div>
        );
    }
}

export default ContactPage;