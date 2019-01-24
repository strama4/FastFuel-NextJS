import React from 'react';
import { withRouter } from 'next/router';

const Nav = () => {
    return (
        <div>
            <a href="/">Home</a>
            <a href="/login">Login</a>
        </div>
    );
};

export default withRouter(Nav);