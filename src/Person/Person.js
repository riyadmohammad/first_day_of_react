import React from 'react';
import './Person.css'




const Person = (props)=>{
//jsx syntex
return(
<div className="Person">

<p>hi i am {props.name} and i am {props.age} years old </p>
<p>{props.children}</p>

<input type="text" onChange={props.changed} value={props.name}/>

</div>
)
};

export default Person;