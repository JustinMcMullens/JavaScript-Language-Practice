//Import the chalk and prgress libraries
const chalk = require('chalk');
const ProgressBar = require('progress');

console.log(chalk.blue('\nNative Array ES6 Function Examples'));
console.log(chalk.blue('----------------------------------'));
//Example of the includes()
console.log(chalk.cyan('Example of the includes()'));
//This will determine whether an array includes a certain element, returning true or false.
const includesNumbers = [1, 2, 3, 4, 5];
console.log(`The array being checked includes the values: ${includesNumbers}`)
console.log(`Does the array include the number 2? ${includesNumbers.includes(2)}`); // true
console.log(`Does the array include the number 10? ${includesNumbers.includes(10)}\n`); // false

//Example of the sort()
console.log(chalk.cyan('Example of the sort()'));
//This will create a new array that has sorted the numbers from smallest to greatest in the original array.
const unsortedNumbers = [3, 1, 2, 4];
console.log(`Unsorted numbers: ${unsortedNumbers}`)
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(`Sorted numbers: ${sortedNumbers}\n`);

//Example of the reverse()
console.log(chalk.cyan('Example of the reverse()'));
//This will create a new array that has sorted the numbers from smallest to greatest in the original array.
const forwardNumbers = [1, 2, 3, 4];
console.log(`Original array of numbers: ${forwardNumbers}`)
const reversedNumbers = forwardNumbers.reverse();
console.log(`Reversed array of numbers: ${reversedNumbers}`)

//Example of the map()
console.log(chalk.cyan('Example of the map()'));
//This will create a new array with the results of calling a provided function on every element in the original array.
//In this case, the function will double each value.
const mapNumbers = [10, 15, 22, 36];
console.log(`The array being doubled includes the values: ${mapNumbers}`)
const doubledNumbers = mapNumbers.map(number => number * 2);
console.log(`The doubled array includes the values: ${doubledNumbers}\n`);

//Example of the filter()
console.log(chalk.cyan('Example of the filter()'));
//This will create a new array with all the elements of the original array that pass the test given by the function.
//In this case, the function will check for values divisible by 2 evenly
const filterNumbers = [1, 62, 15, 34, 2, 81];
console.log(`The array being checked for values divisible by 2 include: ${filterNumbers}`)
const evenNumbers = filterNumbers.filter(number => number % 2 === 0);
console.log(`The array that only includes values divisible by 2 include: ${evenNumbers}\n`); 

//Example of the splice()
console.log(chalk.cyan('Example of the splice()'));
//This function can add and revome elements from an array
const spliceNumbers = [1, 2, 64, 65, 66, 7, 8, 9, 10];
console.log(`Original array of numbers: ${spliceNumbers}`)
//splice(what index to start with, # of elements to remove, index to add[1], index to add[2], index to add[3], index to add[4], etc)
const removedNumbers = spliceNumbers.splice(2, 3, 3, 4, 5, 6);
console.log(`Original array about numbers have been spliced in and out: ${spliceNumbers}`);
console.log(`Numbers that were spliced out of the original array: ${removedNumbers}`);


//Example of recursion
console.log(chalk.blue('\nExample of the recursion'));
console.log(chalk.blue('------------------------'));
function factorial(number) {
  if (number === 1) {
    return 1;
  }

  factorials = number * factorial(number - 1);
  console.log(factorials);
  return factorials;
}
factorial(5); 


console.log(chalk.blue('\nChange text color without the Chalk module'));
console.log(chalk.blue('------------------------------------------'));
//This is one way to display colors without using a npm library/module
console.log('\x1b[31m%s', 'This is red text');
console.log('\x1b[32m%s', 'This is green text\n');


console.log(chalk.blue('Example of the Chalk module'));
console.log(chalk.blue('---------------------------'));
//Different colors of text
console.log(chalk.red('This is red text'));
console.log(chalk.red.bold('This is bold red text'));
console.log(chalk.green('This is green text'));
console.log(chalk.green.bold('This is bold green text'));
console.log(chalk.bgGray('This text has a gray background'));
console.log(chalk.bgMagenta('This text has a magenta background\n'));


console.log(chalk.blue('Example of throwing and handling exceptions'));
console.log(chalk.blue('-------------------------------------------'));
//Example of throwing and handling exceptions
for (let i = 0; i < 10; i++) {
  try 
  {
    let number = 5 + i;

    if (number > 10) 
    {
      throw new Error(`Number value of ${number} is greater than 10`);
    }
  } 
  catch (error) 
  {
    console.error(error.message);
  }
}


console.log(chalk.blue('\nExample of the Progress Bar module'));
console.log(chalk.blue('----------------------------------'));
const total = 100;
const bar = new ProgressBar(':bar :current/:total', { total: total });

let i = 0;

const intervalId = setInterval(() => 
{
  if (i === total) 
  {
    clearInterval(intervalId);
    console.log('\nComplete!\n');
  } 
  else 
  {
    // Do some work
    bar.tick();
    i++;
    if(i===25)
    {
      console.log(`\n${i}% Complete\n`);
    }
    if(i===50)
    {
      console.log(`\n${i}% Complete\n`);
    }
    if(i===75)
    {
      console.log(`\n${i}% Complete\n`);
    }
  }
}, 100);
