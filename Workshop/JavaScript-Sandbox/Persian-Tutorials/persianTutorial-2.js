///// More about strings /////

let result1;
let result2;
let result3;
let result4;
let result5;
let result6;
let result7;
let result8;
let result9;
let result10;
let result11;
let result12;
let str1 = "Hello my name is Hoodad";
let str2 = "Hello,my,name,is,Hoodad";
let firstName = "John";
let lastName = "Doe";

result1 = "It's a great course";
result2 = 'It\'s a great course';
result3 = `Hello, my first name is ${firstName} and my last name is ${lastName}.`;

result4 = firstName.toLowerCase(); // "john"
result5 = lastName.toUpperCase(); // "DOE"
result6 = firstName.charAt(0); // "J" - first character
result7 = firstName.length; // 4 - length of the string
result8 = firstName.indexOf("o"); // 1 - index of the first occurrence of the character "o"
result9 = str1.split(" "); // ["Hello", "my", "name", "is", "Hoodad"] - split the string by spaces
result10 = str2.split(","); // ["Hello", "my", "name", "is", "Hoodad"] - split the string by commas
result11 = firstName.replace("John", "Jane"); // "Jane" - replace the first occurrence of the string "John" with "Jane"
result12 = str1.includes("Ali"); // false - check if the string includes the substring "Ali"

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);
console.log(result11 + " " + lastName);
console.log(result12);