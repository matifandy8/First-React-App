import React from 'react';
import './App.css';

function Helloworld(){
   return (
    <div id="hello">Hello World</div>
  )
}

function App() {
  return (
    <div>This is my component: <Helloworld/> <Helloworld/> <Helloworld/> </div>
  );
}

export default App;
