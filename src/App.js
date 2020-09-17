import React from 'react';
import './App.css';
import Food_Page from "./pages/food_page";
import Main_Page from "./pages/main_page";

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            main_page: true,
            food_page: false,
            beverage_page: null
        }
    }

    chooseCategory(cat){
        const categories = Object.keys(this.state);
        if(!categories.includes(cat)){
            console.log('Wrong category. Look for error in main_page.js <section className=Categories ...');
            return null;
        }

        if(this.state[cat] === null){
            console.log('Category is in production');
            return null;
        }

        this.setState({
            main_page: false,
            food_page: cat === 'food_page',
            beverage_page: cat === 'beverage_page'
        })
    }

    goBackToTheMainPage(){
        console.log('(!!! BACK BUTTON !!!) \nApp.js \nthis.goBackToTheMainPage()');
        this.setState({
            main_page: true,
            food_page: false,
            beverage_page: null
        });
    }

    render() {
        return (
          <div className="App">
              <div className='wrapper'>
                  <header className="App-header">
                      <h1>English Words</h1>
                  </header>
                  {this.state['main_page'] && <Main_Page chooseCategory={(cat) => this.chooseCategory(cat)}/>}
                  {this.state['food_page'] && <Food_Page goBackToTheMainPage={() => this.goBackToTheMainPage()}/>}
                  <div className='push'></div>
              </div>
              <footer className='footer'>
                  <h3>Info:</h3>
                  <p>This is my new project (2020/09/16)</p>
                  <p>Feel free to send me new ideas about this or any other projects</p>
                  <p>This is my email: <b>mishakolinz1242@gmail.com</b></p>
              </footer>
          </div>
        );
    }
}

export default App;
