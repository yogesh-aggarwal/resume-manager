import React from "react";
import "./home.scss";
import { resumes, currentResume } from "../../state/global";
import {
  Container,
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
    return (
      <Container>
        <Typography variant="h6" color="secondary">
          Resume for
        </Typography>
        <Typography variant="h4">{this.state.currentResume.role}</Typography>
        <br />
        <FormControl fullWidth>
          <TextField label="My Name" variant="outlined" />
        </FormControl>
      </Container>
    );
  }
}
