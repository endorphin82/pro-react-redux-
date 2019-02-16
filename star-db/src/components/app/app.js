import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import Row from "../row";

import "./app.css";
import SwapiService from "../../services/swapi-service";
// import DummySwapiService from "../../services/dummy-swapi-service";

import ErrorBoundry from "../error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {
  swapiService = new SwapiService();
  // swapiService = new DummySwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log("componentDidCatch()");
    this.setState({ hasError: true });
    console.log("Error", error, info);
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    const {
      getAllPeople, getAllPlanets,
      getPerson, getStarship,
      getPersonImage, getStarshipImage
    } = this.swapiService;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app container">
            <ErrorBoundry>
              <Header/>
            </ErrorBoundry>
            <ErrorBoundry>
              <Row
                left={
                  <PersonList/>
                }
                right={<PersonDetails itemId={11}/>}
              />
            </ErrorBoundry>

            <ErrorBoundry>
              <Row
                left={
                  <PlanetList/>
                }
                right={<PlanetDetails itemId={5}/>}
              />
            </ErrorBoundry>

            <ErrorBoundry>
              <Row
                left={
                  <StarshipList/>
                }
                right={<StarshipDetails itemId={9}/>}
              />
            </ErrorBoundry>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
