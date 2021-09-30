import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { GlobalStyle, darkTheme, lightTheme } from "../styles";
import { Main } from "../Layouts";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} theme={theme}>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
