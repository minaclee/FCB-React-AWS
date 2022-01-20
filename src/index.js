import React from "react";
import ReactDOM from "react-dom";


//My First Component
function HelloWorld(){
	return <h1>Hello, World!</h1>;
}


ReactDOM.render(<HelloWorld />, document.getElementById("root"))