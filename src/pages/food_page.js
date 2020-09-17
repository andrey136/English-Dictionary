import React from 'react';

class Food_Page extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            words : [{name: 'Eggs 🥚', show_d: true, id: 0, description: 'the oval object with a hard shell that is produced by female birds, especially chickens, eaten as food'},
                {name: 'Bacon 🥓', show_d: false, id: 1, description: 'meat from the back or sides of a pig, often eaten fried in thin slices'},
                {name: 'Omelette 🍳', show_d: false, id: 2, description: 'a dish made by mixing eggs together and frying them, often with small pieces of other food such as cheese or vegetables'},
                {name: 'Juice 🧃', show_d: false, id: 3, description: 'the liquid that comes from fruit or vegetables'}]
        }
    }

    changeShowD(el){
        let words = [...this.state['words']];
        el.show_d = !el.show_d;
        words[el.id] = el;
        this.setState({
           words :  words
        });
    }

    render() {
        return (
          <div className="Food_Page">

              <div className="flex-wrapper">
                  <button onClick={() => this.props.goBackToTheMainPage()}>B a c k</button>
                  <section>
                      <h2>Food:</h2>
                      <ul>
                          {this.state['words'].map(el => {
                              return(
                                <li className='word'>
                                    <h3 onClick={() => this.changeShowD(el)}>{el.name}</h3>
                                    {el.show_d && <p>{el.description}</p>}
                                </li>
                              );
                          })}
                      </ul>
                  </section>
              </div>
          </div>
        );
    }
}

export default Food_Page;
