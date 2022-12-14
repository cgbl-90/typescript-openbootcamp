console.log("Hola TypeScript!");
// Comments are like JS
/**
 * Comment with multiple lines
 *
 */
// VAR/ CONST DECLARATION AND PRIMITIVE TYPES
var nombre = "Carmen";
var apellido = "Lopez";
console.log("Hola, " + nombre + " " + apellido);
console.log("Hola, ".concat(nombre, " ").concat(apellido));
var PI = 3.1416;
// nombre = 3; <-- gives error
// Types are strong in TS. You can't change the type
var x = "Anything";
// Type ANY can be used, but is not recommendable
var error = true;
console.log("\u00BFHay error?: ".concat(error));
// VAriables without initial values
var a, b, c;
// Void, null and undefined are also types
// COMPLEX TYPES
var tasks = ["Math test", "English test"];
var values, _a = [false, "hola", true, 56];
// Enumerations
// Enumerations are used instead of const objects in TS
var myNumbers;
(function (myNumbers) {
    myNumbers[myNumbers["fr"] = 0] = "fr";
    myNumbers[myNumbers["sc"] = 1] = "sc";
    myNumbers[myNumbers["tr"] = 2] = "tr";
})(myNumbers || (myNumbers = {}));
console.log("count: ".concat(myNumbers.fr, ", ").concat(myNumbers.sc, ", ").concat(myNumbers.tr, ", ..."));
// If no value is asigned to enum vars, then it returns their position
var myNumbersTwo;
(function (myNumbersTwo) {
    myNumbersTwo[myNumbersTwo["fr"] = 10] = "fr";
    myNumbersTwo[myNumbersTwo["sc"] = 11] = "sc";
    myNumbersTwo[myNumbersTwo["tr"] = 12] = "tr";
})(myNumbersTwo || (myNumbersTwo = {}));
console.log("count: ".concat(myNumbersTwo.fr, ", ").concat(myNumbersTwo.sc, ", ").concat(myNumbersTwo.tr, ", ..."));
// Result will be 10, 11, 12 because enum accumulates prev values and adds 1
var myStates;
(function (myStates) {
    myStates["Finished"] = "F";
    myStates["Ongoing"] = "o";
    myStates["Not Started"] = "N";
})(myStates || (myStates = {}));
console.log("statuses: ".concat(myStates["Not Started"], ", ").concat(myStates.Finished, ", ").concat(myStates.Ongoing, ", ..."));
// Enum types can't be changed. Using the same types for all enum vars is best practice
var num = 2;
var myMath;
(function (myMath) {
    myMath[myMath["suma"] = num + 10] = "suma";
    myMath[myMath["resta"] = num - 10] = "resta";
    myMath[myMath["multiplica"] = num * 10] = "multiplica";
})(myMath || (myMath = {}));
console.log("math: ".concat(myMath.suma));
console.log("math: ".concat(myMath.resta));
console.log("math: ".concat(myMath.multiplica));
