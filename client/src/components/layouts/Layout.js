import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class Layout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row Title">
                    <div className="col-md-12">
                        <h1>This is my Website</h1>
                    </div>
                </div>
                <div className="row Title">
                    <div clasName="col-md-12>">

                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/submit'}>Submit</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>


            </div>
        );
    }
}

export default Layout;