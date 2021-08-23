import React, { Component } from 'react';

class TodoItems extends Component {
    render() {
        const {Items,deleteItem} = this.props;
        return (
            <div className = "row todoline">
                <p className = "line">{Items}</p>
                <button onClick = {() => deleteItem(Items)} className = "delete">Delete</button>
                {console.log(Items)}
            </div>
        );
    }
}

export default TodoItems;