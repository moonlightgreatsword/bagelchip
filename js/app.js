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

// things that will fill the top of main

const promptSection = document.getElementById("prompts")
const promptText = document.createElement("h2")
promptSection.appendChild(promptText)

// create game object to store data on status of all tiles

const game = {
    tiles: [
        { location : "a1", display : "empty", contents : "empty" },
        { location : "b1", display : "empty", contents : "empty" },
        { location : "c1", display : "empty", contents : "empty" },
        { location : "d1", display : "empty", contents : "empty" },
        { location : "e1", display : "empty", contents : "empty" },
        { location : "f1", display : "empty", contents : "empty" },
        { location : "a2", display : "empty", contents : "empty" },
        { location : "b2", display : "empty", contents : "empty" },
        { location : "c2", display : "empty", contents : "empty" },
        { location : "d2", display : "empty", contents : "empty" },
        { location : "e2", display : "empty", contents : "empty" },
        { location : "f2", display : "empty", contents : "empty" },
        { location : "a3", display : "empty", contents : "empty" },
        { location : "b3", display : "empty", contents : "empty" },
        { location : "c3", display : "empty", contents : "empty" },
        { location : "d3", display : "empty", contents : "empty" },
        { location : "e3", display : "empty", contents : "empty" },
        { location : "f3", display : "empty", contents : "empty" },
        { location : "a4", display : "empty", contents : "empty" },
        { location : "b4", display : "empty", contents : "empty" },
        { location : "c4", display : "empty", contents : "empty" },
        { location : "d4", display : "empty", contents : "empty" },
        { location : "e4", display : "empty", contents : "empty" },
        { location : "f4", display : "empty", contents : "empty" },
        { location : "a5", display : "empty", contents : "empty" },
        { location : "b5", display : "empty", contents : "empty" },
        { location : "c5", display : "empty", contents : "empty" },
        { location : "d5", display : "empty", contents : "empty" },
        { location : "e5", display : "empty", contents : "empty" },
        { location : "f5", display : "empty", contents : "empty" },
        { location : "a6", display : "empty", contents : "empty" },
        { location : "b6", display : "empty", contents : "empty" },
        { location : "c6", display : "empty", contents : "empty" },
        { location : "d6", display : "empty", contents : "empty" },
        { location : "e6", display : "empty", contents : "empty" },
        { location : "f6", display : "empty", contents : "empty" },
    ],
    phase: 0
}

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

const playerOneStart = () => {
    // delete the button
    button.remove();
    game.phase = 1;
    // prompt player one to hide their caviar
    promptText.innerText = `${playerOne.name}, hide your caviar!`
    // create new p text to display how many have been placed and how many are still to be placed
    const caviarPlacementTracker = document.createElement("p")
    caviarPlacementTracker.setAttribute("id", "caviar-placement-tracker")
    caviarPlacementTracker.innerText = `Placed ${playerOne.caviarPlaced} of 5`
    promptSection.appendChild(caviarPlacementTracker)
}

// // function for when a tile is clicked
const clickTile = (tile) => {
    // use tile parameter to select object from game tiles array whose location matches passed parameter
        // thank you stackoverflow dot com https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
    let currentTile = game.tiles.filter(obj => {return obj.location == `${tile}`})
    // identify which stage of the game it is
    if (game.phase == 0) {
        console.log(`You have clicked tile ${tile}!`);
    // player one's caviar placement phase
    } else if (game.phase == 1) {
        console.log(`${playerOne.name} has clicked tile ${tile}!`);
        // if the selected chip is currently empty
        if (currentTile.contents == "empty") {
            // put caviar on it and change its display to match
            currentTile.contents = "caviar";
            currentTile.display = "caviar";
            // increase the counter of caviar placed
            playerOne.caviarPlaced++;
            // find and update the display above the board
            let caviarPlacementTracker = document.getElementById("caviar-placement-tracker");
            caviarPlacementTracker.innerText = `Placed ${playerOne.caviarPlaced} of ${5 - playerOne.caviarPlaced}`;
            // once all five caviar chips have been placed, initiate phase 2
            if (playerOne.caviarPlaced == 5) {
                caviarPlacementTracker.remove();
                game.phase = 2;
                // create new tracker for peppers
                promptText.innerText = `${playerOne.name}, hide spicy peppers to protect your caviar!`
                const pepperPlacementTracker = document.createElement("p");
                pepperPlacementTracker.setAttribute("id", "pepper-placement-tracker");
                pepperPlacementTracker.innerText = `Placed ${playerOne.pepperPlaced} of 5`;
                promptSection.appendChild(pepperPlacementTracker);
            }
        }
    // player one's pepper placement phase
    } else if (game.phase == 2) {
        console.log(`${playerOne.name} has clicked tile ${tile}!`);
        if (currentTile.contents == "empty") {
            currentTile.contents = "pepper";
            currentTile.display = "pepper";
            playerOne.pepperPlaced++;
            let pepperPlacementTracker = document.getElementById("pepper-placement-tracker");
            pepperPlacementTracker.innerText = `Placed ${playerOne.pepperPlaced} of 5`;
            if (playerOne.pepperPlaced == 5) {
                pepperPlacementTracker.remove();
                game.phase = 3;
            }
        }
    }
}

const clickA1 = () => {
    clickTile(a1)
}
const clickB1 = () => {
    clickTile(b1)
}
const clickC1 = () => {
    clickTile(c1)
}
const clickD1 = () => {
    clickTile(d1)
}
const clickE1 = () => {
    clickTile(e1)
}
const clickF1 = () => {
    clickTile(f1)
}
const clickA2 = () => {
    clickTile(a2)
}
const clickB2 = () => {
    clickTile(b2)
}
const clickC2 = () => {
    clickTile(c2)
}
const clickD2 = () => {
    clickTile(d2)
}
const clickE2 = () => {
    clickTile(e2)
}
const clickF2 = () => {
    clickTile(f2)
}
const clickA3 = () => {
    clickTile(a3)
}
const clickB3 = () => {
    clickTile(b3)
}
const clickC3 = () => {
    clickTile(c3)
}
const clickD3 = () => {
    clickTile(d3)
}
const clickE3 = () => {
    clickTile(e3)
}
const clickF3 = () => {
    clickTile(f3)
}
const clickA4 = () => {
    clickTile(a4)
}
const clickB4 = () => {
    clickTile(b4)
}
const clickC4 = () => {
    clickTile(c4)
}
const clickD4 = () => {
    clickTile(d4)
}
const clickE4 = () => {
    clickTile(e4)
}
const clickF4 = () => {
    clickTile(f4)
}
const clickA5 = () => {
    clickTile(a5)
}
const clickB5 = () => {
    clickTile(b5)
}
const clickC5 = () => {
    clickTile(c5)
}
const clickD5 = () => {
    clickTile(d5)
}
const clickE5 = () => {
    clickTile(e5)
}
const clickF5 = () => {
    clickTile(f5)
}
const clickA6 = () => {
    clickTile(a6)
}
const clickB6 = () => {
    clickTile(b6)
}
const clickC6 = () => {
    clickTile(c6)
}
const clickD6 = () => {
    clickTile(d6)
}
const clickE6 = () => {
    clickTile(e6)
}
const clickF6 = () => {
    clickTile(f6)
}

// // make tiles clickable
// document.querySelectorAll(".tile").forEach((element) => {
//     element.addEventListener("click", clickTile)
// })

// or let's just try doing them all individually
a1.addEventListener("click", clickA1)
b1.addEventListener("click", clickB1)
c1.addEventListener("click", clickC1)
d1.addEventListener("click", clickD1)
e1.addEventListener("click", clickE1)
f1.addEventListener("click", clickF1)
a2.addEventListener("click", clickA2)
b2.addEventListener("click", clickB2)
c2.addEventListener("click", clickC2)
d2.addEventListener("click", clickD2)
e2.addEventListener("click", clickE2)
f2.addEventListener("click", clickF2)
a3.addEventListener("click", clickA3)
b3.addEventListener("click", clickB3)
c3.addEventListener("click", clickC3)
d3.addEventListener("click", clickD3)
e3.addEventListener("click", clickE3)
f3.addEventListener("click", clickF3)
a4.addEventListener("click", clickA4)
b4.addEventListener("click", clickB4)
c4.addEventListener("click", clickC4)
d4.addEventListener("click", clickD4)
e4.addEventListener("click", clickE4)
f4.addEventListener("click", clickF4)
a5.addEventListener("click", clickA5)
b5.addEventListener("click", clickB5)
c5.addEventListener("click", clickC5)
d5.addEventListener("click", clickD5)
e5.addEventListener("click", clickE5)
f5.addEventListener("click", clickF5)
a6.addEventListener("click", clickA6)
b6.addEventListener("click", clickB6)
c6.addEventListener("click", clickC6)
d6.addEventListener("click", clickD6)
e6.addEventListener("click", clickE6)
f6.addEventListener("click", clickF6)

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
// begin phase one of p1's turn
button.addEventListener("click", playerOneStart)

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

