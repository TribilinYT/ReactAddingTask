import React, { Component} from 'react';

export default class TaskForm extends Component {

    state= {
        title: "",
        description:""
    }

    onSubmit = (event)=>{
        // console.log("Submitting")
        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault();
        // console.log(this.state)
        
    }

    onChange = (event)=>{
        // console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value,
        })
    }
    
    render(){
        
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Wite a Task"
                    onChange={this.onChange}
                    value={this.state.title}/> <br/>

                <textarea
                    name="description"
                    placeholder="Write a Description"
                    onChange={this.onChange}
                    value={this.state.description}> </textarea> <br/>

                <input type="submit" value="Send"/>

            </form>
        )
    }
}