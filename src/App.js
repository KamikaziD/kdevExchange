import React, { Component }from 'react';
import Card from './card.component/card.component';
import { SearchBox } from './search-box/search-box.component';
import './App.css';

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
      dollar: {
        time_last_update_utc: "LOADING",
        time_next_update_utc: "LOADING",
        base_code: "USD",
        conversion_rates: { 
          ZAR: '----'
        }
    },
      searchfield: '1'
    };
  }

  componentDidMount() {
    try {
      fetch('https://v6.exchangerate-api.com/v6/07eecea1d952623a35907a42/latest/EUR')
      .then(response => response.json())
      .then(exchrate => this.setState({ euro: exchrate }));
      
      fetch('https://v6.exchangerate-api.com/v6/07eecea1d952623a35907a42/latest/USD')
      .then(response => response.json())
      .then(exchrate => this.setState({ dollar: exchrate }));
  
    } catch (err) {
      alert('There must be a problem...', err)
    }
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { euro, dollar, searchfield } = this.state;

    return (
      <div className='App'>
        <h1 className='header'>KDev Exchange Rates</h1>
        <h3>CONVERT EURO/US DOLLAR TO ZAR - ENTER AMOUNT TO CONVERT</h3>
        <SearchBox placeholder='1' handleChange={this.handleChange} />
        <div className='body'>
          <Card 
            rate={euro.conversion_rates.ZAR}
            update={euro.time_last_update_utc}
            next={euro.time_next_update_utc}
            excode={euro.base_code}
            exValue={searchfield}
          />
          <div>
          <Card 
            rate={dollar.conversion_rates.ZAR}
            update={dollar.time_last_update_utc}
            next={dollar.time_next_update_utc}
            excode={dollar.base_code}
            exValue={searchfield}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
