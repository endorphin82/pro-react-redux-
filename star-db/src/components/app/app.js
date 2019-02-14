import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemDetails, { Record } from "../item-details";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import Row from "../row";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

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
    const { getAllPeople, getAllPlanets, getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <div className="stardb-app container">
          <Header/>
          <Row left={personDetails}
               right={starshipDetails}
          />

          {/*{planet}*/}

          {/*<div className="row mb2 button-row">*/}
          {/*<button*/}
          {/*className="toggle-planet btn btn-warning btn-lg"*/}
          {/*onClick={this.toggleRandomPlanet}>*/}
          {/*Toggle Random Planet*/}
          {/*</button>*/}
          {/*<ErrorButton/>*/}
          {/*</div>*/}

          {/*<PeoplePage/>*/}

          {/*<div className="row mb2">*/}
          {/*<div className="col-md-6">*/}
          <ItemList
            getData={getAllPeople}
            onItemSelected={() => {}}
          >

              {({ name }) => <span>{name}</span>}
          </ItemList>
          {/*<br/>*/}
          {/*<ItemList*/}
            {/*getData={getAllPlanets}*/}
            {/*onItemSelected={()=>{}}*/}
          {/*>*/}

              {/*{({ name }) => <span>{name}</span>}*/}
          {/*</ItemList>*/}

          {/*</div>*/}
          {/*<div className="col-md-6">*/}
          {/*<PersonDetails personId={this.state.selectedPerson}/>*/}
          {/*</div>*/}
          {/*</div>*/}

          {/*<div className="row mb2">*/}
          {/*<div className="col-md-6">*/}
          {/*<ItemList*/}
          {/*onItemSelected={this.onPersonSelected}*/}
          {/*getData={this.swapiService.getAllStarships}*/}
          {/*renderItem={({name, model}) => `${name} (${model})`}*/}

          {/*/>*/}
          {/*</div>*/}
          {/*<div className="col-md-6">*/}
          {/*<PersonDetails personId={this.state.selectedPerson}/>*/}
          {/*</div>*/}
          {/*</div>*/}
        </div>
      </ErrorBoundry>
    );
  }
}
