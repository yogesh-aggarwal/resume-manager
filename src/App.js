import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";
import { theme } from "./theme";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavbarComponent />
        <HomeComponent />
      </ThemeProvider>
    );
  }
}
