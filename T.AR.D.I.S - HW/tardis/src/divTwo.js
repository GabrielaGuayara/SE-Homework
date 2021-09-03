import React,{Component} from 'react'
import DivThree from './divThree'



class DivTwo extends Component{
    render(){
        return(
        <div>
            <div>
            <DivThree/>
            </div>
            <div>
            <DivThree/>
            </div>
        </div>
    );
}
}

export default DivTwo