import React from "react";
import Weather from "../Weather";
import "./index.css"

class CardList extends React.Component {

  render() {
    return(
    <div class="Card">
        <Weather/>
    </div>

    );
  }

}

export default CardList;