/*
let hour = 6;

if (hour >=6 && hour <12){
    console.log(`Good Morning! It is ${hour}am`);
}
else if (hour >=12 && hour <17){
    console.log(`Good afternoon!  It is ${hour}pm`);
}
else 
   console.log("Good Evening");
  let sum =0;
   for (i=0;i<200;i++){
      if(i%10===0){
        let sum =i++;
        console.log(`The sum of all numbers divisible by 10 from 0 to 200: ${sum}`)
      }
      
   }

      //Fuctory functions

function createCircle (radius){
    return {
        radius,
        draw (){
            console.log("drawing a circle!");
        }
    };
}
let circle = createCircle(3);
console.log(circle);

// Split method
function whatIsMyName (name){
    let yourName= name.split(``);
    console.log(yourName);
}
whatIsMyName("AlibuAjisa");
*/

// filtering

let numbers = [1, -2,2,2, 6]

let filtered =numbers.filter(function(value){
    return value >=0;
})
console.log(filtered);

