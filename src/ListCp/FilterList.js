import React, { Component } from 'react';

class FilterList extends Component {
   constructor(props){
       super(props)
       this.state ={
           filterItem:null
       }
       this.submitHandler = this.submitHandler.bind(this)
   }
   submitHandler = (event) => {
    event.preventDefault();

}
submitValue = (value) => {
    this.setState({ filterItem: value.target.value })
    console.log(this.state.filterItem)
}
    render() {
        const {addFilterList,filterList,filterStatus,buttonStatus} = this.props;
        return (
                <div className = "rowItem">
                    <form onSubmit={this.submitHandler}>
                        <input type="text" id="todo" placeholder="Filter by name!" onChange={this.submitValue} className = "textbox"/>
                        <input type="submit" onClick = {()=>{filterList.map((items) => (items.includes(this.state.filterItem)===true ? (addFilterList(items) ) : (console.log("not found!")))) ; filterStatus()}} name = "button" value = {buttonStatus} className = "button"/>
                        
                    </form>
                    
                </div>
        );
    }
}

export default FilterList;