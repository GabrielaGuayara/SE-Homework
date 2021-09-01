
import './App.css';
import SideBar from './Sidebar'
import {Comp1and2, Comp3} from './Comps'
import Visitors from './Visitors'
import Calendar from './img/cal1.png'
import User1 from './img/user1.jpg'
import User2 from './img/user2.jpg'
import User3 from './img/user3.jpg'




function App() {
  return (

    <div className="App">

        <SideBar/>
        
        <div className='comp'>
          <h3>Reviews</h3>
          <Comp1and2 val='1,281'/>
          <img className='users' src={User1} alt='user1'/> <img className='users' src={User2} alt='user2'/> <img className='users' src={User3} alt='user2'/>
        </div>

        <div className='comp'>
        <h3>Average Rating</h3>
        <Comp1and2 val='4.6'/>
        <img src={Calendar} id='cal' alt='calendar'/>
        </div>

        <div className='comp'>
        <h3>Sentimental analytics</h3>
        <Comp3 val='960' val2='122' val3='321'/>
        </div>
        
        <Visitors val='821'/>

    </div>

  );
}

export default App;
