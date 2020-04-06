const url =
  "https://3lrq2mle9j.execute-api.us-east-1.amazonaws.com/dev/get_maximum_values";

axios
  .get(url)
  .then(response => {
    let maximumEncodedDay = response.data.maximum_encoded_day;
    let maximumConfirmedCases = response.data.maximum_confirmed_cases;
    let spec = get_updated_spec(
      parseInt(maximumEncodedDay),
      parseInt(maximumConfirmedCases)
    );
    vegaEmbed("#vis", spec);
  })
  .catch(error => console.log(error));

function get_updated_spec(maximumEncodedDay, maximumConfirmedCases) {
  return {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    data: {
      url: "http://therealgraphs.com.s3.amazonaws.com/representative.csv"
    },
    config: {
      view: {
        stroke: ""
      },
      axis: {
        ticks: false,
        domain: false
      }
    },
    vconcat: [
      {
        resolve: {
          scale: {
            color: "independent"
          }
        },
        hconcat: [
          {
            vconcat: [
              {
                width: 485.40000000000003,
                height: 30,
                encoding: {
                  y: {
                    field: "Country",
                    type: "ordinal",
                    axis: {
                      title: "",
                      labelPadding: 15,
                      labelFontSize: 14
                    }
                  },
                  x: {
                    field: "Percentage",
                    type: "quantitative",
                    axis: null
                  },
                  color: {
                    field: "Type",
                    type: "nominal",
                    legend: {
                      direction: "horizontal",
                      orient: "none",
                      title: null,
                      legendX: 150,
                      legendY: -30,
                      labelFontSize: 14
                    },
                    scale: {
                      domain: ["Deaths", "Recovered", "Confirmed"],
                      range: ["#e25859", "#83BD33", "#4e7aa6"]
                    }
                  },
                  tooltip: [
                    {
                      field: "Percentage",
                      type: "quantitative",
                      format: "p"
                    }
                  ]
                },
                selection: {
                  daySelection: {
                    type: "single",
                    bind: {
                      dateSlider: {
                        input: "range",
                        name: " ",
                        min: 1,
                        max: maximumEncodedDay,
                        step: 1
                      }
                    },
                    init: {
                      dateSlider: maximumEncodedDay
                    }
                  }
                },
                mark: {
                  type: "bar",
                  fillOpacity: 0.8
                },
                transform: [
                  {
                    filter: "datum.EncodedDay == daySelection_dateSlider"
                  },
                  {
                    filter: 'datum.Country == "China"'
                  }
                ]
              },
              {
                width: 485.40000000000003,
                height: 300,
                encoding: {
                  y: {
                    field: "Country",
                    type: "ordinal",
                    axis: {
                      title: "",
                      labelPadding: 15,
                      labelFontSize: 14
                    }
                  },
                  x: {
                    field: "Percentage",
                    type: "quantitative",
                    axis: {
                      values: [0.5],
                      labelFontSize: 14,
                      labelPadding: 15,
                      format: "%",
                      title: ""
                    }
                  },
                  color: {
                    field: "Type",
                    type: "nominal",
                    legend: null,
                    scale: {
                      domain: ["Deaths", "Recovered", "Confirmed"],
                      range: ["#e25859", "#83BD33", "#4e7aa6"]
                    }
                  },
                  tooltip: [
                    {
                      field: "Percentage",
                      type: "quantitative",
                      format: "p"
                    }
                  ]
                },
                selection: {
                  daySelection: {
                    type: "single",
                    bind: {
                      dateSlider: {
                        input: "range",
                        name: " ",
                        min: 1,
                        max: maximumEncodedDay,
                        step: 1
                      }
                    },
                    init: {
                      dateSlider: maximumEncodedDay
                    }
                  }
                },
                mark: {
                  type: "bar",
                  fillOpacity: 0.8
                },
                transform: [
                  {
                    filter: "datum.EncodedDay == daySelection_dateSlider"
                  },
                  {
                    filter: 'datum.Country != "China"'
                  }
                ]
              }
            ]
          },
          {
            width: 485.40000000000003,
            height: 330,
            encoding: {
              y: {
                field: "Confirmations",
                type: "quantitative",
                axis: {
                  title: "",
                  labelFontSize: 14,
                  labelPadding: 15,
                },
                scale: {
                  domain: [0, maximumConfirmedCases]
                }
              },
              x: {
                field: "EncodedDay",
                type: "quantitative",
                axis: null,
                scale: {
                  domain: [1, maximumEncodedDay]
                }
              },
              color: {
                field: "Country",
                type: "nominal",
                legend: {
                  symbolStrokeWidth: 10,
                  title: null,
                  labelFontSize: 14
                },
                scale: {
                  domain: [
                    "San Marino",
                    "Italy",
                    "Spain",
                    "Iran",
                    "Iceland",
                    "France",
                    "Switzerland",
                    "Luxembourg",
                    "Netherlands",
                    "Belgium",
                    "United Kingdom",
                    "China",
                    "South Korea",
                    "Denmark",
                    "Sweden"
                  ],
                  range: [
                    "#771155",
                    "#AA4488",
                    "#CC99BB",
                    "#114477",
                    "#4477AA",
                    "#77AADD",
                    "#117777",
                    "#44AAAA",
                    "#77CCCC",
                    "#117744",
                    "#44AA77",
                    "#88CCAA",
                    "#777711",
                    "#AAAA44",
                    "#DDDD77"
                  ]
                }
              },
              tooltip: [
                {
                  field: "Country",
                  type: "nominal"
                }
              ]
            },
            mark: "line",
            transform: [
              {
                filter: "datum.EncodedDay <= daySelection_dateSlider"
              }
            ],
            selection: {
              myGrid: {
                type: "interval",
                bind: "scales"
              }
            }
          }
        ]
      },
      {
        width: 10,
        height: 100,
        transform: [
          {
            filter: "datum.EncodedDay == daySelection_dateSlider"
          }
        ],
        encoding: {
          x: {
            value: 500,
            type: "quantitative"
          },
          y: {
            value: 50,
            type: "quantitative"
          },
          text: {
            field: "Day",
            type: "temporal",
            format: "%d %b"
          }
        },
        mark: {
          type: "text",
          fontSize: 15
        }
      }
    ]
  };
}
