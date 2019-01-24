import React, { Component } from 'react';
import Nav from './Nav';

class Page extends Component {
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

export default Page;