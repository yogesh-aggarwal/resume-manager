import React from "react";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";
import { theme } from "./theme";
import { SidebarComponent } from "./components/sidebar/sidebar";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavbarComponent />
        <Grid container>
          <Grid item xs={2}>
            <SidebarComponent />
          </Grid>
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
