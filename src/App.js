import React from "react";
import "./App.css"
import List from "./List";
import Inputt from "./Inputt";

class App extends React.Component{

  state = {
    tasks : ["exercise","good diet","jogging"],
    currInp:"",
};

handlecurrInput = (value) => {
  this.setState ({ currInp : value });
}
handleTasks = () => {
  this.setState({
    tasks:[...this.state.tasks , this.state.currInp],
    currInp : "",
});
}
deleteTask = (singleTask) => {
  let currTaskArr=this.state.tasks;

        let filteredArr=currTaskArr.filter((element)=>{
          return element != singleTask;
        });
        this.setState({tasks:filteredArr});
}


render = () => {
  return (
      <div>
          
    <Inputt handlecurrInput = {this.handlecurrInput}  handleTasks = {this.handleTasks} currInp = {this.state.currInp}/>
   <List tasks = {this.state.tasks} deleteTask = {this.deleteTask} />
   </div>
  );
};
};

 export default App;
