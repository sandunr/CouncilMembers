import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];  

// class App extends React.Component {
//   render() {
//     return (
//       {/* <Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
//       <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
//         <Tree data={myTreeData} />
 
//       </div>
//     );
//   }
// }
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Data Visualization</h1>
        <Tree data={myTreeData} style={{width: '500em', height: '200em'}}/>
      </div>
    );
  }

}

export default App;
