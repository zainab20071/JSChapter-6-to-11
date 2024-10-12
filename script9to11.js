//1.

function welcomeUser() {
    const cityName = document.getElementById("city-name").value.trim().toLowerCase();
  
    if (cityName === "karachi") {
      document.getElementById("welcome-message").innerHTML = "Welcome to the City of Lights!";
    } else {
      document.getElementById("welcome-message").innerHTML = `Welcome to ${cityName}`;
    }
  }

  //2.


  function greetUser() {
    const gender = document.getElementById("gender").value.trim().toLowerCase();
  
    if (gender === "male") {
      document.getElementById("greeting-message").innerHTML = "Good morning, Sir!";
    } else if (gender === "female") {
      document.getElementById("greeting-message").innerHTML = "Good morning, Ma'am!";
    } else {
      document.getElementById("greeting-message").innerHTML = "Invalid input. Please enter 'male' or 'female'.";
    }
  }
  
//3.

function trafficSignal() {
    const signalColor = document.getElementById("signal-color").value.trim().toLowerCase();
  
    switch (signalColor) {
      case "red":
        document.getElementById("signal-message").innerHTML = "MUST STOP!";
        document.getElementById("signal-message").style.color = "red";
        break;
      case "yellow":
        document.getElementById("signal-message").innerHTML = "Ready to move!";
        document.getElementById("signal-message").style.color = "yellow";
        break;
      case "green":
        document.getElementById("signal-message").innerHTML = "Move now!";
        document.getElementById("signal-message").style.color = "green";
        break;
      default:
        document.getElementById("signal-message").innerHTML = "Invalid input. Please enter 'red', 'yellow', or 'green'.";
        document.getElementById("signal-message").style.color = "black";
    }
}

//4.
function checkFuel() {
    const fuelLevel = parseFloat(document.getElementById("fuel-input").value);
  
    if (isNaN(fuelLevel)) {
      document.getElementById("fuel-message").innerHTML = "Invalid input. Please enter a number.";
    } else if (fuelLevel < 0) {
      document.getElementById("fuel-message").innerHTML = "Fuel level cannot be negative.";
    } else if (fuelLevel < 0.25) {
      document.getElementById("fuel-message").innerHTML = "Please refill the fuel in your car.";
    } else {
      document.getElementById("fuel-message").innerHTML = `Fuel level: ${fuelLevel} litres. You're good to go!`;
    }
  }
  
  
//5.

// a
var A = prompt("Enter value for a:");
if (++A === 5) { 
  alert("Given condition for variable a is true"); 
} else {
  alert("Given condition for variable a is false"); 
}

// b
var b = prompt("Enter value for b:");
if (++b === 83) { 
  alert("Given condition for variable b is true"); 
} else {
  alert("Given condition for variable b is false"); 
}

// c
var c = prompt("Enter value for c:");
if (c++ === 13) { 
  alert("Condition 1 is true"); 
} else {
  alert("Condition 1 is false"); 
}
if (c === 13) { 
  alert("Condition 4 is true"); 
} else {
  alert("Condition 4 is false"); 
}

// d
var materialCost = prompt("Enter material cost:");
var laborCost = prompt("Enter labor cost:");
var totalCost = parseInt(materialCost) + parseInt(laborCost);
if (totalCost === parseInt(laborCost) + parseInt(materialCost)) { 
  alert("The cost equals"); 
} else {
  alert("The cost does not equal"); 
}

// e
var boolValue = prompt("Enter true or false:");
if (boolValue.toLowerCase() === "true") { 
  alert("True"); 
} else if (boolValue.toLowerCase() === "false") {
  alert("False"); 
} else {
  alert("Invalid input"); 
}

// f
var str1 = prompt("Enter first string:");
var str2 = prompt("Enter second string:");
if (str1 < str2) { 
  alert(str1 + " is smaller than " + str2); 
} else if (str1 > str2) {
  alert(str1 + " is larger than " + str2); 
} else {
  alert(str1 + " and " + str2 + " are equal"); 
}

//6.

function calculatePercentage() {
    const sub1 = parseInt(document.getElementById("sub1").value);
    const sub2 = parseInt(document.getElementById("sub2").value);
    const sub3 = parseInt(document.getElementById("sub3").value);
    
    const totalMarks = 300;
    const marksObtained = sub1 + sub2 + sub3;
    const percentage = (marksObtained / totalMarks) * 100;
    
    let grade, remarks;
    
    if (percentage >= 80) {
      grade = 'A+';
      remarks = 'Excellent';
    } else if (percentage >= 70) {
      grade = 'A';
      remarks = 'Good';
    } else if (percentage >= 60) {
      grade = 'B';
      remarks = 'You need to improve';
    } else {
      grade = 'Fail';
      remarks = 'Sorry';
    }
    
    const markSheet = `
      <h2>Mark Sheet</h2>
      <p>Total Marks: ${totalMarks}</p>
      <p>Marks Obtained: ${marksObtained}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
      <p>Grade: ${grade}</p>
      <p>Remarks: ${remarks}</p>
    `;
    
    document.getElementById("mark-sheet").innerHTML = markSheet;
}

//7.

const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);

  if (userGuess === secretNumber) {
    document.getElementById("result").innerHTML = "Bingo! Correct answer!";
  } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    document.getElementById("result").innerHTML = "Close enough to the correct answer!";
  } else {
    document.getElementById("result").innerHTML = "Try again!";
  }
}

//8.

const num1 = parseInt(prompt("Enter a number:"));

const num = prompt("Enter a number:");
 
if (num % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}

if (isNaN(num)) {
    alert("Invalid input. Please enter a number.");
    } else if (num % 3 === 0) {
    alert("The number is divisible by 3.");
    } else {
    alert("The number is not divisible by 3.");
    }

    //9.

    const num3 = parseInt(prompt("Enter a number:"));

if (isNaN(num3)) {
  alert("Invalid input. Please enter a number.");
} else if (num3 % 2 === 0) {
  alert(`${num3} is an even number.`);
} else {
  alert(`${num3} is an odd number.`);
}

//10.

const temp = parseInt(prompt("Enter temperature (°C):"));

if (isNaN(temp)) {
  alert("Invalid input. Please enter a number.");
} else if (temp >= 40) {
  alert("It's too hot outside!");
} else if (temp >= 30) {
  alert("The weather today is normal.");
} else if (temp >= 20) {
  alert("Today's weather is cool.");
} else if (temp >= 10) {
  alert("Today's weather is nice and chilly.");
} else {
  alert("OMG, today's weather is SO COOL!");
}

//11.
const num10 = parseFloat(prompt("Enter first number:"));
const operation = prompt("Enter operation (+, -, *, /, %):");
const num20 = parseFloat(prompt("Enter second number:"));

if (isNaN(num10) || isNaN(num20)) {
  alert("Invalid input. Please enter numbers.");
} else {
  let result;

  if (operation === "+") {
    result = num10 + num20;
    alert(`Result: ${num10} + ${num20} = ${result}`);
  } else if (operation === "-") {
    result = num10 - num20;
    alert(`Result: ${num10} - ${num20} = ${result}`);
  } else if (operation === "*") {
    result = num10 * num20;
    alert(`Result: ${num10} * ${num20} = ${result}`);
  } else if (operation === "/") {
    if (num20 !== 0) {
      result = num10 / num20;
      alert(`Result: ${num10} / ${num20} = ${result}`);
    } else {
      alert("Error: Division by zero.");
    }
  } else if (operation === "%") {
    result = num10 % num20;
    alert(`Result: ${num10} % ${num20} = ${result}`);
  } else {
    alert("Invalid operation. Please enter +, -, *, /, or %.");
  }
}



    