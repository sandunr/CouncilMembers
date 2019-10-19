import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';
import Data from './data.js';
import * as D3 from 'd3';

class App extends React.Component {
  
  // componentDidMount() {
  //   Tree.expannd
  // }
  
  render(){

    return (
      <div className="App">
        <h1>uGov</h1>
        <Tree data={Data} style={{width: '500em', height: '200em'}} collapsible />
      </div>
    );
  }

}

export default App;
