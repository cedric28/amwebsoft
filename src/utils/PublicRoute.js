import React from "react";
import { Route } from "react-router-dom";

// handle the public routes
function PublicRoute({ component: Component,layout: Layout, ...rest }) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default PublicRoute;
