import React, { Component} from 'react'
import PropTypes from 'prop-types'



class Task extends React.Component {

    StyleCompleted(){
        return({
            fontSize:"20px",
            color: this.props.task.done ? "gray" : "black",
            textDecoration: this.props.task.done ? "line-through" : "none"
        })
    }
    render(){
        const {task}=this.props;
            return (
                <>
                <p style={this.StyleCompleted()}>
                    {task.title} -- 
                    {task.id} -- 
                    {task.description} -- 
                    {task.done}
                    <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                    <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
                </p>
                </>
            )
            
    }                    
}

Task.propTypes={
    task: PropTypes.object.isRequired
}

const btnDelete = {
    background: "#ea2027",
    fontSize: "18px",
    color: '#ffff',
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "50%"
}

export default Task