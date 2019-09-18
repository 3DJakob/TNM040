import React from 'react';
import countries from 'world-countries'
import './App.css';

countries.sort((a, b) => b.area - a.area)
const onlyCountries = countries.filter(country => country.name.common !== 'Antarctica')
const countryList = onlyCountries.slice(0,15)

const countryListFirstFive = onlyCountries.slice(0,5)
const countryListLastTen = onlyCountries.slice(5,15)

const CountryInfo = props => {

  const onePrecent = countryList[0].area/100
  const calculatedWidth = (props.data.area / onePrecent) + '%'
  console.log(calculatedWidth)

  const moreDetails = (bool) => {
    if (bool) {
      return (
        <p>
          Capital: {props.data.capital}
        </p>
      )
      return
    }
  }

  return (
    <div className="country">
      <div className="row">
        <h1 className="flag">{props.data.flag}</h1>

      <div className="column">
        <div className="row">
          <h1>{props.data.name.common}</h1>
          <h1>{props.data.area}km<sup>2</sup></h1>
        </div>
        <div className="bar" style={{width: calculatedWidth}}></div>
        {moreDetails(props.detailed)}
        </div>
      </div>

    </div>
  )
}

function App() {
  return (
    <div>
      {countryListFirstFive.map(element => <CountryInfo key={element.cca3} detailed={true} data={element}></CountryInfo>)}
      {countryListLastTen.map(element => <CountryInfo key={element.cca3} detailed={false} data={element}></CountryInfo>)}
    </div>
  );
}

export default App;
