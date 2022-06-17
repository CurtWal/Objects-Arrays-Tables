// #### Exercise 1
// Create a constructor of Dog. Make sure it has the attributes name, breed, color, gender. There are no methods in this class. The main function below should work with the class you create.

// ```javascript

// make a pet array
let petArray = [];

//create a dog constructor function
function Dog(nameOfDog,breedOfDog,colorOfDog,genderOfDog){
    this.name = nameOfDog;
    this.breed = breedOfDog;
    this.color = colorOfDog;
    this.gender = genderOfDog;
}

function main(){
	var newDog = new Dog("Fiddo", "Lab", "brown", "male");
	alert(newDog.name); 
	alert(newDog.breed);
	alert(newDog.color);
	alert(newDog.gender);
}

main();


// #### Exercise 2
// Create a ToDo constructor. Create the attributes: name, dueDate, list (this should be an array). There should not be a method in this class. The main function below should work with the class you create.

// ```javascript
let list = [];
function ToDo(nameOfPerson,dateDue,taskList){
    this.name = nameOfPerson;
    this.dueDate = dateDue;
    this.list = taskList;
}

function main(){
	newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"])
	print(newToDoList.list)
}

main();