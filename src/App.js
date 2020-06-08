import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {

  state={

    persons:[
      
      {name: 'jacky', age:24},
      {name: 'raj', age:23},
      {name: 'raju', age:22},

    ]


  }

  switchNameHandler=(newName) =>{

    //console.log('working fine hoore');

    //this.state.persons[0].name='rajdeep';

    this.setState({
      
      persons:[

      {name: newName , age:21},
      {name: 'rajdeep', age:22},
      {name: 'raju', age:20},


      ]
    
    });

  };

  nameChangeHangler=(event)=>{

    this.setState({
      
      persons:[

      {name: 'jacky', age:21},
      {name: event.target.value, age:22},
      {name: 'raju', age:20},


      ]
    
    });


  }

  render (){

    const style={

      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursonr:'pointer'


    }
    return(
    <div className="App">

   

      <h1> HI its my firts react code</h1>

      <button style={style} onClick={this.switchNameHandler.bind(this, 'Jacky')}>Switch Name</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
      changed={this.nameChangeHangler}
      >My hobbies : coding </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      
      

    </div>
    )
    
  }
}

export default App;
