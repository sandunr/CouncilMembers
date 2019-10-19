import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';
import Data from './data.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Data Visualization</h1>
        <Tree data={Data} style={{width: '500em', height: '200em'}}/>
      </div>
    );
  }

}

export default App;
