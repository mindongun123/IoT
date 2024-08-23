import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme.js";

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
    <HashRouter>
      <Switch>
        <Route path={`/admin`} component={AdminLayout} />
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    </HashRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
