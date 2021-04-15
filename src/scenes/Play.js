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

    // SkyBLUE UI background
    this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x82EEFD).setOrigin(0, 0);

    //place new Neon Pink border art
    this.neonborder = this.add.tileSprite(0, 0, 640, 480, 'neonborder').setOrigin(0, 0);

    //add Rocket (p1)
    this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - 70, 'rocket').setOrigin(0.5, 0);  //changed the artwork to my rocket

    // add spaceships (x3)
    this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
    this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
    this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);


    //defining keys. Changed keyF to keySPACEBAR
    keySPACEBAR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


   
      }

    update() {
        this.starfield.tilePositionX -= 2;
        this.p1Rocket.update();
        this.ship01.update();           //update spaceships (x3). I changed the art work to my ships
        this.ship02.update();
        this.ship03.update();
      }
    



  }