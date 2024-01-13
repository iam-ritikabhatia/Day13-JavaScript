/****************Subtracting****************/

// It is used to Divide a String into a Substring using a range 

// syntax

// console.log(string.subsring( from(index number), to(index number) ) )

let aLine = "Hello, My name is Piyush Kumar"
console.log(aLine.substring(0,10))


/**********************indexOf********/

// it is used to find the index number of any character in a string 

// Syntax

// console.log(string.indexOf("character"))

let myName = "Ram Sharma"
console.log(myName.indexOf("R"))
console.log(myName.indexOf("A"))
console.log(myName.indexOf("M"))
console.log(myName.indexOf(" "))
console.log(myName.indexOf("S"))
console.log(myName.indexOf("H"))
console.log(myName.indexOf("A"))
console.log(myName.indexOf("R"))
console.log(myName.indexOf("M"))
console.log(myName.indexOf("A"))
console.log(myName.indexOf("t")) // in this case "t" not present in the string "Ram Sharma", so it will return -1 as the output

// the meaning of -1 is that the character is searched but not found in the given string