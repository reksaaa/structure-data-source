// console.log(
//   ["Steele", "Colt", "Data Structures", "Algorithms", "Abnormal"].sort()
// );

//console.log([6, 4, 15, 10].sort());

///COMPARATOR
function numberCompare(num1, num2) {
  return num1 - num2;
}

//console.log([6, 4, 15, 10, 7, 8, 12, 11, 6].sort(numberCompare));
// [ 4, 6, 10, 15 ]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

// console.log(
//   ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
// );

let numbers = [1, 2, 3, 4, 5];

// [2,1,3,4,5]

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swapAlternative = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

//swap(numbers, 0, 1);

// console.log(numbers);

let angka = [64, 34, 25, 12, 22, 18, 20];

// [34,25,12,22,18,20,64]

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort(angka);

console.log(angka);
