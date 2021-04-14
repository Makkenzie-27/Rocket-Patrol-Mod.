class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './assets/Rocket.PNG');
        this.load.image('spaceship', './assets/Spaceship.PNG');
        this.load.image('starfield', './assets/GalaxyField.png');
      }
    



    create() {

    // place tile sprite
    this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

    // green UI background
    this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);


    // Neon Pink borders
    this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFF00CC).setOrigin(0, 0);
    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFF00CC).setOrigin(0, 0);
    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xCC0099).setOrigin(0, 0);
    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xCC0099).setOrigin(0, 0);
      }

      update() {
        this.starfield.tilePositionX -= 4;
      }
    



  }