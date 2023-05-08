
import './App.css';
import React, {Component} from 'react'; 
import RatesList from '../components/RateCardsList';
import BaseCurrencySelector from '../components/BaseCurrencySelector';

class App extends Component {
  constructor(){
    super()
    this.state={
        rates: {},
        baseCurrency:'USD',
        displayedCurrencies:['USD','AUD','EUR','UAH','CAD','CHF','PLN','GBP','JPY','CNY']
    }
  }

  componentDidMount(){
    const url = 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD';
    const options = {
	      method: 'GET',
	      headers: {
		            'X-RapidAPI-Key': 'fb450507b7mshe0d700e7437dabbp1ca7efjsndfb748fc27f7',
		            'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	            }
        };

    fetch(url, options)
      .then(response => response.json())
      .then(result => this.setState({rates: result['rates']}))
	    .catch(error => console.log(error));
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.baseCurrency !== prevState.baseCurrency ) {
      const url = `https://exchangerate-api.p.rapidapi.com/rapid/latest/${this.state.baseCurrency}`;
      const options = {
	      method: 'GET',
	      headers: {
		            'X-RapidAPI-Key': 'fb450507b7mshe0d700e7437dabbp1ca7efjsndfb748fc27f7',
		            'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	            }
        };

    fetch(url, options)
      .then(response => response.json())
      .then(result => this.setState({rates: result['rates']}))
      .then(console.log(this.state.rates))
	    .catch(error => console.log(error));
    }
  }

  onSelectChange = (selected) => {
        this.setState({ baseCurrency: selected.value })
    }

  render(){
    
    const {rates, displayedCurrencies} = this.state; 
    if (!Object.keys(rates).length){
      return(
        <h1>
          Loading content ...
        </h1>
      );
    } else {
      const displayedRates = displayedCurrencies.map(item => rates[item]);
      return (
        <div className="App">
          <header className="App-header">
            <h1 className='App-header-name'>Live Currency Exchange Rates</h1>
          </header>
          <main className='App-body'>
            <section> 
              <BaseCurrencySelector 
                rates={rates}
                base={this.state.baseCurrency}
                selectChange={this.onSelectChange}
                />
            </section>
            <section>
               <RatesList
                displayedCurrencies={displayedCurrencies} 
                displayedRates={displayedRates}
                baseCurrency={this.state.baseCurrency}
              />
            </section>
          </main>
          <footer className='App-footer'>Designed by Nataliia Kulyk - 2023</footer>
        </div>
    );
    }   
  } 
}

export default App;
