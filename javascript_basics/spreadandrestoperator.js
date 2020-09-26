/* Spread Operator / Rest Operator */ 
// A Spread Operator "spreads" or expands an array into its elements
// A Rest Operator collects multiple elements and condenses into a single array elements

// add the elements of an existing array into a new array
var certstoAdd = ['Algorithms and Datat Structures', 'Front End Libraries'];
var certifications = ['Responsive Web Design', ...certstoAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// pass elements of an array as arguments to a function
function addThreeNumbers(x,y,z,a) {
  console.log(x+y+z)
}

var args = [0,1,2];
addThreeNumbers(...args);

// copy arrays
var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr);
console.log(arr2);

// cocatenate arrays
var arr1 = [0,1,2];
var arr2 = [3,4,5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp_Example", ...arr2];
console.log(arr1);

// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element){
                     return multiplier * element;
                     });
}

var arr = multiply(2,1,2,3);
console.log(arr)