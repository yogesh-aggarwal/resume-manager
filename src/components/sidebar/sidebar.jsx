import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import React from "react";
import "./sidebar.scss";

export class SidebarComponent extends React.Component {
  state = {
    resumes: [
      "Mobile Developer",
      "Frontend Developer",
      "Backend Developer",
      "Python Developer",
    ],
    currentResume: "",
  };

  componentDidMount() {
    this.setState({ currentResume: this.state.resumes[0] });
  }

  handleResumeChange(name) {
    this.setState({ currentResume: name });
    console.log(`Current Resume ${this.state.currentResume}`);
  }

  render() {
    return (
      <div className="sidebar">
        <List
          component="nav"
          subheader={<ListSubheader>Resumes</ListSubheader>}
        >
          {this.state.resumes.map((name) => {
            return (
              <ListItem
                button
                selected={this.state.currentResume === name}
                onClick={() => {
                  this.handleResumeChange(name);
                }}
              >
                <ListItemText primary={name} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
