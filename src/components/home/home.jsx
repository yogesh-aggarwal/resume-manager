import React from "react";
import "./home.scss";
import { resumes, currentResume } from "../../state/global";

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
    return <div className="container">{this.state.currentResume.name}</div>;
  }
}
