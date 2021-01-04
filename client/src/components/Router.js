import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Translate from "../pages/Translate";

const Router = (props) => {
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
          <Route path="/translate" component={(props) => <Translate />} />
        </Switch>
      )}
    </main>
  );
};

export default Router;
