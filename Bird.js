//  Solution for the first problem

// Importing the module
const readline = require("readline-sync");

// Enter the number of test cases
let a = parseInt(readline.question('Enter the number of test cases : '));

// Enter the test cases
for (let i = 0; i < a; ++i) {
work((readline.question('Enter the array with a space between each element : \n ').split(" ").map(x => parseInt(x))));
}

// Contains the main logic

function work(arr) {
    
    let count = 0;
    arr.sort();
    let maxRepeated = arr[0];
    let leastRepeated = arr[0];

    let obj = {};

    let arr2 = [... new Set(arr)];
    arr2.sort();
    

    for (let i = 0;i < arr.length;i++) {

        if( i == 0){
            count ++;
        }

        else if(arr[i] == arr[i-1]) {
            count ++;
        }

        else{
            obj[arr[i-1]] = count;
            count = 1;
        }
    }

    obj[arr[arr.length - 1]] = count;

    arr2.forEach((x) => {
        if(obj[x] > obj[maxRepeated]) {
            maxRepeated = x;
        }
     })

     arr2.forEach((x) => {
        if(obj[x] < obj[leastRepeated]) {
            leastRepeated = x;
        }
     })

    console.log([maxRepeated,leastRepeated])
    
}
