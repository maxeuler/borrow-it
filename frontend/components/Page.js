import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Inner = styled.div`
	max-width: 1500px;
	width: 90%;
	margin: 0 auto;
	padding: 2rem;
`;

const Page = props => (
	<div>
		<GlobalStyle />
		<Header />
		<Inner>{props.children}</Inner>
	</div>
);

export default Page;
