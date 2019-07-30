import React, {Component} from "react";
// import "./App.css";
// import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
// Package to interact with ALpha API
var Alpha = require('alpha_vantage_api_wrapper').Alpha
var alpha = new Alpha('AIzaSyD38Bm-q_7x8vDGceYzZUntAR4QlgukMvQ')

class Stockchart extends Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            id: "basic-line",
            height: 400,
            width: "80%",
            stacked: false,
            zoom: {
              enabled: true,
              type: 'x',  
              autoScaleYaxis: false,  
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                },
                stroke: {
                  color: '#0D47A1',
                  opacity: 0.4,
                  width: 1
                }
              }
          },
            toolbar: {
              autoSelected: 'zoom'
            }
            
          },
          xaxis: {
            type: 'categories',
            labels: {
              show: false,
              trim: true,
              hideOverlappingLabels: true
            },
            tickAmount: 12,
            axisTicks: {
              show: false,
              borderType: 'solid',
              color: '#78909C',
              height: 6,
              offsetX: 0,
              offsetY: 0
          },
            // type: 'datetime',
            // tickAmount: 20,
            categories: []
          }
        },
        series: [
          {
            name: "Price",
            data: []
          }
        ]
      };
    };

    componentWillMount() {
      const self = this;


      alpha.stocks.intraday('MSFT')
      .then((response) => {
          // Do what you want with the data
          console.log(response)

 
          const timeArr = Object.keys(response["Time Series (5min)"]); //This is an array of the dates  
          const newTimeArr = timeArr.reverse();
          console.log(newTimeArr)

          
          const ValzArr = Object.values(response['Time Series (5min)']);//This is an array of the values of each key in time series object
      const priceArr = [];  

          ValzArr.forEach((obj, index) => {
            const closePrice = parseFloat(obj['4. close']);//Declare/Grabs the close price of each object in array
      // console.log(closePrice)
            priceArr.push(closePrice);//Pushes the close price to a new array
      });//closes the foreach function

      const newPriceArr = priceArr.reverse();
      console.log(newPriceArr)        
      

      self.setState(prevState => ({
        options: {
          ...prevState.options,
         ...prevState.options,xaxis: {
           ...prevState.options.xaxis,
            categories: newTimeArr

          }
          // categories: newTimeArr
        },
        series: [{
          ...prevState.series,
          data: newPriceArr
        }
          // data: newPriceArr
        ]
        // data: newPriceArr
      }))

      })//closes the .then promise
      .catch((err) => {
          // Handle the error
          console.log(`Error occurred at: ${err}`);
      })
      
    }


    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="container">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width={this.state.options.chart.width}
                height={this.state.options.chart.height}
              />
            </div>
            </div>
            
          </div>
        </div>
      );
    }
  }

  export default Stockchart;