import React from 'react'
import './App.css';

// const HelloWorld= (props)=>{
//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       <div>{props.myText}</div>
//     </div>
//   )
// }




// class HelloWorld extends React.Component {

//   state = {
//     show: true
//   }

//   toggleShow=()=>{
//     this.setState({show: !this.state.show})
//   }

//   render() {

//     if (this.state.show){
//       return(
//         <div id="hello">
//         <h3>{this.props.subtitle}</h3>
//         {this.props.myText}
//         <button onClick={this.toggleShow}>Toggle Show</button>
//       </div>
//       )
//     }else{
//       return (
//         <div>
//           <h1>There are not elements</h1>
//           <button onClick={this.toggleShow}>Toggle Show</button>
//         </div>
//       )
//     }
    
//   }
// }



import tasks from './sample/tasks.json'
import Tasks from './Components/Tasks'
import TaskForm from  './Components/TaskForm'
import Posts from './Components/Posts'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

class App extends React.Component {

  state = {
    tasks:tasks
  }

  addTask=(title, description)=>{
    console.log(title,description)
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
   
    

    this.setState({
      tasks: [...this.state.tasks, newTask ]
    })

  }
 
  deleteTask =(id)=>{
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTask
    })
    console.log(newTask)
  }

  checkDone=(id)=>{
   const newTasks= this.state.tasks.map(task => {
      if (task.id === id ){
        task.done= !task.done
      }
      return task
    })
    this.setState({tasks:newTasks})
  }

  render(){
    return(
      <Router>
        <Link to="/">Home</Link> <br/>
        <Link to="/post">Post</Link>
        <Route exact path="/" render= {()=>{
          return( 
            <div>
          <TaskForm addTask={this.addTask}/>
            <Tasks 
            tasks = {this.state.tasks}
            deleteTask={this.deleteTask}
            checkDone={this.checkDone}/>
          </div>
          )}}>
        </Route>
        <Route path="/post" component={Posts} />
      </Router>
    )
  }
  
}

export default App;
