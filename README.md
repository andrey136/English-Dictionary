# English words

'English words' contains only 2 pages now. Main_Page and Food_Page. 

The general idea is to create a cool vocab web app that'll help people learn basic 
english words. 

## App.js

Import:
* react`React from 'react'`,
* styles `'./App.css'`,
* Food_Page `Food_Page from "./food_page"`,
* Main_Page `Main_Page from "./main_page"`

`this.state object` contains the info which page is now active

    this.state = {
            main_page: true,
            food_page: false,
            beverage_page: null
        }
        
`chooseCategory()` is a function that changes the state turning main_page to false value
and the chosen page to true


    chooseCategory(cat){
        const categories = Object.keys(this.state);
        
        // checks whether if such category exists
        
        if(!categories.includes(cat)){
            console.log('Wrong category. Look for error in main_page.js <section className=Categories ...');
            return null;
        }
        
        // If the page is not ready yet, the function will return null

        if(this.state[cat] === null){
            console.log('Category is in production');
            return null;
        }
        
        // Change the state and rerendering the page

        this.setState({
            main_page: false,
            food_page: cat === 'food_page',
            beverage_page: cat === 'beverage_page'
        })
    }
    
goBackToTheMainPage() func returns you to the Main_Page and changes `this.state object`

    goBackToTheMainPage(){
    
            // Changes the state
            
            this.setState({
                main_page: true,
                food_page: false,
                beverage_page: null
            });
        }
        
render() func basically builds the page

    render() {
    
            // returns jsx 
            
            return (
              <div className="App">
                  <div className='wrapper'>
                      <header className="App-header">
                          <h1>English Words</h1>
                      </header>
                      
Depending on the this.state obj a certain page appears
                      
    {this.state['main_page'] && <Main_Page chooseCategory={(cat) => this.chooseCategory(cat)}/>}
    {this.state['food_page'] && <Food_Page goBackToTheMainPage={() => this.goBackToTheMainPage()}/>}
                      
.push element makes sure the footer is on the bottom of the page

                      <div className='push'></div>
                  </div>
                  
Footer gives some info on the project and provides an email users can use if they've got some ideas about it
                  
                  <footer className='footer'>
                      <h3>Info:</h3>
                      <p>This is my new project (2020/09/16)</p>
                      <p>Feel free to send me new ideas about this or any other projects</p>
                      <p>This is my email: <b>mishakolinz1242@gmail.com</b></p>
                  </footer>
              </div>
            );
        }
        
## Main Page

Import:

* react `React from 'react'`
* an img/logo from __"Zach Sang Show"__ `zachSangShowLogo from './logog.png'`
* a png pic of food(breakfast) `food from './food.png'`
* a png pic of beverage(wine) `beverage from './beverage.png'`

render() func builds a page

    return (
              <div className="Main_Page">
Ariana Grande's video:

                  <section className='video'>
                      <h2>Ariana Grande's interview</h2>
                      <a href="https://www.youtube.com/watch?v=PviZLT7HPys">
                          <img src={zachSangShowLogo}/>
                      </a>
                  </section>
Categories:

                  <section className='categories flex-wrapper'>
                      <div className='word-category' onClick={() => this.props.chooseCategory('food_page')}>
                          <h3>Food</h3>
                          <img src={food} alt=""/>
                      </div>
                      <div className='word-category' onClick={() => this.props.chooseCategory('beverage_page')}>
                          <h3>Beverages</h3>
                          <img src={beverage} alt=""/>
                      </div>
                  </section>
                  
              </div>
            );

## Food Page

Import: 
* react `React from 'react'`

`this.state obj` keeps `words` obj(an array of objects). Each object has four keys:
* name: str type -- the word
* show_d: bool type -- shows or hides description of the obj
* id: int type -- unique value
* description: str type -- basically description of the obj


    this.state = {
                words : [{name: 'Eggs 🥚', show_d: true, id: 0, description: 'the oval object with a hard shell that is produced by female birds, especially chickens, eaten as food'},
                    {name: 'Bacon 🥓', show_d: false, id: 1, description: 'meat from the back or sides of a pig, often eaten fried in thin slices'},
                    {name: 'Omelette 🍳', show_d: false, id: 2, description: 'a dish made by mixing eggs together and frying them, often with small pieces of other food such as cheese or vegetables'},
                    {name: 'Juice 🧃', show_d: false, id: 3, description: 'the liquid that comes from fruit or vegetables'}]
            }
            
changeShowD() func changes a value of an show_d key in an obj

    changeShowD(el){
    
            // creating a copy of words obj
            let words = [...this.state['words']];
            
            // changing show_d's value of el for the opposite
            el.show_d = !el.show_d;
            
            // finding el in words obj and replacing it with the modified one
            words[el.id] = el;
            
            // changing the this.state obj and rerender the page
            this.setState({
               words :  words
            });
        }

render() func builds the page

    render() {
            return (
               <div className="Food_Page">
                    <div className="flex-wrapper">
                    
Button executes callback function `goBackToTheMainPage` which in App.js is `this.goBackToTheMainPage()`

    <button onClick={() => this.props.goBackToTheMainPage()}>B a c k</button>
                        
Words unordered list(using map() method to go through all the elements in words obj)
   
    <section>
        <h2>Food:</h2>
        <ul>
            {this.state['words'].map(el => {
                return(
                  <li className='word'>
                 
h3 or word will show its description if a user clicks on it 
                  
      <h3 onClick={() => this.changeShowD(el)}>{el.name}</h3>
                      
if checks if el's or word's show_d is true so it could show its description
                      
      {el.show_d && <p>{el.description}</p>}              
                     
    </li>
    );
    })}
    </ul>
    </section>
    </div>
    );
    }