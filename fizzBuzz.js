// Write your solution below this line:
//To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly 
//divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. 
//If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.



for(let i=1; i<51; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    } else if(i%3 === 0){
      console.log("Fizz")
    } else if(i%5 === 0){
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }

