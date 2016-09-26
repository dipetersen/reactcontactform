import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#contacts">Contacts</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
