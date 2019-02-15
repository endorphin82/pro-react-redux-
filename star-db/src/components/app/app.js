import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import Row from "../row";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();
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
        <div className="stardb-app container">
          <Header/>
          <Row
            left={
              <PersonList>
                {({ name }) => <span>{name}</span>}
              </PersonList>
            }
            right={<PersonDetails itemId={11} />}
          />

          <Row
            left={
              <PlanetList>
                {({ name }) => <span>{name}</span>}
              </PlanetList>
            }
            right={<PlanetDetails itemId={5} />}
          />
          <Row
            left={
              <StarshipList>
                {({ name }) => <span>{name}</span>}
              </StarshipList>
            }
            right={<StarshipDetails itemId={9} />}
          />

        </div>
      </ErrorBoundry>
    );
  }
}
