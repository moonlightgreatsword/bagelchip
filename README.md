# Bagelchip

> Bagelchip is a game for two players in which one player must hide their precious caviar-covered chips in an array of plain bagel chips. To keep the covetous second player from eating all their caviar chips, they can also hide chips covered in spicy pepper jam. If player two finds all five caviar chips, they're the winner! But watch out: if you unearth three pepper chips first, you'll have to throw in the towel.

## Conception

> This project was made for the Unit 1 final in my software engineering course. The initial concept was for a Battleship parody; I quickly realized the Battleship grid was far too large for what I had in mind, so I pared it down from a 10x10 to a 6x6.

## Wire Frames

https://media.git.generalassemb.ly/user/43194/files/1f564970-ef69-48ba-bcc3-299460512eee![Uploading image.png…]()![1f564970-ef69-48ba-bcc3-299460512eee](https://user-images.githubusercontent.com/105583067/180513620-a086378a-65eb-4f27-9e32-1245315013d0.png)

## User Stories

### MVP Goals
> As a user, I want to be able to place tokens by clicking on squares on the grid when I am P1.
> As a user, I want it to be clearly communicated to me what type of token I am placing, and how many of each type I will have to place when I am p1.
> As a user, I want it to be visually communicated what square I am hovering over.
> As a user, I want the chips to reset to their neutral appearance after I have placed all of my tokens when I am P1.
> As a user, I want it clearly communicated when I should hand the game over to P2.
> As a user, I want tokens I have uncovered to remain uncovered and visually expressed when I am P2.

### Stretch Goals
> As a user, I want an onscreen reminder of how many spicy chips I have eaten and how many I can still endure when I am P2.
> As a user, I want an onscreen reminder of how many caviar chips I have discovered, and how many are left when I am P2.
> I want to have special, randomly placed "wild card" chips like "cream cheese," which lowers your spice meter.
> I want a turn counter so that after two rounds, both players can see (if applicable) who won in a shorter time.

## The Process

> I made this with HTML, CSS, and Javascript. The gameboard is a layout of div elements in the HTML, styled with flexbox in CSS. I made these elements clickable in Javascript, and used their location within the grid to get and store data (name of tile, contents of tile, display of tile) in a corresponding array of objects. I divided the game into phases so that the click function operates differently as needed.

### Unsolved Problems

> I wanted the players to enter their names via an onscreen text entry box rather than an alert, but I couldn't get it to work cleanly via a "Submit" button without it refreshing the page on entry.

### Forthcoming Features

> I want to create art assets to replace the tiles, so as to more easily visually communicate their existence as bagel chips, caviar, pepper, etc.
