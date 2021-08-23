import React, { Component } from 'react';
import AddItems from './AddItems';
import FilterList from './FilterList';
import TodoItems from './TodoItems';

class ListCP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            filtered: [],
            filterItem: null,
            filterStatus: "enter",
        }
        // this.submitHandler = this.submitHandler.bind(this)
    }
    addList = (Items) => {
        let array = this.state.list
        array.push(Items)
        this.setState({ list: array })

    }
    deleteItem = (Item) => {
        let newArr = this.state.list;
        newArr.splice(newArr.indexOf(Item), 1);
        this.setState({ list: newArr });
    }
    addFilterList = (Item) => {
        let filter = this.state.filtered;
        filter.push(Item);
        this.setState({ ...this.state.filtered, Item })
    }
    
    filterStatus = () => {
        if (this.state.filterStatus === "enter") {
            this.setState({ filterStatus: "clear" })
            
        }
        else {

            this.setState({ filterStatus: "enter" })
            this.setState({filtered:[]})
        }
    }
    render() {
        return (
            <div className = "wrapper">
               
                <div className="wrapper2">
                <div className = "component">
                    <h3  className = "banner">Filter tasks(by name)</h3>
                    <FilterList
                        buttonStatus = {this.state.filterStatus}
                        addFilterList={this.addFilterList}
                        filterList={this.state.list}
                        filterStatus = {this.filterStatus}
                    />
                </div>
                <div className = "component">
                    <h2 className = "banner">Todo</h2>
                    {this.state.filterStatus === "enter" ? (this.state.list.map((Items) => (<TodoItems Items={Items}
                        deleteItem={this.deleteItem}
                    />
                    ))) : (this.state.filtered.map((Items) => (<TodoItems Items={Items}
                        deleteItem={this.deleteItem}
                    />
                    )))}
                </div>
                <div className = "component">
                <h2 className = "banner">Add items</h2>
                    {
                    <AddItems
                        addList={this.addList}
                    />
                }
                </div>
                </div>
            </div>
        );
    }
}

export default ListCP;