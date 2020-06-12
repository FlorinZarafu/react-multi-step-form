import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <h3>Thank you for submiting</h3>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
