//  Solution for the second problem

// Importing the module
const readline = require("readline-sync");

// Enter the number
let a = parseInt(readline.question('Enter the number of test cases : '));

for (let i = 0; i < a; ++i) {
work(readline.question('Enter the time : \n').split(":"));
}


// Contains the main logic

function work(time) {

    let hr = parseInt(time[0]);
    let min = parseInt(time[1]);
    let sec = parseInt(time[2]);
    let meridian = time[2].slice(2);

    carrier = 0;
        sec = sec + 45;
        if(sec >= 60) {
            sec = sec - 60;
            carrier = 1;
        }
        if(String(sec).length === 1) sec = '0' + sec;

        min = min + 45 + carrier;
        if(min >= 60) {
            min = min - 60;
            carrier = 1;
        }
        
        else{
            carrier = 0;
        }
        if(String(min).length === 1) min = '0' + min;
        

        if(hr === 12 && meridian === 'AM') {
            hr = hr - 12 + carrier;
        }
        else if(hr === 12 && meridian === 'PM') {
            hr= hr + carrier;
        }
        else if (hr === 11 && meridian === 'PM' && carrier === 1) {
            hr = hr - 12 + carrier;
        }
        else if (hr < 12 && meridian === 'PM'){
            hr = 12 + hr + carrier ;
        }
        else {
            hr= hr + carrier
        }
        
        if(String(hr).length === 1) hr = '0' + hr;

        time = hr+":"+min+":"+sec;
  

    console.log(time);
}

