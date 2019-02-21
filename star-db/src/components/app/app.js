import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { StarshipDetails } from "../sw-components";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import ErrorBoundry from "../error-boundry";

import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    hasError: false
  };

  onToggleService = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;
      console.log("Toggle", Service.name);
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app container">
              <Header onToggleService={this.onToggleService}/>
              <RandomPlanet/>

              <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>}/>
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route exact path="/starships" component={StarshipsPage} />
              <Route path="/starships/:id" render={({match}) => {
                console.log(match);
                return <StarshipDetails itemId={match.params.id} />;
              }} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
