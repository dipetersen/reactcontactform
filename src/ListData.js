import React, {Component} from 'react';

class Contacts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button>Add New</button>
                <table>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th></th>
                    </tr>
                {props.data.forEach(function(element) {
                    <tr>
                        <td>Edit</td>
                        <td>{element.firstName}</td>
                        <td>{element.Title}</td>
                        <td>{element.phoneNumber}</td>
                        <td>{element.address}</td>
                        <td>{element.city}</td>
                        <td>{element.state}</td>
                        <td>{element.zipCode}</td>
                        <td>Delete</td>
                    </tr>
                }, this)}
                </table>
            </div>
        );
    }
}

export default Contacts;