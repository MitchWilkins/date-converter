import React, { Component } from 'react';
import './App.css';
import DateInput from "./Date/DateInput/DateInput";
import DateResult from "./Date/DateResult/DateResult";


class App extends Component {

    state = {
        results: '',
        text: ''
    };

    getResultTime = () => {
        let newYear = new Date(+this.state.text);
        this.setState({
            results: newYear.toDateString()
        })
    };

    changeTime = (event) => {
        this.setState({
            text: event.target.value
        })
    };

    render() {
    return (
      <div className="container-fluid">
          <div className="row justify-content-center my-5">
              <div className="col-2">
                  <DateInput time={this.changeTime} result={this.getResultTime}/>
                  <DateResult time={this.state.results}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
