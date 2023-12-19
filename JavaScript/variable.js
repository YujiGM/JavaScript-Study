//First, I'll show you how variables work in JavaScript.

//Variables can be declareted by var , let or const.

//In my opinion, it's better to use 'let' because you don't need to worry if you have already used it's name.
File Name = index.js


let firstName = "John" 

//To show thesse informations on screen, you will need an HTML file.

//Let's imagine that this is our file:
------------------------------------------------
html lang="en"
head
    meta charset="UTF-8"
    title Document /title
/head
body
    p id="p1" /p   
    script src="index.js" /script  ---> //this tag connects JavaScript to HTML.
/body
/html
----------------------------------------------
//To connect the string to the 'p' tag, we need the id.
//Returning to index.js, we have:

let firstName = "John"
  
document.getElementById("p1").innerHTML = "Hello " + firstName





