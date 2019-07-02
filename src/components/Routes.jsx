import React from "react";
import { Switch, Route } from "react-router";
import EditProfilePage from "./EditProfilePage";
import Jobs from "./Jobs";
import Account from "./Account";
import Notifications from "./Notifications";
import jobSeekerRegistrationPage from "./jobSeekerRegistrationPage";
import companyRegistrationPage from "./company/companyRegistrationPage";
import HomePage from "./HomePage";
// to not get confused with the History component in react-router.

const Routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/account" component={Account} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/notifications" component={Notifications} />
      <Route
        path="/JobSeekerRegistration"
        exact
        component={jobSeekerRegistrationPage}
      />
      <Route
        path="/CompanyRegistration"
        exact
        component={companyRegistrationPage}
      />
    </Switch>
  </React.Fragment>
);

export default Routes;
