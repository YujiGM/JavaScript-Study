//Slice methods are really useful when its necessary to separate, for example, the first and the last name.
let userName = "Gustavo Yuji";

let firstName = userName.slice(0,7);  //A string always begins at 0.
let lastName = userName.slice(7);    //When there's only one number in slice method, it's assume to copy until the end of the srting.

//But in this way it's more difficult to get different names.
//To avoid that problem, it's better to use:
let userName = "Gustavo Yuji";

let firstName = text.slice(0 , text.indexOf(" ") + 1)
let lastName = text.slice(text.indexOf(" ") + 1);
