class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/Rocket.PNG');
        this.load.image('spaceship', './assets/Spaceship.PNG');
        this.load.image('starfield', './assets/GalaxyField.png');
        this.load.image('neonborder', './assets/NeonBorder.PNG');
      }
    



    create() {

    // place tile sprite
    this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

    // green UI background
    this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x82EEFD).setOrigin(0, 0);

    //place new border art
    this.neonborder = this.add.tileSprite(0, 0, 640, 480, 'neonborder').setOrigin(0, 0);

    //add Rocket (p1)
    this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize, 'rocket').setOrigin(0.5, 0);

    //defining keys
    keySPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


   
      }

      update() {
        this.starfield.tilePositionX -= 2;
        this.p1Rocket.update();
      }
    



  }