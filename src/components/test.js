const months = {
  outflow: {
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dez: 0,
  },
  inflow: {
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dez: 0,
  },
};

var year = new Date().getFullYear();
var pasta = new Object();
pasta['test' + year] = 'wheat';
pasta.width = 0.5;
pasta.shape = 'round';

console.log(pasta);
