import React, {Component} from 'react';
import Utils from "../Utils";

var STATES = [
    'AL|Alabama', 'AK|Alaska', 'AZ|Arizona', 'AR|Arkansas', 'CA|California', 'CO|Colorado', 'CT|Connecticut', 'DE|Delaware', 'DC|District of Columbia', 'FL|Florida',
    'GA|Georgia', 'HI|Hawaii','ID|Idaho', 'IL|Illinois', 'IN|Indiana', 'IA|Iowa', 'KS|Kansas', 'KY|Kentucky', 'LA|Louisiana', 'ME|Maine', 'MD|Maryland',
    'MA|Massachusettes', 'MI|Michigan', 'MN|Minnesota', 'MS|Mississippi','MO|Missouri', 'MT|Montana', 'NE|Nebraska', 'NV|Nevada', 'NH|New Hampshire',
    'NJ|New Jersey', 'NM|New Mexico', 'NY|New York', 'NC|North Carolina', 'ND|North Dakota', 'OH|Ohio', 'OK|Oklahoma', 'OR|Oregon', 'PA|Pennsylvania', 
    'RI|Rhode Island', 'SC|South Carolina', 'SD|South Dakota', 'TN|Tennessee', 'TX|Texas', 'UT|Utah', 'VT|Vermont', 'VA|Virginia', 'WA|Washington', 'WV|West Virginia',
    'WI|Wisconsin', 'WY|Wyoming'
]


class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('ContactForm Constructor')

        this.state = {
            errors: {}
        }


    }

    isValid() {
        const fields = ['firstName', 'Title', 'phoneNumber', 'address', 'city','state','zipCode']

        let errors = {}
        fields.forEach(function(field) {
            var value = Utils.Trim(this.refs[field].value)
            if (!value) {
                errors[field] = 'This field is required'
            }
        }.bind(this))
        this.setState({errors: errors})

        let isValid = true;
        for(var error in errors) {
            if(error !== undefined) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    getFormData() {
        const data = {
            firstName: this.refs.firstName.value,
            Title: this.refs.Title.value,
            phoneNumber: this.refs.phoneNumber.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zipCode: this.refs.zipCode.value
        }
        return data;
    }

    renderTextInput(id, label) {
        return this.renderField(id,label,
            <input type="text" className="form-control" id={id} ref={id}/>
        )
    }

    renderTextArea(id, label) {
        return this.renderField(id, label,
            <textarea className="form-control" id={id} ref={id}/>
        )
    }

    renderSelect(id, label, values) {
        var options = values.map(function(value){
            const s = value.split('|');
            const a = s[0];
            const f = (s[1] !== undefined ? s[1] : s[0]);
            return <option key={a} value={a}>{f}</option>
        })
        return this.renderField(id,label,
            <select className="form-control" id={id} ref={id}>
                {options}
            </select>
        )
    }

    renderField(id, label,field){
        return <div className={Utils.CombineClasses('form-group', {'has-error': id in this.state.errors})}>
                    <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
                    <div className="col-sm-6">
                        {field}
                    </div>
               </div>
    }

    render() {
        return (
            <div className="form-horizontal">
                {this.renderTextInput('firstName', 'First Name')}
                {this.renderTextInput('Title', 'Last Name')}
                {this.renderTextInput('phoneNumber', 'Phone Number')}
                {this.renderTextArea('address','Address')}
                {this.renderTextInput('city','City')}
                {this.renderSelect('state',"State",STATES)}
                {this.renderTextInput('zipCode','Zip Code')}
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </div>
        );
    }
}

export default ContactForm;