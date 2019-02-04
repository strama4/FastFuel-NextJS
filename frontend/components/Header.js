import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.div`
    background: ${props => props.theme.green};
    margin-bottom: 0;
    padding: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 10px;
`;

const Logo = styled.h3`
    color: ${props => props.theme.black};
    font-size: 6rem;
    margin: 5px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>FastFuel Meal Prep</Logo>
            <Nav />
        </StyledHeader>
    );
};

export default Header;