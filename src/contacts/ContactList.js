import React, {Component} from 'react';
import {Link} from 'react-router';
import DeleteButton from './DeleteButton';
import ContactFormApi from '../api/ContactFormApi';

class ContactList extends Component {
    render() {
        const createContactRow = function(contact) {
            return (

                    <tr key={contact.ID}>
                        <td>
                            <Link to={`contact/${contact.ID}`}>{contact.ID}</Link>
                        </td>
                        <td>{contact.firstName}</td>
                        <td>{contact.Title}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.address}</td>
                        <td>{contact.city}</td>
                        <td>{contact.state}</td>
                        <td>{contact.zipCode}</td>
                        <td><DeleteButton deleteRow={this.props.deleteRow} id={contact.ID} /></td>
                    </tr>
            );
        }

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map(createContactRow, this)}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

ContactList.contextTypes = {
    router: React.PropTypes.object
}

export default ContactList;