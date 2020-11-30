import React from "react";
import "./home.scss";
import { resumes, currentResumeId } from "../../state/global";
import {
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";

export class HomeComponent extends React.Component {
  state = {
    currentResume: null,
    resumes: {},
    isAutoUpdate: true,
  };

  componentDidMount() {
    resumes.subscribe((resumes) => {
      this.setState({ resumes: resumes });
    });
    currentResumeId.subscribe((currentResume) => {
      this.setState({
        currentResume: resumes.value[currentResume],
      });
    });
  }

  handleIsAutoUpdateChange($event) {
    this.setState({ autoUpdate: $event.target.checked });
  }

  handleFormChange($event, attrib) {
    let resume = this.state.currentResume;
    resume[attrib] = $event.target.value;
    this.setState({ currentResume: resume });

    let newResumes = resumes.value;
    newResumes[this.state.currentResume.id] = resume;
    resumes.next(newResumes);
  }

  handleFormAutoUpdate($event, name) {
    if (!this.state.isAutoUpdate) return;
    this.handleFormChange($event, name);
  }

  render() {
    const resume = this.state.currentResume;
    if (!resume) return <CircularProgress />;
    return (
      <div className="home">
        <Container>
          <div className="header">
            <div className="intro">
              <Typography variant="h6" color="secondary">
                Resume for
              </Typography>
              <Typography variant="h4">{resume.role}</Typography>
            </div>
            <div className="actions">
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.isAutoUpdate}
                    onChange={this.handleIsAutoUpdateChange.bind(this)}
                    name="autoUpdate"
                    label
                  />
                }
                label="Auto Update"
              />
            </div>
          </div>
          <br />
          <Divider />
          <br />
          <FormControl fullWidth>
            <Typography variant="h6">Personal Information</Typography>
            <br />
            <TextField
              autoFocus
              label="My Name"
              variant="outlined"
              onChange={($event) => {
                this.handleFormAutoUpdate($event, "name");
              }}
              defaultValue={resume.name}
            />
            <br />
            <TextField
              label="Role"
              variant="outlined"
              onChange={($event) => {
                this.handleFormAutoUpdate($event, "role");
              }}
              defaultValue={resume.role}
            />
            <br />
            <TextField
              multiline
              rows={3}
              inputProps={{
                maxLength: 270,
              }}
              label="About Me"
              variant="outlined"
              onChange={($event) => {
                this.handleFormAutoUpdate($event, "roleDesc");
              }}
              defaultValue={resume.roleDesc}
            />
            <br />
            <TextField
              label="Address"
              variant="outlined"
              onChange={($event) => {
                this.handleFormAutoUpdate($event, "address");
              }}
              defaultValue={resume.address}
            />
            <br />
            <TextField
              label="Email"
              variant="outlined"
              onChange={($event) => {
                this.handleFormAutoUpdate($event, "email");
              }}
              defaultValue={resume.email}
            />
            <br />
            <TextField
              inputProps={{
                maxLength: 10,
              }}
              type="number"
              label="Phone Number"
              variant="outlined"
              defaultValue={resume.phoneNumber}
              onInput={($event) => {
                $event.target.value = Math.max(0, parseInt($event.target.value))
                  .toString()
                  .slice(0, 10);
                this.handleFormAutoUpdate($event, "phoneNumber");
              }}
            />
            <br />
          </FormControl>
        </Container>
      </div>
    );
  }
}
