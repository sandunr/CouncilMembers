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
                            },
                            
                          ]
                        },
                        {
                          name: 'District 2',
                          children: [
                              {
                                    name: 'Bruce Harell',
                                    attributes: {
                                      'Title': 'Council Member',
                                      'Phone #': '206-684-8804',
                                      'Email': 'bruce-harell@seattle.gov',
                                      'Website': 'https://www.seattle.gov/council/harell',
                                      'Twitter': '@bruceharell'
                                    }
                              }
                          ]
                        },
                        {
                          name: 'District 3',
                          children: [
                            {
                                name: 'Kshama Sawant',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8016',
                                  'Email': 'kshama.sawant@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/sawant',
                                  'Twitter': '@cmkshama'
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 4',
                          children: [
                            {
                                name: 'Abel Pacheco',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8808',
                                  'Email': 'abel.pacheco@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/meet-the-council/abel-pacheco',
                                  'Twitter': '@Abel4Seattle'
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 5',
                          children: [
                            {
                                name: 'Debra Juarez',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8805',
                                  'Email': 'Debora.Juarez@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/juarez',
                                  'Twitter': '@D5Juarez'
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 6',
                          children: [
                            {
                                name: "Mike O'Brien",
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8800',
                                  'Email': 'mike.obrien@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/meet-the-council/#obrien',
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 7',
                          children: [
                            {
                                name: 'Sally Bagshaw',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8801',
                                  'Email': 'sally.bragshaw@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/meet-the-council/bagshaw',
                                  'Twitter': '@sallybagshaw'
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 8',
                          children: [
                            {
                                name: 'Teresa Mosqueda',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8806',
                                  'Email': 'terese.mosqueda@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/mosqueda',
                                  'Twitter': '@Abel4Seattle'
                                }
                              }
                          ]
                        },
                        {
                          name: 'District 9',
                          children: [
                            {
                                name: 'Lorena Gonzalez',
                                attributes: {
                                  'Title': 'Council Member',
                                  'Phone #': '206-684-8802',
                                  'Email': 'lorena.gonzalez@seattle.gov',
                                  'Website': 'https://www.seattle.gov/council/gonzalez',
                                  'Twitter': '@Abel4Seattle'
                                }
                              }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                    name: "Mayor's Office",
                    attributes: {},
                    children: [
                        {
                            name: 'Mayor',
                            attributes: {},
                            children: [
                                {
                                    name: 'Jenny Durkan',
                                    attributes: {
                                        'Title': 'Mayor',
                                        'Phone #': '206-684-4000',
                                        'Email': 'jenny.durkan@seattle.gov',
                                        'Website': 'https://www.seattle.gov/mayor',
                                        'Twitter': '@MayorJenny'
                                    }
                                }
                            ]
                        }, 
                        {
                            name: 'Boards and Commissions',
                            children: [
                                {
                                    name: "Seattle Human Rights Commission"
                                },
                                {
                                    name: 'Community Police Commission'
                                },
                                {
                                    name: "Green New Deal Oversight Board"
                                },
                                {
                                    name: "Seattle Bicycle Advisory Board"
                                },
                                {
                                    name: "Seattle Immigrant and Refugee Commission"
                                },
                                {
                                    name: "Seattle LGBTQ Commission"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Departments',
                    children: [
                        {
                            name: "Budget Office"
                        },
                        {
                            name: "Office of Arts & Culture"
                        },
                        {
                            name: "City Light"
                        },
                        {
                            name: "City Clerk"
                        } ,
                        {
                            name: "Department of Transportation"
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

      ],
    },
  ];  

  export default myTreeData;