import React from 'react';
import Card from "../Card/index.js";
import Json from "./data.json";

class CardList extends React.Component {
     constructor(props) {
         super(props)
         this.state = {cardslist: Json.cards}
         console.log(this.state)
     }
     removeCard = (event) => {
         console.log("clicked")
         let name = event.target.getAttribute("name")
         let rerender = this.state.cardslist.filter((card) => { return card.title !== name;  })
         this.setState({cardslist: rerender})
     }
     render() {
         return (
             <div> {
                 this.state.cardslist.map((card, index) => {
                     return <Card clicked={this.removeCard} key={index} name={card.title} content={card.content}/> })
             } </div>
         );

     }
 }

export default CardList;