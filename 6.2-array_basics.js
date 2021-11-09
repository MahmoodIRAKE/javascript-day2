const people = ["Greg", "Mary", "Devon", "James"];

//1. Using a loop, iterate through this array and console.log all of the people.
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);

}
//2. Write the command to remove "Greg"from the array.
people.shift("Greg");
console.log(people);
//3. Write the command to remove "James"from the array.
people.pop();
console.log(people);
//4. Write the command to add "Matt"to the front of the array.
people.unshift("Matt");
console.log(people);
//5. Write the command to add your name to the end of the array.
people.push("mahmood");
console.log(people);
//6. Using a loop, iterate through this array and after console.log - ing "Mary" exit from the loop.
for (let index = 0; index < people.length; index++) {

    console.log(people[index]);
    if (people[index] === 'Marry') {
        break;
    }

}

//7. Write the command to make a copy of the array using slice.The copy should NOT include "Mary"or "Matt".
let copy = people.slice(2);
console.log(copy);

//8. Write the command that gives the indexOf where "Mary"is located.
console.log(people.indexOf("Marry"));
//9. Write the command that gives the indexOf where "Foo"is located(this should return -1).
console.log(people.indexOf("Foo"));


//10. Redefine the people variable with the value you started with.Using the splice command, remove "Devon"from the array and add "Elizabeth"const people = ["Greg", "Mary", "Devon", "James"];
//and "Artie".Your array should look like this when you are done["Greg",
//    "Mary", "Elizabeth", "Artie", "James"].

let res = people.splice(2, 2, "Elizabeth", "Artie");
console.log(res);



//11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = people.concat(["bob"]);
console.log(withBob);
console.log(people);