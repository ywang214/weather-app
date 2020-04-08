import React, { Component, Suspense, lazy, Fragment } from "react";
import LoaderComponent from "../components/loader/LoaderComponent";
import { AddressContextProvider } from "../contexts/AddressContext";
import { WeatherUnitContextProvider } from "../contexts/WeatherUnitContext";
const WeatherContainer = lazy(() => import("./WeatherContainer"));

export class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <WeatherUnitContextProvider>
          <AddressContextProvider>
            <Suspense
              fallback={<LoaderComponent loaderText={"Loading components"} />}
            >
              <WeatherContainer />
            </Suspense>
          </AddressContextProvider>
        </WeatherUnitContextProvider>
      </Fragment>
    );
  }
}

export default HomeContainer;
