import './App.css';
import React, {Component} from 'react';
import Groceries from './Groceries';
import Listitems from './Listitems'
import Cart from './img/cart.png'

class App extends Component{
  state = {
    grocery: [
      {
        item: 'Rice',
        units: 'pound',
        quantity: '1',
        isPurchased: true
      },
      {
        item: 'Milk',
        units: 'liters',
        quantity: '2',
        isPurchased: false
      },
      {
        item: 'Apple Juice',
        units: 'liters',
        quantity: '3',
        isPurchased: true
      }
    ]
  }
  
  //addItem is a funtion to add objects
  addItem = (item, units, quantity, isPurchased)=> {
    const groceryItem = {
        item: item,
        units: units,
        quantity: quantity,
        isPurchased:isPurchased
        }
  
      return this.setState({
              grocery: [...this.state.grocery, groceryItem]
                  })
                }
  render(){
  return (
    <div className="App">

      <div id='main_container'>
        <div id='tittle'>
          <h1>Grocery</h1><img id ='img1'src={Cart} alt='cart'/>
        </div>

        <div id='inner_container'>

        <div id='d1'>
          {/* Groceries component allow to input new items */}
          <Groceries addItem={this.addItem}/>
        </div>

        <div id='div2'>
          {/* Listproduct component is used to show items */}
          <Listitems groceries={this.state.grocery}/>
        </div>

      </div>
      </div>

    </div>

  )
    
  }
}
export default App;
