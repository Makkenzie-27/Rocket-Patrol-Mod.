class Rocket extends  Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //adding object to existing scene
        scene.add.existing(this);

        //track Rocket's firing status
        this.isFiring = false;

        //pixels per frame
        this.moveSpeed = 2;

        // add rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        
        //left/rightmovement Rocket can now move after being fired
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width -
            borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        
         // fire button
            if (Phaser.Input.Keyboard.JustDown(keySPACEBAR) && !this.isFiring) {
                this.isFiring = true;
                this.sfxRocket.play();  // play sfx
            }
        
        // if fired, move up
            if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
                this.y -= this.moveSpeed;
            }

        // reset on miss
            if(this.y <= borderUISize * 3 + borderPadding) {
                this.reset();
            }
        
    }

    //reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize -borderPadding;
    }
}
