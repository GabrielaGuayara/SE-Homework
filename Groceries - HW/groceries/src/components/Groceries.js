import React, { Component } from 'react'


export default class Groceries extends Component {
     state = {
                item: '',
                units: '',
                quantity: '',
                isPurchased: ''
            }
        
        onChange = e => this.setState({ [e.target.id]: e.target.value})
            
        onChecked = e => this.setState({[e.target.id]:e.target.checked })
        

        onReset = () => {
            this.setState({
                item: '',
                units: '',
                quantity: '',
                isPurchased: false,
            });
        }
        
        onSubmit = e =>{
            e.preventDefault();
            this.props.addItem(this.state.item, this.state.units, this.state.quantity, this.state.isPurchased);
            alert('Only products marked as purchased will appear on the list on the left')
            this.onReset();
        
        }
        render() {
        
            return(
            <form className='sub_chart'onSubmit={this.onSubmit} onReset={this.onReset}>
            
            <label className='labels' htmlFor='item'>Item: </label><br/>
                <input 
                id='item'
                className='inp_item'
                onChange={this.onChange}
                value={this.state.item}
                type='text'
                /><br/>
                <br/>

            <label className='labels' htmlFor='units'>Units: </label><br/>
                <input 
                id='units'
                className='inp_item'
                onChange={this.onChange}
                value={this.state.units}
                type='text'
                /><br/>
                <br/>

            <label className='labels' htmlFor='quantity'>Quantity: </label><br/>
                <input 
                id='quantity'
                className='inp_item'
                onChange={this.onChange}
                value={this.state.quantity}
                type='number'
                /><br/>
                <br/>
            
            <label className='labels' htmlFor='isPurchased'>Purchased: </label>
                <input 
                id="isPurchased"
                onChange={this.onChecked}
                value={this.state.isPurchased}
                type='checkbox'
                /><br/>
                <br/>
                <br/>
            <button id='submitbtnt' type="submit">Add Items</button>
            <button id='clearbtn' type="reset">Clear</button>
            </form>);
        }

    }


