import React from "react";
import "./navbar.scss";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

export class NavbarComponent extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="bar">
            <div className="intro">
              <IconButton edge="start" color="inherit" disableRipple="true">
                <i class="las la-file-pdf"></i>
              </IconButton>
              <Typography variant="h6">Resume Manager</Typography>
            </div>

            <IconButton edge="start" color="inherit">
              <i class="las la-bell"></i>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
