import './App.css';
import data from "./data/images.json"
//import circle from "./data/circle.png"
import React, { useState } from 'react';

const users = data.users;

function distance(x1,y1,x2,y2){
  return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
}

function closestImage(mouseX,mouseY){
  let closest;
  let closestDist = 1000;
  
  for(let i = 0 ; i < users.length ; i++){
    let currentDistance = distance(users[i].x,users[i].y,mouseX,mouseY) ;
    if(currentDistance < closestDist){
      closest = users[i];
      closestDist = currentDistance;
    }
  }

  return closest;
}

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  let imgWidth;

  window.addEventListener("load", () => {
    let imgDom = document.getElementById('background')
    if(imgDom){
      imgDom.addEventListener("mousemove", function(e){
  
        if(!imgWidth){
          imgWidth = imgDom.clientWidth;
        }
  
        const cursorX = e.layerX;
        const cursorY = e.layerY;

        console.log(e)
  
        setMouseX(Math.round(cursorX / imgWidth * 100))
        setMouseY(Math.round(cursorY / imgWidth * 100))
  
      });
    }
  })


  let closest = closestImage(mouseX,mouseY);

  //<img src={closest.url} className="background" id='background' />

  //<img src={users[users.length-1].url} className="background" id='background' />

  //<img src={circle} className="circle" style={{top:closest.y + "%",left:closest.x + "%"}} />

  //<p>{mouseX+" " + mouseY}</p>
  
  return (
    <div className="App">
      <div className='container' id='container'  >
        <img src={closest.url} className="background" id='background' alt=""/>
        
        
      </div>

      
      
    </div>
  );
}

export default App;
