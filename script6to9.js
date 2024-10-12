//1.
let a = 10;
const output = document.getElementById("output");

output.innerHTML = `
  <p>Result: The value of A is ${a}.</p>
  <p>The value of ++A is ${++a}.</p>
  <p>Now the value of A is ${a}.</p>
  <p>The value of A++ is ${a++}.</p>
  <p>Now the value of A is ${a}.</p>
  <p>The value of --A is ${--a}.</p>
  <p>Now the value of A is ${a}.</p>
  <p>The value of A-- is ${a--}.</p>
  <p>Now the value of A is ${a}.</p>
`;

//2.

var A = 2;
var b = 1;

var result = --A - --b + ++b + b--;

document.getElementById("output-2").innerHTML = `
  <p>Initial values: a = 2, b = 1</p>
  <p>a = ${A}</p>
  <p>b = ${b}</p>
  <p>result = ${result}</p>
  <p>Calculation steps:</p>
  <p>--a = ${A+2}</p>
  <p>--a - --b = ${A+2} - ${b+1}</p>
  <p>--a - --b + ++b = ${A+2} - ${b+1} + ${b+1}</p>
  <p>--a - --b + ++b + b-- = ${result}</p>
`;

//3.

let name = prompt("Please enter your name:");
alert(`Welcome, ${name}!`);

//4.
function displayTable() {
    const number = document.getElementById("number").valueAsNumber || 5;
    const tableDiv = document.getElementById("table");
    tableDiv.innerHTML = "";
  
    for (let i = 1; i <= 10; i++) {
      const row = document.createElement("p");
      row.innerText = `${number} x ${i} = ${number * i}`;
      tableDiv.appendChild(row);
    }
  }
  
  // Display default table for 5
  displayTable();
  
  
