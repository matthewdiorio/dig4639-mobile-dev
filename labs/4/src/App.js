import React from 'react';
import './App.css';
import Card from './components/Card';


class App extends React.Component{
   render(){
   return(
    <div className = "card"> 
   <Card content="This is a card!"/>
   </div>
   )
  }
 }
 

export default App;