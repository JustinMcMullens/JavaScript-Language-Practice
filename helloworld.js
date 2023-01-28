
//This code does display yellow text
//(THIS CODE WORKS)
console.log('\x1b[33m%s\x1b[0m', 'hi!');

//This code should display yellow text
//(DOES NOT WORK)
//const chalk = require('chalk');
import chalk from '../JavaScript Language Practice/node_modules/chalk/index.js';
console.log(chalk.yellow('hi!'));

//This code should display a progress bar
//(DOES NOT WORK)

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);