import React, { Component } from 'react';

class AddItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : null 
        }
        this.submitHandler =this.submitHandler.bind(this)
    }
    submitHandler = (event) => {
        event.preventDefault();
        
    }
    submitValue = (value) => {
        this.setState({item: value.target.value})     
    }
    render() {
        const {addList} = this.props;
        return (
            <div className = "rowItem">
                <form onSubmit = {this.submitHandler}>
                <input type="text" id = "todo" placeholder = "New Item Tilte!" onChange = {this.submitValue} className = "textbox"/>
                <input type="submit" onClick = {() => addList(this.state.item)} className = "button"/>
                </form>
            </div>
        );
    }
}

export default AddItems;