// const name = "Raktim";
// const repoCount = 10;

// console.log(name + repoCount + " value");

/**
 * now it is very out dated to use + for concatinating the strings
 * instead used backtics ==> string interpolation
 */

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Raktim");
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2);
console.log(anotherString);

const newStringone = "      Raktim";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','_'));
console.log(url.includes("hitesh"));
