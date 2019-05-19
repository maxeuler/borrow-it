import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }
	*, *.:after, *:before {
		box-sizing: inherit;
	}
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const theme = {
	primaryColor: '#f1c40f',
	black: '#1e272e',
	border: '#ededed'
};

const Inner = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	padding: 2rem;
`;

const Page = props => (
	<ThemeProvider theme={theme}>
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<Inner>{props.children}</Inner>
		</React.Fragment>
	</ThemeProvider>
);

export default Page;
