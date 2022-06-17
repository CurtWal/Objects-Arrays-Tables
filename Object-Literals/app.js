// * Create a list of People using *Object Literal* notation. 
// * Each 'person' object in the 'people' collection should have the following information:
// First Name
// Last Name
// Age
// Zip Code

// 1. Add the following 4 People to your list:
// ```
// Jimmy Page, 62, 00821
let person = {
firstName: "Jimmy",
lastName: "Page",
age: 62,
zipCode: '00821',
}
function name1(){
    console.log("Name: " + person.firstName + person.lastName)
    console.log("Age: " + person.age);
    console.log("Zip Code: " + person.zipCode);
}
name1()
// Rick Nielsen, 57, 61016
let person2 = {
    firstName: "Rick",
    lastName: "Nielsen",
    age: 57,
    zipCode: '61016',
    }
    function name2(){
        console.log("Name: " + person2.firstName + person2.lastName)
        console.log("Age: " + person2.age);
        console.log("Zip Code: " +person2.zipCode);
    }
    name2()
// Joe Walsh, 58, 90001
let person3 = {
    firstName: "Joe",
    lastName: "Walsh",
    age: 58,
    zipCode: '90001',
    }
    function name3(){
        console.log("Name: " + person3.firstName + person3.lastName)
        console.log("Age: " + person3.age);
        console.log("Zip Code: " + person3.zipCode);
    }
    name3()
// Lemmy Kilmister, 57, 21120
let person4 = {
    firstName: "Lemmy",
    lastName: "Kilmister",
    age: 57,
    zipCode: '21120',
    }
    function name4(){
        console.log("Name: " + person4.firstName + person4.lastName)
        console.log("Age: "+ person4.age);
        console.log("Zip Code: " + person4.zipCode);
    }
    name4()
// ```
// 2. Use javascript to create and populate an array of People objects
// 3. Print each person in the console using a template literal
// Example Output:
// ```
// Name: Jimmy Page
// Age: 62
// Zip Code: 00821

