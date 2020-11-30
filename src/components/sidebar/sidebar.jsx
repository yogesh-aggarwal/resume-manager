import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import React from "react";
import "./sidebar.scss";
import { resumes, currentResumeId } from "../../state/global";

export class SidebarComponent extends React.Component {
  state = {
    resumes: [],
    currentResumeId: "",
  };

  componentDidMount() {
    resumes.subscribe((resumes) => {
      this.setState({ resumes: Object.values(resumes) });
    });
    currentResumeId.subscribe((currentResume) => {
      this.setState({ currentResume: currentResume });
    });
  }

  handleResumeChange(name) {
    currentResumeId.next(name);
  }

  render() {
    return (
      <div className="sidebar">
        <List
          component="nav"
          subheader={<ListSubheader>Resumes</ListSubheader>}
        >
          {this.state.resumes.map((resume) => {
            return (
              <ListItem
                button
                selected={this.state.currentResumeId === resume.id}
                key={currentResumeId.id}
                onClick={() => {
                  this.handleResumeChange(currentResumeId.id);
                }}
              >
                <ListItemText primary={resume.role} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
