var oddNumbers  = [1, 2, 3, 4, 5, 5, 7];
var evenNumbers = [4, 4, 5, 5, 6, 6, 6, 7];


function sum(list_of_numbers) {

   var total = 0;

   for (var i=0; i < list_of_numbers.length; i++){ total = total + list_of_numbers[i]; };

   return total;

}

console.log("Sum of [" + oddNumbers + "] is " + sum(oddNumbers));
console.log("Sum of [" + evenNumbers + "] is " + sum(evenNumbers));


function mean(list_of_numbers){

return sum(list_of_numbers) / list_of_numbers.length;

}

console.log("Mean of [" + oddNumbers + "] is " + mean(oddNumbers));
console.log("Mean of [" + evenNumbers + "] is " + mean(evenNumbers));
