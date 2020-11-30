import React from "react";
import "./home.scss";
import { resumes, currentResume } from "../../state/global";
import {
  CircularProgress,
  Container,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";

export class HomeComponent extends React.Component {
  state = {
    currentResume: null,
    resumes: {},
  };

  componentDidMount() {
    resumes.subscribe((resumes) => {
      this.setState({ resumes: resumes });
    });
    currentResume.subscribe((currentResume) => {
      this.setState({
        currentResume: resumes.value[currentResume],
      });
    });
  }

  render() {
    const resume = this.state.currentResume;
    if (!resume) return <CircularProgress />;
    return (
      <Container>
        <Typography variant="h6" color="secondary">
          Resume for
        </Typography>
        <Typography variant="h4">{resume.role}</Typography>
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
            defaultValue={resume.name}
          />
          <br />
          <TextField
            label="Role"
            variant="outlined"
            defaultValue={resume.role}
          />
          <br />
          <TextField
            multiline
            rows={5}
            inputProps={{
              maxLength: 270,
            }}
            label="About Me"
            variant="outlined"
            defaultValue={resume.roleDesc}
          />
          <br />
          <TextField
            label="Address"
            variant="outlined"
            defaultValue={resume.address}
          />
          <br />
          <TextField
            label="Email"
            variant="outlined"
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
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
          />
          <br />
        </FormControl>
      </Container>
    );
  }
}
