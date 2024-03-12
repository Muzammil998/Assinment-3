
//                         CHAPTER # 09-11                               !
//              USER INPUT & CONDITIONAL STATEMENT                     !

//...........................Question # 01..............................

//Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

// var city = prompt("Enter Your City Name");

// if (city == "karachi"){
//     alert("Wellcome to the city of Lights");
// }

// else {
//     alert("To Ap Kahin or Rehtey Ho")
// }

//                            .........

//............................Question # 02..............................

//Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir.  
//If theuser is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your gender male or female");

// if (gender == "male"){
//     alert("Good Morning Sir");

// } else if (gender == "female"){

//         alert("Good Morning Ma’am");
     
// }else {
//     alert("Invalid gender entered");
// }

//                        ...............                                  !

//........................Question # 03.....................................

//Write a program to take input color of road traffic signal from the user & show the message
//according to this table:


// var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");


// if (color === "red") {
//     alert("Must stop");

// } else if (color === "yellow") {
//     alert("Ready to move");

// } else if (color === "green") {
//     alert("Move now");

// } else {
//     alert("Invalid color entered");
// }


//                                    ..............

//...................Question # 04....................

//Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less 
//than 0.25litres,show the message “Please refill the fuel in your car”

// var fuel = +prompt("How much fuel in your car");

// if (fuel < 0.25){
//     alert("Please refill fuel in your car");

// }else {
//     alert("All ok enjoy");
// }

//                                   ...................

//..................Question # 05.......................

//Run this script, & check whether alert message would be displayed or not. Record the outputs.


// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }


// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

//                                    .............                 

//......................Question # 06............................

//Write a program to take input the marks obtained in three subjects & total marks. Compute & 
//show the resulting percentage on your page. Take percentage & compute grade as per following table:


        // var EngMarks = +prompt("Marks in English?"),
        // SciMarks = +prompt("Marks in Science?"),
        // MathMarks = +prompt("Marks in Math?"),
        // TotalMarks = +prompt("Total Marks"),
        // Percentage=((EngMarks+SciMarks+MathMarks)/TotalMarks)*100,
        // Grade,Remarks;

        // if(Percentage >= 80)
        // {
        //     Grade="A+";
        //     Remarks="Excellent";
        // }
        // else if(Percentage >= 70)
        // {
        //     Grade="A";
        //     Remarks="Good";
        // }
        // else if(Percentage >= 60)
        // {
        //     Grade="B";
        //     Remarks="You need to Improve";
        // }
        // else if(Percentage < 60)
        // {
        //     Grade="Fail";
        //     Remarks="Sorry";
        // }
        // else
        // {
        //     Grade="Invalid";
        //     Remarks="Invalid";
        // }

        // document.write("<h1>Marks Sheet</h1></br></br>Total Marks : "+TotalMarks+"</br>Marks Obtained : "+
        // (EngMarks+SciMarks+MathMarks)+"</br>Percentage : "+Percentage+"%</br>Grade : "+Grade+"</br>Remarks : "+Remarks);


//                                           ........................

//.........................................Question # 07................................

//Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.


// var userInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

// if (userInput >= 0 && userInput < 1200) {
//     alert("Good morning!");

// } else if (userInput >= 1200 && userInput < 1700) {
//     alert("Good afternoon!");

// } else if (userInput >= 1700 && userInput < 2100) {
//     alert("Good evening!");

// } else if (userInput >= 2100 && userInput < 2400) {
//     alert("Good night!");

// } else {
//     alert("Invalid input! Please enter a time between 0000 and 2359.");
// }


//                                         ..................

//.................Question # 08...................................................

//Write a program to check whether the given number is divisible by 3. Show the message to the user if the 
//number is divisible by 3.


// var userInput = prompt("Enter a number:");


// if (userInput % 3 === 0) {
//     alert("The number is divisible by 3.");

// } else {
//     alert("The number is not divisible by 3.");
// }


//                                         ..................

//.......................Question # 09...........................................

//Write a program that checks whether the given input is an even number or an odd number.


// var userInput = prompt("Enter a number:");

// if (userInput % 2 === 0) {
//     alert("The number is even.");

// } else {
//     alert("The number is odd.");
// }

//                                          ................

//.....................Question # 10..............................................

//                     .......(A)........

// Write a program that takes temperature as input and shows a message based on following criteria


// var temperature = prompt("Enter the temperature:");

// if (temperature > 40) {
//     alert("The Weather Today Is Hot");

// } else {
//     alert("It's Normal");
// }

//                                       ..............

//              ........(B.........

//T > 30 then “The Weather today is Normal.”

// var temperature = prompt("Please Enter the temperature");

// if (temperature > 30) {
//     alert("The Weather Today Is Normal");

// } else {
//     alert ("It's Good");
// }


//                                       ................

//             .........(C)........


//T > 20 then “Today’s Weather is cool.”

// var temperature = prompt("Please Enter the temperature");

// if (temperature > 20){
//     alert("The Weather Today Is Cool")

// } else {
//     alert("It's Ok")
// }

//                                        ...............

//              ..........(D).........

//T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = prompt("Please Enter the temperature");

// if (temperature > 10){
//     alert("OMG! Today’s weather is so Cool");

// } else {
//     alert("Rong number! please your number will be grater then Ten")
// }

//                                       ...................

//........................Question # 11...........................................

//Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

// var num1 = prompt("Enter the first number:");

// var num2 = prompt("Enter the second number:");

// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === '+') {
//     result = num1 + num2;

// } else if (operation === '-') {
//     result = num1 - num2;

// } else if (operation === '*') {
//     result = num1 * num2;

// } else if (operation === '/') {
    
//     if (num2 !== 0) {
//         result = num1 / num2;

//     } else {
//         result = "Cannot divide by zero";
//     }
// } else if (operation === '%') {
  
//     if (num2 !== 0) {
//         result = num1 % num2;

//     } else {
//         result = "Cannot find modulus with zero";
//     }
// } else {
//     result = "Invalid operation";
// }

// alert("Result: " + result);


//.......................................Chapter end ! ...............................!


//                                   ...................

//.......................................Chapter 12-13....................................!

//                           IF...ELSE & ELSE IF STATEMENT,
//                             TESTING SET OF CONDITIONS       

//.....................Question # 01................................

//Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var input = prompt("Enter a character:");

// var asciiCode = input.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("The input is a number.");
// } 
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("The input is an uppercase letter.");
// } 
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("The input is a lowercase letter.");
// } 
// else {
//     alert("The input is neither a number nor a letter.");
// }

//                                      ....................

//.....................Question # 02.......................................

//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//  var num1 = +prompt("Enter 1st Value (In Numbers)")
//         var num2 = +prompt("Enter 2nd Value (In Numbers)")

//         if(num1 > num2)
//         {
//             alert(num1+" is Greater than "+num2);
//         }
//         else if(num1 < num2)
//         {
//             alert(num2+" is Greater than "+num1);
//         }
//         else if(num1 === num2)
//         {
//             alert("Entered both Numbers are equal.");
//         }
//         else
//         {
//             alert("Invalid Nubers.")
//         }

//                                        .....................

//........................Question # 03.................................

//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = prompt("Enter a number:");

// if (number > 0) {
//     alert("The number is positive.");

// } else if (number < 0) {
//     alert("The number is negative.");

// } else {
//     alert("The number is zero.");
// }

//                                   .......................

//..................Question # 04.......................................

//Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter a character (single letter):");

// if (char.length === 1) {

//     char = char.toLowerCase();

//     // Check if the character is a vowel (a, e, i, o, u)
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         alert("The character is a vowel.");
//     } else {
//         alert("The character is not a vowel.");
//     }
// } else {
//     alert("Please enter a single character.");
// }

//                                    .......................

//........................Question # 05................................

//Write a program that a. Store correct password in a JS variable.

// var correctPassword = "password123";

// var userPassword = prompt("Enter your password:");

// if (!userPassword) {

//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {

//     alert("Correct! The password you entered matches the original password.");

// } else {
//     alert("Incorrect password.");
// }

//                                   ........................

//......................Question # 06...............................

// var greeting;
// var hour = prompt("Enter the hour (0-23):");

// if (hour >= 0 && hour < 18) {
//     greeting = "Good day";

// } else if (hour >= 18 && hour <= 23) {
//     greeting = "Good evening";

// } else {
//     greeting = "Invalid hour";
// }

// console.log(greeting); 

//                                     ......................

//.........................Question # 07.........................

//Write a program that takes time as input from user in 24hours clock format like: 
//1900 = 7pm. Implement the following case using if, else & else if statements

// var time24 = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

// var hour24 = (time24.substring(0, 2));
// var minutes = time24.substring(2);

// var period;
// var hour12;

// if (hour24 >= 0 && hour24 <= 11) {
//     period = "AM";
//     hour12 = (hour24 === 0) ? 12 : hour24;
// } else if (hour24 === 12) {
//     period = "PM";
//     hour12 = hour24;
// } else {
//     period = "PM";
//     hour12 = (hour24 - 12);
// }
// alert("The time in 12-hour clock format is: " + hour12 + ":" + minutes + " " + period);


//                                        [ THE END ]

