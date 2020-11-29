import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./navbar.scss";

export class NavbarComponent extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="intro">
            <IconButton edge="start" color="inherit" disableRipple="true">
              <i class="las la-file-pdf"></i>
            </IconButton>
            <Typography variant="h6">Resume Manager</Typography>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
