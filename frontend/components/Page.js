import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = { 
    black: '#0F0A0A',
    white: '#F5EFED',
    green: '#BDBF09',
}

const StyledPage = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 1fr);
    grid-template-rows: auto 1fr;
    margin: 20px;
`;

const Inner = styled.div`
    background: ${theme.white};
    color: ${theme.black};
    padding: 20px;
`;


const CreateGlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white}

    }

    a, a:visited {
        color: white;
        text-decoration: none;
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <CreateGlobalStyle /> 
                    <Meta />
                    <Header />
                    <Inner>
                        {this.props.children}

                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;