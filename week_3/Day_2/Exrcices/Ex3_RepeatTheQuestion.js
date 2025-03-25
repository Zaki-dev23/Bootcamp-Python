const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userNumber;

function askForNumber() {
  rl.question('Please enter a number: ', (answer) => {
    userNumber = parseInt(answer);
    
    if (isNaN(userNumber)) {
      console.log('Invalid input. Please enter a number.');
      askForNumber();
    } else if (userNumber >= 10) {
      console.log(`You entered ${userNumber}. It's greater than or equal to 10.`);
      rl.close();
    } else {
      console.log(`You entered ${userNumber}. It's smaller than 10. Please try again.`);
      askForNumber();
    }
  });
}

askForNumber();

// let userNumber;

// while (true) {
//   userNumber = prompt("Please enter a number:");
  
//   console.log(`You entered: ${userNumber}`);
//   console.log(`Data type: ${typeof userNumber}`);
  
//   userNumber = parseInt(userNumber);
  
//   if (isNaN(userNumber)) {
//     console.log("Invalid input. Please enter a number.");
//   } else if (userNumber >= 10) {
//     console.log(`You entered ${userNumber}. It's greater than or equal to 10.`);
//     break;
//   } else {
//     console.log(`You entered ${userNumber}. It's smaller than 10. Please try again.`);
//   }
// }