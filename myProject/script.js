myName = 'Adams Labaran';
myAge = 26;
console.log(`Hello my name is ${myName} and i am ${myAge} years old`);


/**************
 * Data type:
 * primitive data type such as:-
 * string: support character,
 * number for number, boolean for true or false, and undefined for undefine datatype.
 *******************/

const age = 26;
const iAmFine = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z ;

console.log(myName);
console.log(age);
console.log(iAmFine);
console.log(rating);
console.log(x);
console.log(y);
console.log(z);


/*******
 *  concatenating numbers
 ***********/ 
console.log("1 + 1 " + (1 + 1));
console.log(1 + 2 + 4 + 5 + 8 );

/*******************************
 * 
 *         String property and method
 * 
 *******************************/ 
const a = "Adams Labaran";


// to check the length or no of character in  the variable a
console.log(a.length);


// to the character of the variable (a) to uppercase and or lowercase

console.log(a.toUpperCase());

console.log(a.toLowerCase());

/********************************************** 
 * 
        *  substring is used to print a specific character from the console.
            the 6 inside the parenthesis as in console.log(a.substring(6));
            implies that only Labaran will be printed.
            pending on the condition given as indicated.
            example below
            
            
 * **********************************************/

console.log(a.substring(6));


// when i want labaran or only adams to print uppercase or lowercase

console.log(a.substring(6).toLowerCase());  //only labaran lowercase

console.log(a.substring(6).toUpperCase());  //only labaran uppercase

console.log(a.substring(0, 5).toLowerCase());  //only adams lowercase

console.log(a.substring(0, 5).toUpperCase()); //only adams uppercase

/*
        for only adams and or labaran uppercase and lowercase
*/

console.log(a.substring(6, 0).toLowerCase());  //adams lowercase only

console.log(a.substring(6, 0).toUpperCase());  //adams uppercase only

console.log(a.substring(6).toLowerCase());  //labaran lowercase only

console.log(a.substring(6).toUpperCase());  //labaran uppercase only



/***********
 * 
 * by spliting the string into anarray:-  console.log(a.split(""));
 * 
 **********/

console.log(a.split(""));
