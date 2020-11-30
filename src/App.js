import React from "react";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";
import { theme } from "./theme";
import { SidebarComponent } from "./components/sidebar/sidebar";
import { PreviewComponent } from "./components/preview/preview";

export class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <NavbarComponent /> */}
        <Grid container>
          {/* Sidebar */}
          <Grid item xs={2}>
            <SidebarComponent />
          </Grid>
          {/* Main */}
          <Grid item xs={"auto"}>
            <main
              style={{
                margin: "1rem",
              }}
            >
              <HomeComponent />
            </main>
          </Grid>
          {/* Preview */}
          <Grid item xs={2}>
            <PreviewComponent />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
