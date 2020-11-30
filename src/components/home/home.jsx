import React from "react";
import "./home.scss";
import { resumes, currentResume } from "../../state/global";
import {
  Container,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";

export class HomeComponent extends React.Component {
  state = {
    currentResume: {},
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
          <TextField label="My Name" variant="outlined" value={resume.name} />
          <br />
          <TextField label="Role" variant="outlined" value={resume.role} />
          <br />
          <TextField label="Address" variant="outlined" value={resume.role} />
          <br />
          <br />
          <Typography variant="h6">Personal Information</Typography>
          <br />
          <TextField label="My Name" variant="outlined" value={resume.name} />
          <br />
          <TextField label="Role" variant="outlined" value={resume.role} />
          <br />
          <TextField label="Address" variant="outlined" value={resume.role} />
        </FormControl>
      </Container>
    );
  }
}
