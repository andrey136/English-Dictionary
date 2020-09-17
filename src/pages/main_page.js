import React from 'react';
import zachSangShowLogo from '../pics/logo.png';
import food from '../pics/food.png';
import beverage from '../pics/beverage.png'

class Main_Page extends React.Component {

    render() {
        return (
          <div className="Main_Page">
              <section className='video'>
                  <h2>Ariana Grande's interview</h2>
                  <a href="https://www.youtube.com/watch?v=PviZLT7HPys">
                      <img src={zachSangShowLogo}/>
                  </a>
              </section>

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
    }
}

export default Main_Page;
