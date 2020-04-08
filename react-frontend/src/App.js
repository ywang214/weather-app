import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LoaderComponent from "./components/loader/LoaderComponent";
const HomeContainer = lazy(() => import("./containers/HomeContainer"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoaderComponent loaderText="Loading components" />}>
        <Switch>
          <Route path="/" exact component={HomeContainer}></Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
