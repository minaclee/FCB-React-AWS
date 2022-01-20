import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



function Task(props){
  return (
    <li className="tasks-item ">{props.taskName}</li>

  );
}

function TaskList(){
  return (
  <ul>
  <Task taskName="Follow Edukasyon.ph on Facebook."/>
  <Task taskName="Follow AWS Siklab Pilipinas on Facebook."/>
  <Task taskName="Follow Zuitt Coding Bootcamp on Facebook."/>

</ul>
  );
}

//My First Component
function App() {

  const paraStyle = {
    "marginBottom": "15px"
  }
  return (
    <div className ="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p style={paraStyle}>The most simple and amazing todo-list React app.</p>
        <TaskList />
      </header>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));