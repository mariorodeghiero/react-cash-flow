import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

let year = new Date().getFullYear();

class InflowChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.total
    };
  }

  static defaultProps = {
    options: {
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      title: {
        display: true,
        text: 'Year ' + year,
        fontSize: 13,
        padding: 20
      },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15
        }
      },
      animation: {
        easing: 'easeOutBack'
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              color: '#62e0e466'
            },
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 0.5
          }
        ]
      }
    }
  };

  render() {
    return (
      <div style={{ width: '600px' }}>
        <Bar data={this.props.total} options={this.props.options} />
      </div>
    );
  }
}

export default InflowChart;
