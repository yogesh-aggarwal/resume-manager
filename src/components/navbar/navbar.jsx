import {
  AppBar,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
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
          <div className="bar">
            <div className="intro">
              <IconButton edge="start" color="inherit" disableRipple="true">
                <i class="las la-file-pdf"></i>
              </IconButton>
              <Typography variant="h6">Resume Manager</Typography>
            </div>

            <FormControl variant="outlined" style={{ color: "#fff" }}>
              <InputLabel>Age</InputLabel>
              <Select value={10} onChange={() => {}} label="Age">
                <MenuItem>Python Developer</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
