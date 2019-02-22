import React from "react";
import { withRouter } from "react-router-dom";

import Row from "../row";
import { PersonList, PersonDetails } from "../sw-components";

const PeoplePage = ({ history, match }) => {
  const {id} = match.params;
  return (
    <div>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)}/>}
        right={<PersonDetails itemId={id}/>}
      />
    </div>
  );
};

export default withRouter(PeoplePage);
