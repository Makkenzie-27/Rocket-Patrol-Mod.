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
      this.load.audio('sfx_theme', './assets/theme.wav');

      //load images for main menu
      this.load.image('menuborder', './assets/Menu_Border.PNG');
      this.load.image('neonborder', './assets/NeonBorder.PNG');
      this.load.image('starfield', './assets/GalaxyField.png');   
      
      

    }
    
    create() {

      this.music = this.sound.add('sfx_menu');

      //Galaxy BackDrop
      this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
      
      //Menu Text Border
      this.menuborder = this.add.tileSprite(0, 150, 640, 167, 'menuborder').setOrigin(0.0, 0);

      //Neon Pink Border
      this.neonborder = this.add.tileSprite(0, 0, 640, 480, 'neonborder').setOrigin(0, 0);
      
      
      //menu text config
      let menuConfig = {
        fontFamily: 'Monaco',
        fontSize: '28px',
        backgroundColor: '#A2FBFE', 
        color: '#005E61',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
        },
      fixedWidth: 0
    }

    //show menu text
    
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'Use<-->arrows to move & SPACE to fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#99FBFE';
    menuConfig.color = '#005658';
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Easy or -> for Expert', menuConfig).setOrigin(0.5);
    
    this.music.play();
    
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
      this.music.stop();
       
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start('playScene'); 
      this.music.stop(); 
      
    }
  }
}