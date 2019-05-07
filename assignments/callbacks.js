// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function firstItem(array, callback) {
  callback(array[0]);
}

firstItem(items, (first) =>
 console.log(first) 
) 

 // getLength passes the length of the array into the callback.

function getLength(array, callback) {
  callback(array.length);
}

getLength(items, (length) => 
console.log(length)
 
)

//function last(arr, cb) {
  // last passes the last item of the array into the callback.

  
  function lastItem(array, callback) {
    callback(array[items.length - 1]);
  }
  
 lastItem(items, function (last) {
   
   console.log(last) 
  
 })
 
// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, callback) {
   return callback(x + y);
   
   }

sumNums(7,4, function(addition){
  console.log(addition)
});
  
  

  
  



  // multiplyNums multiplies two numbers and passes the result to the callback.
  function multNums(x, y, callback) {
    return callback(x * y);
    
    }
 
 multNums(7,4, function(multiply){
   console.log(multiply)
 });


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  function contains(item, list, cb) {
    cb(list.includes(item))

}
     contains('Gum', items, function(result) {
     console.log(result)
} )


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
