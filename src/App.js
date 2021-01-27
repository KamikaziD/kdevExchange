import React, { Component }from 'react';
import './App.css';
import Card from './card.component/card.component';
import { SearchBox } from './search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      euro: {
          time_last_update_utc: "LOADING",
          time_next_update_utc: "LOADING",
          base_code: "EUR",
          conversion_rates: { 
            ZAR: '----'
          }
      },
      searchfield: '1'
    };
  }

  

  componentDidMount() {
      fetch('https://v6.exchangerate-api.com/v6/07eecea1d952623a35907a42/latest/EUR')
    .then(response => response.json())
    .then(exchrate => this.setState({ euro: exchrate }));
    
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { euro, searchfield } = this.state;

    return (
      <div className='App'>
        <h1 className='header'>KDev Exchange Rates</h1>
        <h3>CONVERT EURO TO ZAR - ENTER EURO AMOUNT</h3>
        <SearchBox placeholder='1' handleChange={this.handleChange} />
        <div className='body'>
          <Card rate={euro.conversion_rates.ZAR} update={euro.time_last_update_utc} next={euro.time_next_update_utc} excode={euro.base_code} exValue={searchfield}/>
        </div>
      </div>
    );
  }
}

export default App;
