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

  render() {
    return (
      <div className="sidebar">
        <List
          component="nav"
          subheader={<ListSubheader>Nested List Items</ListSubheader>}
        >
          <ListItem button>
            <ListItemText primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    );
  }
}
