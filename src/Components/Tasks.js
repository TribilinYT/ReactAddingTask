import React from 'react'
// import tasks from '../sample/tasks.json'
import Task from './Task'

class Tasks extends React.Component{
    // state = {
    //     tasks:tasks
    // }
    
    render() {
        return(
            <div>
                {this.props.tasks.map(task =>
                     <Task 
                        key={task.id}
                        task={task} 
                        deleteTask={this.props.deleteTask.bind(this, task.id)}
                        checkDone={this.props.checkDone}
                />)}
            </div>
        )
    }        
}

export default Tasks