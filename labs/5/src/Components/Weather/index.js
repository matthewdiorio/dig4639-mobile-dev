import React from "react";
import { View } from 'react-native';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: []
    }
  }
  componentDidMount() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
     
      this.setState({
        periods: periods
      });
    })
    .catch((error) => {console.log(error)} );
  }
//render
  render() {
    return(
      <div>{
            this.state.periods.map((value, index) => {
                return <View  key={index}>
                    <div>
                        <h1> {value.name}</h1>
                        <h1>{value.temperature}{value.temperatureUnit}</h1>
                        <p>{value.detailedForecast}</p>
                    </div>
                    </View>;
            })
        }</div>
    );
  }

}

export default Weather;