import React from "react";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";
import { theme } from "./theme";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavbarComponent />
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={"auto"}>
            <main
              style={{
                margin: "1rem",
              }}
            >
              <HomeComponent />
            </main>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
