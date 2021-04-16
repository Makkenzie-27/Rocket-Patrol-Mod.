class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/select.wav');
      this.load.audio('sfx_explosion', './assets/explosion.wav');
      this.load.audio('sfx_rocket', './assets/gun_shot.wav');
      this.load.audio('sfx_menu', './assets/menu_music.wav');
      this.load.audio('sfx_theme', './assets/theme_song.wav');
    }
    
    create() {
      //menu text config
      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
        },
      fixedWidth: 0
    }

    //show menu text
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
    borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'Use <--> arroes to move & (SPACEBAR) to fire',
    menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize +
    borderPadding, 'Press <- for Easy or -> for Expert', menuConfig).setOrigin(0.5);
    
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
    }
  }
}