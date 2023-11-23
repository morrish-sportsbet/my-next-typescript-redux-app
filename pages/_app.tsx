import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { createAppTheme } from "theme/createAppTheme";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createAppTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
