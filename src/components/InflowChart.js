import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class InflowChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.total,
    };
  }

  static defaultProps = {
    options: {
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      title: {
        display: true,
        text: 'Ano 2017',
        fontSize: 13,
        padding: 20,
      },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 15,
        },
      },
      animation: {
        easing: 'easeOutBack',
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              color: '#62e0e466',
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            barPercentage: 0.5,
          },
        ],
      },
    },
  };

  render() {
    return (
      <div style={{ width: '600px' }}>
        <Bar data={this.props.total} options={this.props.options} />
        {/* {Object.keys(this.props.total).map(key =>
          pay.push(this.props.total[key].value)
        )}
        //   options={{ maintainAspectRatio: false }}
        {this.pushData} */}
      </div>
    );
  }
}

export default InflowChart;
