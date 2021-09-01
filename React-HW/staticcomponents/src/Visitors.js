import React from 'react'
import photo from './img/chart2.jpg'

function Visitors(props){
    return (
        <div className='visitors'>
            <h3>Website Visitors</h3>
            <p className='vlue'id='pv'>{props.val}</p>
            <img src={photo} id = 'chart' alt='logo'/>
        </div>    );
}

export default Visitors;