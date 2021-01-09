import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Translate from "../pages/Translate";
import Saved from "../pages/Saved";
import Korean from "../pages/Korean";
import Japanese from "../pages/Japanese";
import Chinese from "../pages/Chinese";

const Router = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(false);
  }, []);

  return (
    <main>
      {pageLoading ? (
        <h1 className="pageloading">PAGE IS LOADING...</h1>
      ) : (
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/translate" component={() => <Translate />} />
          <Route path="/saved" component={() => <Saved />} />
          <Route path="/korean" component={() => <Korean />} />
          <Route path="/japanese" component={() => <Japanese />} />
          <Route path="/chinese" component={() => <Chinese />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
