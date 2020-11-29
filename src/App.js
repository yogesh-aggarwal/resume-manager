import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";
import { theme } from "./theme";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavbarComponent />
        <HomeComponent />
      </ThemeProvider>
    );
  }
}
