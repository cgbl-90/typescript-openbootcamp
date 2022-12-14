// LECTURE 1 & 2: INSTALL & BASICS

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

// CONDITIONS
// Syntax same as JS
// If - else if - else OR If - else
// Switch (condition) {cases}
// ForEach, For In, While, Do While, etc. work as JS

/// LECTURE 3: FUNCTIONS

function saludar() {
  let nombre = "Carmen";
  console.log(`Hola ${nombre}`);
}

saludar();
/**
 * Esta funcion saluda al usuario
 * @param nombre Este parámetro es un String
 */

function saludar2(nombre: string) {
  console.log(`Hola ${nombre}`);
}

saludar2("Pedro");
// saludar2(2); gives error because types are strict

// You can add the type of function 'number'
function suma(x: number, y: number): number {
  return x + y;
}

// Anonimous
let mySuma = function (x: number, y: number) {
  return x + y;
};

// Types
let myAdd: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

// MISTAKES

function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let r_1 = buildName("Bob"); // error: not enough arguments
let r_2 = buildName("Bob", "Adams", "Sr."); // error: too many arguments
let r_3 = buildName("Bob", "Adams");
let r_4 = buildName("Bob", undefined);

function buildName2(firstName: string, lastName?: string) {
  // ? makes argument optional
  return firstName + " " + lastName;
}

let r_5 = buildName2("Bob");

function buildName3(firstName: string, lastName = "Smith") {
  // last argument has a default value
  return firstName + " " + lastName;
}

let r_6 = buildName3("Bob"); // Result will be Bob Smith
let r_7 = buildName3("Bob", "Lovecraft"); // Result will be Bob Lovecraft

// REST
function buildNameRest(firstName: string, ...restOfName: string[]) {
  return firstName + " ";
  restOfName.forEach((name) => "Hello ," + name);
}

buildNameRest("Jose", "Pedro", "Natasha", "Maria");

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
