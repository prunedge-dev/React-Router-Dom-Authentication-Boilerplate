import React from "react";
import { Route, Redirect } from "react-router-dom";

import Auth from "../utils/Auth";
import { PrivatePaths } from "./index";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const content = Auth.isAuthenticated() ? (
          <Redirect
            to={{
              pathname: PrivatePaths.Dashboard,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        );
        return content;
      }}
    />
  );
};

export default PublicRoute;
