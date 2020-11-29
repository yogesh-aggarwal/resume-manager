import React from "react";
import { HomeComponent } from "./components/home/home";
import { NavbarComponent } from "./components/navbar/navbar";

export class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <HomeComponent />
      </div>
    );
  }
}
