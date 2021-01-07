import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Translate from "../pages/Translate";
import Saved from '../pages/Saved'

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
        </Switch>
      )}
    </main>
  );
};

export default Router;
