import React from "react";
import "./home.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

export class HomeComponent extends React.Component {
  state = {
    resumes: [
      "Mobile Developer",
      "Frontend Developer",
      "Backend Developer",
      "Python Developer",
    ],
    currentResume: "",
  };

  handleSelectionChange($event) {
    this.setState({ currentResume: $event.target.value });
    console.log();
  }

  componentDidMount() {
    this.setState({ currentResume: this.state.resumes[0] });
  }

  render() {
    return (
      <div className="container">
        <div className="resume-select">
          <FormControl>
            <InputLabel>Resume Type</InputLabel>
            <Select
              value={this.state.currentResume}
              onChange={this.handleSelectionChange.bind(this)}
            >
              {this.state.resumes.map((name) => {
                return (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    );
  }
}
