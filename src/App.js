import React, { Component } from "react";

class App extends Component {
  state = {
    searchedList: [],
    elements: [],
    inputValue: '',
  };
  searchResults = false;


  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  addElement = () => {
    if (!this.state.inputValue) {
      alert("Please Insert input");
      return
    }
    const elements = [...this.state.elements];
    elements.push(this.state.inputValue);
    this.setState({ elements });
    this.searchResults = false;
  };


  elementList = () => {

    let showList = this.searchResults ? this.state.searchedList : this.state.elements;
    if (showList.length) {
      return showList.map((elem, index) => {
        return (
          <tr key={index} >
            <td> {index + 1} </td>
            <td> {elem} </td>
          </tr>
        )
      })
    }
    else {
      return (
        <tr>
          <td>No data Found</td>
        </tr>)
    }
  }

  search = () => {
    if (!this.state.inputValue) {
      alert("Please Insert input")
      return
    }
    const searchedElement = this.state.elements.filter(value => this.state.inputValue === value)
    this.setState({ searchedList: searchedElement })
    this.searchResults = true;
  };


  render() {
    return (
      <div className="App">

        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />

        <button onClick={this.addElement}> Add </button>
        <button onClick={this.search}> Search </button>

        <table className="" >
          <tbody>
            <tr>
              <th> Sno. </th>
              <th> Element </th>
            </tr>
            {this.elementList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;