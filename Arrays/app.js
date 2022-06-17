// #### Exercise 1
let box = [];
// 1. Create an array.
// 2. Add four names to the array.
let names = ["Tom", "Jack", "Sam", "Ben"];
// 3. Print the array one entry at a time.

function AddStudentsToClassRoom(namesArray, boxArray) {

    for (let i = 0; i < namesArray.length; i++) {

        boxArray.push(namesArray[i])

        console.log(namesArray[i])
    }
}
//call our function
AddStudentsToClassRoom(names, box)


// #### Exercise 2
// 1. Create an array with 5 numbers in it.

// 2. Print the numbers one entry at a time.


let stack = [];
// 1. Create an array.
// 2. Add four names to the array.
let numbers = [1, 3, 5, 7];
// 3. Print the array one entry at a time.

function AddNumbersToStack(numbersArray, stackArray) {

    for (let i = 0; i < numbersArray.length; i++) {

        stackArray.push(numbersArray[i])

        console.log(numbersArray[i])
    }
}
//call our function
AddNumbersToStack(numbers, stack)





// #### Exercise 3
// 1. Create an array with 4 names.
let nameOfPeople = ["James", 'Tommy', "Benji", "Billy"]

// 2. Print the third item in the array.
console.log(nameOfPeople[3])

// 3. Delete the second item.
// letting nameFOrRemoval equal the second item
let nameForRemoval = [1];

// Removing the second item
nameOfPeople.splice(nameForRemoval, 1);

// 4. Print the third item in the array again.
console.log(nameOfPeople[2]);


// ### Exercise 4 
// Create the array [5,3,7, 4]. Pass the array to a new function to do the following:
let num = [5, 3, 7, 4];

// Print the array.
console.log(num);

// Print the 3rd element of the numberList.
console.log(num[2]);

// Delete the second element.
let numForRemoval = [1];
num.splice(nameForRemoval, 1);

// Print the 3rd index element.
console.log(num[2]);