import React from 'react';
import './index.css';



let currDate = new Date(2021,3,3,10);
let currHour = currDate.getHours();

const currrDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const cssStyle = {

};


var greet = "";

if (currHour >= 1 && currHour < 12) {
   greet = "Morning";
   cssStyle.color='green';
  
  }
else if (currHour >= 12 && currHour < 19) { 
  greet = "Afternoon";
  cssStyle.color='orange';
}
else {
   greet = "Night"; 
   cssStyle.color='black';
  }

function App(){
    return(<div>
        <h1 >Hello Sir , <span style={cssStyle}>Good {greet}</span> </h1>
        <h1  style={cssStyle}>  {currrDate}</h1>
        <h1  style={cssStyle}>{currTime}</h1>
        </div>);
}


export default App;