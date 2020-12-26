var output = [];
var count = 1;
function fizzbuzz (){
  if (count % 3 === 0 && count % 5 === 0 )
  {
    outupt.push("Fizzbuzz")
  }
  else if (count % 3 === 0){
    outupt.push("Fizz")
  }
  else if (count % 5 ===0){
    output.push("buzz")
  }
  else {
  outupt.push(count);
 }
count ++;
console.log(output);
}