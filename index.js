/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

const fullName = "Najat Al-Kanderi";
const yearOfBirth = 1976;
const hobby = "Travel";
const funFact = "lovePPL";

const image =
  "https://www.visitdubai.com/-/media/gathercontent/article/n/new-restaurants-to-try/fallback-image/new-restaurants-to-try-header-eventorganiser-sep-2022.jpg?rev=0b06a8cadfbb4cb6a4445c5e3db23ae2&cx=0.56&cy=0.42&cw=1556&ch=690";
/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 *
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */
let age = 2023 - 1976;
const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `I am ${age}`;
const hobbyString = `My hobby is ${hobby}`;

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1
  stars = stars + 1;
}
function decrementBy1() {
  // decrement stars by 1
  stars = stars - 1;
}

function incrementBy2() {
  // Increment stars by 2
  stars = stars + 2;
}
function decrementBy2() {
  // decrement stars by 2
  stars = stars - 2;
}
