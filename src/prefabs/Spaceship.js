// Name: Makkenzie Zepeda
//Project Title: Rocket Patrol Modifications
//Date: April 17, 2021
//Amount of time put into Rocket: 24 hours (1 day)

class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   //add to existing value

        this.points = pointValue;   //store pointValue
        
        this.moveSpeed = game.settings.spaceshipSpeed;        //pixels per frame
    }  
    
    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left edge to right edge 
        if(this.x <= 0 - this.width) {
            this.reset();
            
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }

}
