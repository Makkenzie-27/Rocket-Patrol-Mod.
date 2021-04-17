let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }


let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard keys
let keySPACEBAR, keyR, keyLEFT, keyRIGHT;


//I created all the artwork and my boyfriend Dominic Castelli helped me design the sound effects / background music.

//points breakdown: 


  // 1) Allow the player to control the Rocket after it's fired (10) ----> The rocket can be moved left & right 
  //   after being fired.


  // 2) Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (25) ---> created / changed 
  //    the artwork for the background sprite, rocket, spaceship, border, and the UI Border. 


  // 3) Replace the UI borders with new artwork (15) ---> Rather than rectangles I created a Neon Pink faded border


  // 4) Create a new scrolling tile sprite for the background (10) ---> took the star idea and changed the black
  //     backdrop to purple and then drew stars ontop of it. Wanted a colorful alien theme tile sprite. 


  // 5) Create a new title screen (15) ---> tried to change the font but decided to carry the same artwork seen 
  //      during the game in the main Menu to make the design fluid. The text has a glowing border and when clicked
  //        on the screen will play the 'sfx_menu' sound effect. 


  // 6) Display the time remaining (in seconds) on the screen (15) ---> The seconds count down from 60 to 0 and then 
  //      stops. The music stops after the 60 seconds as well to play a Menu sound effect. 


  // 7) Implement the 'FIRE' UI text from the original game (10) --> FIRE appears after the SpaceBar is pressed.


  // 8) Add your own (copyright-free) background music to the Play scene (10) ---> I designed the soundtrack for the 
  //      background music on the piano and then my boyfriend took it and made it sound more professional 
  //      through his own system (he is a DJ/ Sound Desinger). 


  //Music Credit: Dominic Castelli
  //Art Credit: Makkenzie Zepeda
