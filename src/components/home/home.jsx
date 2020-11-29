import React from "react";
import "./home.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

export class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="resume-select">
          <FormControl variant="outlined" style={{ color: "#fff" }}>
            <InputLabel>Resume Type</InputLabel>
            <Select value={"10"} onChange={() => {}} label="Age">
              <MenuItem>Python Developer</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button variant="contained">Default</Button>
      </div>
    );
  }
}
