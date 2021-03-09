// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')
// isRaining = false

// // let number = prompt('Enter number', 'number goes here')
// // console.log(number)

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear())
// console.log(now.getMonth()+1);
// console.log(now.getDate());
// console.log(Date.now())


//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
let firstName = "isaac", lastName = "Kelvin", country = "Nigeria", isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof isMarried);

//2. Check if type of '10' is equal to 10
console.log("10"===10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8")==10);

/*3. Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
//truthy
console.log(5==5);
console.log("5"=="5");
let truthy = true;

//falsy
let gift, noStrings="", nanValue =NaN;
console.log(gift);
console.log(noStrings);
console.log(nanValue);

/*4. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.
*/
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!="4");
console.log(4=="4");
console.log(4==="4");

let ptn = "python", jrn = "jargon";
console.log(ptn.length==jrn.length);

/*5. Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());

//level 2
/*1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50
*/
let base = prompt("enter your base"), height = prompt("Enter your height"), areaOfATriangle = base*height*0.5;
alert(`The area of a triangle with the base ${base} and height ${height} is ${areaOfATriangle}`);

/*2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/


let sideA = prompt("value of side A");
sideA = parseInt(sideA); //casting the prompt value from undefined to number 
let sideB = prompt("Value of side B");
sideB = parseInt(sideB);
let sideC = prompt("value of side C");
sideC = parseInt(sideC);
let area =sideA+sideB+sideC;

perimeterOfATriangle = `The perimeter of a triangle who's value A is ${sideA}, then b is ${sideB}, and c is ${sideC} is ${area}`;
alert(perimeterOfATriangle);

/*3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
let length = prompt('Input length of a rectangle', "Your value goes here"), width = prompt("Input width of a rectangle", "Your value goes here");
length = parseInt(length);
width = parseInt(width);
areaOfARectangle = length*width;
perimeterOfARectangle = 2*(length + width);
console.log(`The area of a triangle of length ${length} and width ${width} is ${areaOfARectangle}\n \n And the perimeter of a rectangle is ${perimeterOfARectangle}`);


//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r= prompt("Input radius of a circle", "Your value goes here");
r = parseInt(r);
const pi = 3.14
areaOfACircle = pi*r*r;
circumference = 2*pi*r;
alert(
	`The area of a cicle of radius ${r} is ${areaOfACircle} \n\n while its circumference is ${circumference}`
);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x01 = 2, x02 = 0, y01 = 2, y02 = 0, slope1 = (y02-y01)/(x02-x01);

console.log(`the slope of the x and y intercept is ${slope1}`);

//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x11 = 2, y11 = 2, x12 = 6, y12 = 10, slope2 = (y2-y1)/(x2-x1);

console.log(`The slope between points is ${slope2}`);

//7. Compare the slope of above two questions.
console.log(slope1==slope2); //Replies true

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/*9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let enterHrs = prompt("Enter hour", "type your value"), enterRate = prompt("enter your rate per the hour", "type your value"), hrs_rate = enterHrs*enterRate;
 alert(`Your weekly earning for ${enterHrs} hour at the rate of ${enterRate} is ${hrs_rate}`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Input your name");
name.length >=7
?
alert("your name is long!")
:
alert("Your name is short")
;

/*11. Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let firstName = prompt('Input your first name'), lastName = prompt('Input your last name');
firstName = firstName.toUpperCase()
lastName = lastName.toUpperCase()

firstName.length >lastName.length
?
alert(
	`your first name ${firstName} is longer than your family name ${lastName} `
		 )
:
alert(
	`your first name ${firstName} is shorter than your family name ${lastName} `
);


/*12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/
let myAge = 250, yourAge = 25, agewise = myAge-yourAge;
console.log(`i am ${agewise} older than you `);

/*13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
let date = new Date();
let currentYear = date.getFullYear();
let birthYear = prompt('Enter your birth year.');
let currentAge = currentYear-birthYear;
let allowingAge = 18 - currentAge;

currentAge>=18
?
alert(`You are ${currentAge}. You are old enough to drive`)
:
alert(`You are ${currentAge}. You will be allowed to drive after ${allowingAge} years `);

/*14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.
*/

/*15. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm*/

// LEVEL 3

/*1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05*/


// *UNDONE CODE INDEX(160[LEVEL 2 NO 8], 231[LEVEL 2 NO 14], 237[LEVEL2 NO 15],245[LEVEL 3 NO 1])