import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { items: state.items };
}

// Listening to change of state, calling custom method mapStateToProps(state) on that state change,
// mapStateToProps that method provides a `slice` of state that we then want to provide the App with as a prop.
export default App connect(mapStateToProps)(App);
