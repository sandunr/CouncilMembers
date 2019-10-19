import React from 'react';
import Tree from 'react-d3-tree';
import './App.css';

const myTreeData = [
  {
    name: 'State',
    attributes: {
      // "test": 'King County',
      // keyB: 'City of Seattle',
      // keyC: 'Districts',
    },
    children: [
      {
        name: 'King County',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        }, children: [
          {
            name: 'Seattle',
            attributes: {
              keyA: 'valA'
            }, children: [
              {
                name: 'City Council',
                attributes: {
                  keyA: 'valA'
                }, children: [
                  {
                    name: 'District 1',
                    children: [
                      {
                        name: 'Lisa Herbold',
                        attributes: {
                          'Title': 'Council Member',
                          'Phone #': '206-684-8803',
                          'Email': 'lisa.herbold@seattle.gov',
                          'Website': 'https://www.seattle.gov/council/herbold',
                          'Twitter': '@Lisa_Herbold'
                        }
                      }
                    ]
                  },
                  {
                    name: 'District 2'
                  },
                  {
                    name: 'District 3'
                  },
                  {
                    name: 'District 4'
                  },
                  {
                    name: 'District 5'
                  },
                  {
                    name: 'District 6'
                  },
                  {
                    name: 'District 7'
                  },
                  {
                    name: 'District 8'
                  },
                  {
                    name: 'District 9'
                  },
                ]
              }
            ]
          }, 
          {
            name: 'Renton',
            attributes: {
              keyA: 'valA'
            }, children: [
              {
                name: 'Level 4',
                attributes: {
                  keyA: 'valA'
                }
              }
            ]
          }
        ]
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
