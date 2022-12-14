console.log("Hola TypeScript!");

// Comments are like JS

/**
 * Comment with multiple lines
 *
 */

// VAR/ CONST DECLARATION AND PRIMITIVE TYPES

var nombre: string = "Carmen";
var apellido: string = "Lopez";

console.log("Hola, " + nombre + " " + apellido);
console.log(`Hola, ${nombre} ${apellido}`);

const PI: number = 3.1416;

// nombre = 3; <-- gives error
// Types are strong in TS. You can't change the type

var x: any = "Anything";

// Type ANY can be used, but is not recommendable

var error: boolean = true;
console.log(`¿Hay error?: ${error}`);

// VAriables without initial values

let a: string, b: boolean, c: number;

// Void, null and undefined are also types

// COMPLEX TYPES

let tasks: string[] = ["Math test", "English test"];

let values: string | number | boolean,
  {} = [false, "hola", true, 56];

// Enumerations
// Enumerations are used instead of const objects in TS

enum myNumbers {
  fr,
  sc,
  tr,
}

console.log(`count: ${myNumbers.fr}, ${myNumbers.sc}, ${myNumbers.tr}, ...`);
// If no value is asigned to enum vars, then it returns their position

enum myNumbersTwo {
  fr = 10,
  sc,
  tr,
}

console.log(
  `count: ${myNumbersTwo.fr}, ${myNumbersTwo.sc}, ${myNumbersTwo.tr}, ...`
);
// Result will be 10, 11, 12 because enum accumulates prev values and adds 1

enum myStates {
  "Finished" = "F",
  "Ongoing" = "O",
  "Not Started" = "N",
}

console.log(
  `statuses: ${myStates["Not Started"]}, ${myStates.Finished}, ${myStates.Ongoing}, ...`
);

// Enum types can't be changed. Using the same types for all enum vars is best practice

let num = 2;

enum myMath {
  "suma" = num + 10,
  "resta" = num - 10,
  "multiplica" = num * 10,
}

console.log(`math: ${myMath.suma}`);
console.log(`math: ${myMath.resta}`);
console.log(`math: ${myMath.multiplica}`);

// Interfaces determine methods and types of vars/const

interface IUser {
  id: number;
  name: string;
  age?: number; // Not mandatory
}

let employee: IUser = {
  id: 1,
  name: "Tom",
};
console.log("id: ", employee.id);
console.log("name: ", employee.name);

// Type
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


/**
Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and 
in many cases you can choose between them freely. 
Almost all features of an interface are available in type, 
the key distinction is that a type cannot be re-opened to add 
new properties vs an interface which is always extendable.
 */
