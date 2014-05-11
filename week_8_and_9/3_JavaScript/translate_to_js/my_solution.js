// U3.W8-9: Challenge you're converting


// I worked on this challenge [by myself and: Kevin Kang].


// 2. Pseudocode

// def is_fibonacci?(num)
//   fibs = [0,1]
//   while num > fibs.last 
//     fibs << fibs[-1] + fibs[-2]  
//   end
//   return fibs.include?(num)
// end  



// 3. Initial Solution

var includes = function(array, element) {
    for (var i=0; i < array.length; i++) {
        if (array[i]===element){
            return true;
        }
    }
  return false;
};

var is_fibonacci = function(num) {
     var fibs = [0,1];
     while (fibs.slice(-1)[0] < num) {
        fibs.push(fibs.slice(-1)[0] + fibs.slice(-2,-1)[0]);
     }
    return fibs.include(num);
};

// 4. Refactored Solution

Array.prototype.include = function(element) {
    for (var i=0; i < this.length; i++) {
        if (this[i]===element){
            return true;
        }
    }
  return false;
};

var is_fibonacci = function(num) {
     var fibs = [0,1];
     while (fibs.slice(-1)[0] < num) {
        fibs.push(fibs.slice(-1)[0] + fibs.slice(-2,-1)[0]);
     }
    return fibs.include(num);
};



// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

console.log(is_fibonacci(2));


// 5. Reflection 

// We had a challenge with the while loop until we found out the problem is, there is no [-1] in JavaScript so we
//had to use slice.