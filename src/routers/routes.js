import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes

import ThemeFour from "../themes/theme-four";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeFour} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;