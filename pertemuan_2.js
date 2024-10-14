function reversedCopy(input) {
  return input.split("").reverse().join("");
}

let textInput = "Muhammad Reksa Ariansyah";

let outputString = reversedCopy(textInput);

// console.log(outputString);

function reverseString(input) {
  let reversed = "";

  // Loop through the string backwards
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];

    // console.log(input[i]);
  }

  return reversed;
}

// Example usage:
let originalString = "Reksa";
let reversedString = reverseString(originalString);
// console.log(reversedString); // Output: "olleh"

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

function uptosomething(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

function uptosomething2(n) {
  return (n * (n + 1)) / 2;
}

// let t1 = performance.now();
// uptosomething2(100000000000);
// let t2 = performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// printAllPairs(5);

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
logAtLeast5(3);
