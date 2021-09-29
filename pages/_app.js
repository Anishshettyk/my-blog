import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, darkTheme, lightTheme } from "../styles";
import { Main } from "../Layouts";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
