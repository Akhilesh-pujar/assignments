/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

let n = 1000
function calculateTime(n) {

   
  let starttime = new Date().getTime();
  let sum
  for(let i = 0; i <= n; i++){
    sum += i
    console.log("this is sum:" ,i)
  }
  let endtime =new Date().getTime() 

  let totaltime = (endtime - starttime)/1000;
 console.log("totaltime:",totaltime);

   
}
calculateTime(n);