//Here's some string methods in JavaScript.

let text = "Hello World";

-----------------------------------------------------------
//Lenght returns the lenght of text,which is 11.
console.log(text.length);
----------------------------------------------------------
//CharAt() returns the letter befitting the position, which in this case is H.
console.log(text.charAt(0));
------------------------------------------------------------
//IndexOf returns the position by the letter, which in this case is 1.
console.log(text.indexOf("e"));
-----------------------------------------------------------
  
//LastIndexOf returns the last positions by the letter, which in this case is 7.
console.log(text.lastIndexOf("o"));

----------------------------------------------------------
//To delete any empty spaces before and after the srting, use trim().
//In this case it will return: "Hello World".
let text_2= "  Hello World   ";
console.log(text_2);
----------------------------------------------------------
//To make the string all uppercase, use toUpperCase().
//This will return "HELLO WORLD".
console.log(text.toUpperCase());
----------------------------------------------------------
//To maje the string all lowercase, use toLowerCase().
//This wil return "hello world".
console.log(text.toLowerCase());
