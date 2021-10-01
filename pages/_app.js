import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { GlobalStyle, darkTheme, lightTheme } from "../styles";
import { Main } from "../Layouts";
import { store } from "../redux";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const switchAudio = useRef(
    typeof Audio !== "undefined"
      ? new Audio("/static/sounds/switch.wav")
      : undefined
  );

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      switchAudio.current?.play();
    } else {
      setTheme("dark");
      switchAudio.current?.play();
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
