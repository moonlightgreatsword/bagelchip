// open questions:
    // how do you tie an html element to an object in javascript?
    // is there a way to return the value of an html element's id?

// define buttons

const a1Tile = document.querySelector("#A1")
const b1Tile = document.querySelector("#B1")
const c1Tile = document.querySelector("#C1")
const d1Tile = document.querySelector("#D1")
const e1Tile = document.querySelector("#E1")
const f1Tile = document.querySelector("#F1")
const a2Tile = document.querySelector("#A2")
const b2Tile = document.querySelector("#B2")
const c2Tile = document.querySelector("#C2")
const d2Tile = document.querySelector("#D2")
const e2Tile = document.querySelector("#E2")
const f2Tile = document.querySelector("#F2")
const a3Tile = document.querySelector("#A3")
const b3Tile = document.querySelector("#B3")
const c3Tile = document.querySelector("#C3")
const d3Tile = document.querySelector("#D3")
const e3Tile = document.querySelector("#E3")
const f3Tile = document.querySelector("#F3")
const a4Tile = document.querySelector("#A4")
const b4Tile = document.querySelector("#B4")
const c4Tile = document.querySelector("#C4")
const d4Tile = document.querySelector("#D4")
const e4Tile = document.querySelector("#E4")
const f4Tile = document.querySelector("#F4")
const a5Tile = document.querySelector("#A5")
const b5Tile = document.querySelector("#B5")
const c5Tile = document.querySelector("#C5")
const d5Tile = document.querySelector("#D5")
const e5Tile = document.querySelector("#E5")
const f5Tile = document.querySelector("#F5")
const a6Tile = document.querySelector("#A6")
const b6Tile = document.querySelector("#B6")
const c6Tile = document.querySelector("#C6")
const d6Tile = document.querySelector("#D6")
const e6Tile = document.querySelector("#E6")
const f6Tile = document.querySelector("#F6")

// things that will fill the top of main

const promptSection = document.querySelector("#prompts")
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
    button.removeEventListener("click", playerOneStart);
    game.phase = 1;
    // prompt player one to hide their caviar
    promptText.innerText = `${playerOne.name}, hide your caviar!`
    // create new p text to display how many have been placed and how many are still to be placed
    const caviarPlacementTracker = document.createElement("p")
    caviarPlacementTracker.setAttribute("id", "caviar-placement-tracker")
    caviarPlacementTracker.innerText = `Placed ${playerOne.caviarPlaced} of 5`
    promptSection.appendChild(caviarPlacementTracker)
}

const playerTwoStart = () => {
    button.remove();
    button.removeEventListener("click", playerTwoStart);
    game.phase = 4;
    promptText.innerText = `${playerTwo.name}, find all 5 caviar chips before you find 3 pepper chips!`;
}

const switchPlayers = () => {
    // reset tile displays to empty
    game.tiles.forEach((element) => {element.display = "empty"});
    game.tiles.forEach((element) => {setDisplay(element.location)});
    promptText.innerText = `${playerOne.name}, ask ${playerTwo.name} to return.`;
    button.innerText = "Yoo-hoo.";
    button.addEventListener("click", playerTwoStart);
    promptSection.appendChild(button);
}

const setDisplay = (tile) => {
    let currentTile = game.tiles.find(obj => {return obj.location == tile});
    if (currentTile.display == "caviar") {
        // https://stackoverflow.com/questions/12135162/adding-a-class-with-javascript-not-replace
        document.querySelector(`#${tile.toUpperCase()}`).className += " caviar";
    } else if (currentTile.display == "pepper") {
        document.querySelector(`#${tile.toUpperCase()}`).className += " pepper";
    } else if (currentTile.display == "eaten") {
        document.querySelector(`#${tile.toUpperCase()}`).className += " eaten";
    } else if (currentTile.display == "empty") {
        document.querySelector(`#${tile.toUpperCase()}`).className = "tile";
    }
}

// // function for when a tile is clicked
const clickTile = (tile) => {
    console.log(`The function clickTile has been run with the argument ${tile}`)
    // use tile parameter to select object from game tiles array whose location matches passed parameter
        // thank you stackoverflow dot com https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
    let currentTile = game.tiles.find(obj => {return obj.location == tile})
    // identify which stage of the game it is
    if (game.phase == 0 || game.phase == 3 || game.phase == 5) {
        console.log(`You have clicked tile ${tile}!`);
    // player one's caviar placement phase
    } else if (game.phase == 1) {
        console.log(`${playerOne.name} has clicked tile ${tile}!`);
        console.log(currentTile.contents)
        // if the selected chip is currently empty
        if (currentTile.contents == "empty") {
            // put caviar on it and change its display to match
            currentTile.contents = "caviar";
            currentTile.display = "caviar";
            setDisplay(tile);
            // increase the counter of caviar placed
            playerOne.caviarPlaced++;
            // find and update the display above the board
            let caviarPlacementTracker = document.querySelector("#caviar-placement-tracker");
            caviarPlacementTracker.innerText = `Placed ${playerOne.caviarPlaced} of 5`;
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
        } else {
            console.log("This tile is already full!")
        }
    // player one's pepper placement phase
    } else if (game.phase == 2) {
        console.log(`${playerOne.name} has clicked tile ${tile}!`);
        if (currentTile.contents == "empty") {
            currentTile.contents = "pepper";
            currentTile.display = "pepper";
            setDisplay(tile);
            playerOne.pepperPlaced++;
            let pepperPlacementTracker = document.querySelector("#pepper-placement-tracker");
            pepperPlacementTracker.innerText = `Placed ${playerOne.pepperPlaced} of 5`;
            if (playerOne.pepperPlaced == 5) {
                pepperPlacementTracker.remove();
                game.phase = 3;
                switchPlayers();
            }
        }
    } else if (game.phase == 4) {
        console.log(`${playerTwo.name} has clicked tile ${tile}!`);
        if (currentTile.contents == "empty") {
            currentTile.display = "eaten";
            setDisplay(tile);
        } else if (currentTile.contents == "caviar") {
            currentTile.display = "caviar";
            setDisplay(tile);
            playerTwo.caviarFound++;
            if (playerTwo.caviarFound == 5) {
                console.log(`${playerTwo.name} wins!`);
                promptText.innerText = `${playerTwo.name} has found all the caviar!`;
                game.phase = 5;
                alert(`${playerTwo.name} wins!`);
            }
        } else if (currentTile.contents == "pepper") {
            currentTile.display = "pepper";
            setDisplay(tile);
            playerTwo.pepperFound++;
            if (playerTwo.pepperFound == 3) {
                console.log(`${playerOne.name} wins!`);
                promptText.innerText = `${playerTwo.name} can no longer handle the heat!`;
                game.phase = 5;
                alert(`${playerOne.name} wins!`);
            }
        }
    }
    console.log(currentTile);
}

const clickA1 = () => {
    clickTile("a1")
}
const clickB1 = () => {
    clickTile("b1")
}
const clickC1 = () => {
    clickTile("c1")
}
const clickD1 = () => {
    clickTile("d1")
}
const clickE1 = () => {
    clickTile("e1")
}
const clickF1 = () => {
    clickTile("f1")
}
const clickA2 = () => {
    clickTile("a2")
}
const clickB2 = () => {
    clickTile("b2")
}
const clickC2 = () => {
    clickTile("c2")
}
const clickD2 = () => {
    clickTile("d2")
}
const clickE2 = () => {
    clickTile("e2")
}
const clickF2 = () => {
    clickTile("f2")
}
const clickA3 = () => {
    clickTile("a3")
}
const clickB3 = () => {
    clickTile("b3")
}
const clickC3 = () => {
    clickTile("c3")
}
const clickD3 = () => {
    clickTile("d3")
}
const clickE3 = () => {
    clickTile("e3")
}
const clickF3 = () => {
    clickTile("f3")
}
const clickA4 = () => {
    clickTile("a4")
}
const clickB4 = () => {
    clickTile("b4")
}
const clickC4 = () => {
    clickTile("c4")
}
const clickD4 = () => {
    clickTile("d4")
}
const clickE4 = () => {
    clickTile("e4")
}
const clickF4 = () => {
    clickTile("f4")
}
const clickA5 = () => {
    clickTile("a5")
}
const clickB5 = () => {
    clickTile("b5")
}
const clickC5 = () => {
    clickTile("c5")
}
const clickD5 = () => {
    clickTile("d5")
}
const clickE5 = () => {
    clickTile("e5")
}
const clickF5 = () => {
    clickTile("f5")
}
const clickA6 = () => {
    clickTile("a6")
}
const clickB6 = () => {
    clickTile("b6")
}
const clickC6 = () => {
    clickTile("c6")
}
const clickD6 = () => {
    clickTile("d6")
}
const clickE6 = () => {
    clickTile("e6")
}
const clickF6 = () => {
    clickTile("f6")
}

// // make tiles clickable
// document.querySelectorAll(".tile").forEach((element) => {
//     element.addEventListener("click", clickTile)
// })

// or let's just try doing them all individually
a1Tile.addEventListener("click", clickA1)
b1Tile.addEventListener("click", clickB1)
c1Tile.addEventListener("click", clickC1)
d1Tile.addEventListener("click", clickD1)
e1Tile.addEventListener("click", clickE1)
f1Tile.addEventListener("click", clickF1)
a2Tile.addEventListener("click", clickA2)
b2Tile.addEventListener("click", clickB2)
c2Tile.addEventListener("click", clickC2)
d2Tile.addEventListener("click", clickD2)
e2Tile.addEventListener("click", clickE2)
f2Tile.addEventListener("click", clickF2)
a3Tile.addEventListener("click", clickA3)
b3Tile.addEventListener("click", clickB3)
c3Tile.addEventListener("click", clickC3)
d3Tile.addEventListener("click", clickD3)
e3Tile.addEventListener("click", clickE3)
f3Tile.addEventListener("click", clickF3)
a4Tile.addEventListener("click", clickA4)
b4Tile.addEventListener("click", clickB4)
c4Tile.addEventListener("click", clickC4)
d4Tile.addEventListener("click", clickD4)
e4Tile.addEventListener("click", clickE4)
f4Tile.addEventListener("click", clickF4)
a5Tile.addEventListener("click", clickA5)
b5Tile.addEventListener("click", clickB5)
c5Tile.addEventListener("click", clickC5)
d5Tile.addEventListener("click", clickD5)
e5Tile.addEventListener("click", clickE5)
f5Tile.addEventListener("click", clickF5)
a6Tile.addEventListener("click", clickA6)
b6Tile.addEventListener("click", clickB6)
c6Tile.addEventListener("click", clickC6)
d6Tile.addEventListener("click", clickD6)
e6Tile.addEventListener("click", clickE6)
f6Tile.addEventListener("click", clickF6)

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

