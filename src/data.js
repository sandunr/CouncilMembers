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
          }, children: [
            {
              name: 'Jay Inslee',
              attributes: {
                'Title': 'Governor'
              }, children: [
                {
                  name: 'Seattle',
                  attributes: {
                    // keyA: 'valA'
                  }, children: [
                    {
                      name: 'City Council',
                      attributes: {
                        // keyA: 'valA'
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
                }
                
              ]
              
            }, 
            {
              name: 'Renton',
              attributes: {
                // keyA: 'valA'
              }, children: [
                {
                  name: 'City Council',
                  attributes: {
                    // keyA: 'valA'
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

  export default myTreeData;