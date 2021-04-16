class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload() {
      // load audio
      this.load.audio('sfx_rocket', './assets/gun_shot.wav');
      this.load.audio('sfx_menu', './assets/menu_music.wav');
      this.load.audio('sfx_background', './assets/theme_song.wav');
    }
    
    create() {
      this.add.text(20, 20, "Rocket Patrol Menu");
      this.scene.start("playScene");
    }
  }