import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => <span>{name}, ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPeople
});

const mapPlanetMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllPlanets
});

const mapStarshipMethodsToProps = (swapiService) => ({
  getData: swapiService.getAllStarships
});

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};