import React, { Component, Fragment } from "react";

import "./person-details.css";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {
  state = {
    person: null,
    error: false,
    loading: true
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    // !!!
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
      this.setState({
        loading: true
      })
    }
  }

  onPersonLoaded = () => {
    this.setState({
      loading: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({ person });
      })
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    const { loading, error } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PersonView person={this.state.person}/> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({person}) => {
  const {
    id, name, gender,
    birthYear, eyeColor
  } = person;

  return (
    <Fragment>
      <img className="person-image"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton/>
      </div>
    </Fragment>
  );
};