import React, { useState } from 'react';
const fetch = require("node-fetch");
 function Results(props){
     
     return(
        <div className="Main">
      <h1>{<ul>{props.results.map(x => <li>{x}</li>)}</ul>}</h1>
      </div>
    )
     
 }
 export default Results