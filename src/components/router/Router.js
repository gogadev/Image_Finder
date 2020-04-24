import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import ImgView from "../img-view/ImgView";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/image/:id" component={ImgView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
