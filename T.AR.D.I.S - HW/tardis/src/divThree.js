import React,{Component} from "react"

export default class DivThree extends Component {
    
    state ={
        tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
    }
    }
    changeIt = (name) => {
        if (this.state.tardis.caps) {
        this.setState({
            tardis: {
            name: name.toLowerCase(),
            caps: false
            }
        })
        } else {
        this.setState({
            tardis: {
            name: name.toUpperCase(),
            caps: true
            }
        })
        }
    };
    render(){
    return (
        <div>
            <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name} </h3>
            
        </div>
        
        
    );
    }
}
