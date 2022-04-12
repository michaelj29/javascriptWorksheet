// DAY OF THE WEEK EXAMPLE
let dayOfTheWeek = 'Monday';
console.log(dayOfTheWeek)
dayOfTheWeek = 'friday';
console.log(`I cant wait until ${dayOfTheWeek}!`)


// USER INPUT EXAMPLE
let animalInput = prompt("Whats your favorite animal? ");
let colorInput = prompt("Whats your favorite color? ")
console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// CONDITIONALS
let timeOfDay = 1200
let mealTime = '';
if (timeOfDay === 1200) {
    console.log(`Its time for ABE`)
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
    console.log(`Its time for Chick Fil A`)
} else if (timeOfDay > 1700) {
    console.log(`Its time for Sotos`)
} else {
    console.log(`You cant eat during this time! `)
}

// FOR LOOPS
for(var i = 0; i < 7; i++){
  console.log('JavaScript is Cool !')
}
for(var i = -1; i < 10; i++){
    console.log(i+1)
}

for(var i = 0; i < 5; i++){
    console.log('hello')
    console.log('goodbye')
}

// WHILE LOOP 

let isInstructorAweseome = true
while(isInstructorAweseome){
   console.log('Yes?');
   console.log('You sure?');
   console.log('positive?');
   isInstructorAweseome = false;
}

function printMovieName(str){
  let myFavMovie = str;
    return `${myFavMovie} is my favorite movie!`
}

console.log(printMovieName('The Drunken Master'))

function favoriteBand(){
    let usersBand = prompt("Whats your favorite band? ");
    return usersBand
}
let usersFavBand = favoriteBand()
console.log(usersFavBand)

function concertDisplay(musicalAct) {
    let myStreet = prompt(`What street do you live on? `)

    return `It would be great if ${musicalAct} played on ${myStreet}!`
}

console.log(concertDisplay(usersFavBand))

// ARRAYS
let desktopItems = ['Desk', 'Water', 'Fan', 'Macbook']
console.log(desktopItems[1])
desktopItems.push('Infinity Gauntlet')
console.log(desktopItems)

for(var i = 0; i < desktopItems.length; i++) {
    console.log(desktopItems[i])
}

// MAGIC NUMBER
function guessingGame(){
    let magicNumber = Math.floor(Math.random() * 100);
    let guess = 0;

    while(guess !== magicNumber){
        guess = parseInt(prompt(`Enter the magic number?`))
        if(guess >= (magicNumber - 10) && guess < magicNumber || guess <= (magicNumber + 10) && guess > magicNumber){
            console.log('Getting Warmer!');
        } else if(guess < magicNumber){
            console.log("Too low!")
        } else if (guess > magicNumber){
            console.log('Too high!')
        } else if (guess === magicNumber) {
            console.log(`Congratulations you guessed the correct number ${magicNumber}`)
            guess = magicNumber
            return console.log('You win, game over.')
        }
    }
}

guessingGame()