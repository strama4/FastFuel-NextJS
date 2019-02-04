import React, { Component } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const NavBar = styled.div`
    font-size: 2rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(100px, auto));
    text-align: center;
    grid-gap: 10px;
`;


class Nav extends Component {
    render() {
        return (
            <NavBar>
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="/build">Build Meal Plan</a>
                <a href="/signout">Sign Out</a>

            </NavBar>
        );
    }
}
export default withRouter(Nav);