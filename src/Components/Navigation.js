import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../Screens/Home";

function Navigation() {
  return (
    <div>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </div>
  );
}

export default Navigation;
