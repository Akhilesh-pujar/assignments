/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
  
*/

function isPalindrome(str) {


  s = str.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
  
  //   const g = str.toLowerCase();
  //  let res = g.split("").reverse().join("")
  //  for(let  i = 0; i < g.length; i++ ){
  
  //   if(g[i] === res[i]){
  //     return true
  //    }
  //    else{
  //     return false
  //    }

  //  }
   
   
  // let s= 0;
  // let e = g.length;
  
  //   while(s <= e){
  //     if(s[g] === e[g]){
  //       return true;
  //     }
  //     else{
  //       s++;
  //       e--;
      
  //     }
  //   }

  
 
  // return false;
}

module.exports = isPalindrome;
