// define buttons

const a1 = document.getElementById("A1")
const b1 = document.getElementById("B1")
const c1 = document.getElementById("C1")
const d1 = document.getElementById("D1")
const e1 = document.getElementById("E1")
const f1 = document.getElementById("F1")
const a2 = document.getElementById("A2")
const b2 = document.getElementById("B2")
const c2 = document.getElementById("C2")
const d2 = document.getElementById("D2")
const e2 = document.getElementById("E2")
const f2 = document.getElementById("F2")
const a3 = document.getElementById("A3")
const b3 = document.getElementById("B3")
const c3 = document.getElementById("C3")
const d3 = document.getElementById("D3")
const e3 = document.getElementById("E3")
const f3 = document.getElementById("F3")
const a4 = document.getElementById("A4")
const b4 = document.getElementById("B4")
const c4 = document.getElementById("C4")
const d4 = document.getElementById("D4")
const e4 = document.getElementById("E4")
const f4 = document.getElementById("F4")
const a5 = document.getElementById("A5")
const b5 = document.getElementById("B5")
const c5 = document.getElementById("C5")
const d5 = document.getElementById("D5")
const e5 = document.getElementById("E5")
const f5 = document.getElementById("F5")
const a6 = document.getElementById("A6")
const b6 = document.getElementById("B6")
const c6 = document.getElementById("C6")
const d6 = document.getElementById("D6")
const e6 = document.getElementById("E6")
const f6 = document.getElementById("F6")
const a7 = document.getElementById("A7")
const b7 = document.getElementById("B7")
const c7 = document.getElementById("C7")
const d7 = document.getElementById("D7")
const e7 = document.getElementById("E7")
const f7 = document.getElementById("F7")
const a8 = document.getElementById("A8")
const b8 = document.getElementById("B8")
const c8 = document.getElementById("C8")
const d8 = document.getElementById("D8")
const e8 = document.getElementById("E8")
const f8 = document.getElementById("F8")
const a9 = document.getElementById("A9")
const b9 = document.getElementById("B9")
const c9 = document.getElementById("C9")
const d9 = document.getElementById("D9")
const e9 = document.getElementById("E9")
const f9 = document.getElementById("F9")
const a10 = document.getElementById("A10")
const b10 = document.getElementById("B10")
const c10 = document.getElementById("C10")
const d10 = document.getElementById("D10")
const e10 = document.getElementById("E10")
const f10 = document.getElementById("F10")

// things that will fill the top of main

const promptSection = document.getElementById("prompts")
const promptText = document.createElement("h2")
promptSection.appendChild(promptText)

// create class to define players

class Player {
    constructor () {
        this.name = "";
        this.caviarPlaced = 0;
        this.pepperPlaced = 0;
        this.caviarFound = 0;
        this.pepperFound = 0;
    }
    namePlayer (name) {
        this.name = `${name}`;
    }
    
}

const playerOne = new Player()
const playerTwo = new Player()

// player one enter name
const playerOneName = prompt("Player 1, enter your name:")
    // grab value, save as name key value in object
playerOne.namePlayer(playerOneName)
console.log(playerOne);

// player two enter name
const playerTwoName = prompt("Player 2, enter your name:")
    // grab value, save as name key value in object
playerTwo.namePlayer(playerTwoName)
console.log(playerTwo);

// prompt player two to leave

promptText.innerText = `${playerOne.name}, please ask ${playerTwo.name} very nicely to leave the room.`
const button = document.createElement("p")
button.setAttribute("id", "button")
button.innerText = "It is done."
// FIX: when this loads in the css, it has the width of the h2 element above it
promptSection.appendChild(button)

// prompt player one to hide five caviar chips
    // display dynamic countdown of chips
    // click on squares to hide them
    // change square image to display caviar
    // mark square as no longer empty

// prompt player one to hide five pepper chips
    // display dynamic countdown of chips
    // click on squares to hide them
    // change square image to display pepper jam
    // mark square as no longer empty

// hide appearance of all chips
// prompt player switch

// inform player two of how many caviar chips are left to find
// allow player two to click chips
    // if chip is empty, mark as "eaten"
    // if chip is caviar, reveal and add to score
    // if chip is pepper, reveal and add to spice meter
// if spice meter reaches three, player two loses
// if player two finds all five spice chips, player two wins

