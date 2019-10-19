const myTreeData = [
    {
      name: 'State',
      _collapsed: true,
      attributes: {
        // "test": 'King County',
        // keyB: 'City of Seattle',
        // keyC: 'Districts',
      },
      children: [
        {
          name: 'King County',
          _collapsed: true,
          attributes: {
          }, children: [
            {
              name: 'Jay Inslee',
              _collapsed: true,
              attributes: {
                'Title': 'Governor'
              }, children: [
                {
                  name: 'Seattle',
                  _collapsed: true,
                  attributes: {
                  }, children: [
                    {
                      name: 'City Council',
                      _collapsed: true,
                      attributes: {
                      }, children: [
                        {
                          name: 'District 1',
                          _collapsed: true,
                          children: [
                            {
                              name: 'Lisa Herbold',
                              _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                          _collapsed: true,
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
                    _collapsed: true,
                    attributes: {},
                    children: [
                        {
                            name: 'Mayor',
                            _collapsed: true,
                            attributes: {},
                            children: [
                                {
                                    name: 'Jenny Durkan',
                                    _collapsed: true,
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
                            name: 'Boards and Comm.',
                            _collapsed: true,
                            children: [
                                {
                                    name: "Seattle Human Rights Comm.",
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'Marta Idowu',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': '206-684-4540',
                                                'Email': 'Marta.Idowu@seattle.gov',
                                                'Website': 'http://www.seattle.gov/humanrights/'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: 'Community Police Comm.',
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'Tracy Whihtlatch',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': '206-233-2664',
                                                'Email': 'TracyM.Whitlatch@seattle.gov',
                                                'Website': 'https://www.seattle.gov/community-police-commission'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: "Green New Deal Oversight Board",
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'TBA',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': 'TBA',
                                                'Email': 'TBA',
                                                'Website': 'TBA'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: "Seattle Bicycle Advisory Board",
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'Serena Lehman',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': '206-256-5371',
                                                'Email': 'Serena.Lehman@seattle.gov',
                                                'Website': 'http://www.seattle.gov/sbab/'
                                            }
                                        }
                                    ]
                                },
                                {
                                    name: "Seattle Immigrant and Refugee Comm.",
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'Maha Jahshan',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': '206-615-0195',
                                                'Email': 'maha.jahshan@seattle.gov',
                                                'Website': 'https://www.seattle.gov/immigrant-and-refugee-commission'
                                            }
                                        }
                                    ]
                                    
                                },
                                {
                                    name: "Seattle LGBTQ Comm.",
                                    _collapsed: true,
                                    children: [
                                        {
                                            name: 'Erika Pablo',
                                            _collapsed: true,
                                            attributes: {
                                                'Title': 'Department Liaison',
                                                'Phone #': '206-684-4509',
                                                'Email': 'erika.pablo@seattle.gov',
                                                'Website': 'http://www.seattle.gov/lgbtq'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Departments',
                    _collapsed: true,
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
              _collapsed: true,
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