import React from "react";
import './App.css';


class Listproducts extends React.Component{
    

    render(){
        return(
        <div className='sub_chart'>
        <h4 className='labels'>Purchased items</h4>    
        <ul>
        { this.props.groceries.map((e, index)=>{
        
        var listgrocery =  <li key={index}>{e.item} - {e.quantity} {e.units} </li>;

        if(e.isPurchased === true)
            return listgrocery;

        else 
            return null;;
    
        }
        )
    }
        </ul>
        </div>
        )
    }
    }


export default Listproducts
