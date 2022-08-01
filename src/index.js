import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";
import InnoSpace from "./components/Innosspace";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: hsl(0, 0%, 96%);
    font-family: 'IBM Plex Sans', Arial, Helvetica, sans-serif;
  }
`;

const InnoContainer = styled.div`
  margin: 2rem auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <NavBar />
          <InnoContainer>
            <InnoSpace />
          </InnoContainer>
        </div>
      </>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
