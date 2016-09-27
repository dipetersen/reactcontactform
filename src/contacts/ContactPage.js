import React, {Component} from 'react';
import ContactFormApi from '../api/ContactApi';
import ContactList from './ContactList';

class ContactPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        const api = new ContactFormApi();
        let cts = api.getAllContacts();
        this.setState({contacts: cts});
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <a href="/#addcontact" className="btn btn-default">Add Contact</a>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}

export default ContactPage;