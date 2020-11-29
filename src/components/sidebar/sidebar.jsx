import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import React from "react";
import "./sidebar.scss";
import { resumes, currentResume } from "../../state/global";

export class SidebarComponent extends React.Component {
  state = {
    resumes: [],
    currentResume: "",
  };

  componentDidMount() {
    resumes.subscribe((resumes) => {
      this.setState({ resumes: resumes });
    });
    currentResume.subscribe((currentResume) => {
      this.setState({ currentResume: currentResume });
    });
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
