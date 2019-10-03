class Flamingo extends Creature {

    constructor(x, y, speed, size) {

        super(x, y, speed, size);

        this.type = "flamingo";
        this.imageScale = .2;

    }

    loadImages() {

        //Load the idle images
        this.images.idle = [];
        for (let frameNumber = 0; frameNumber < 20; frameNumber++)
            this.images.idle.push(loadImage('flamingo/idle' + frameNumber + '.png'));

        //Load the move images
        this.images.move = [];
        for (let frameNumber = 0; frameNumber < 20; frameNumber++)
            this.images.move.push(loadImage('flamingo/move' + frameNumber + '.png'));

        //Load the moveright images
        this.images.moveright = [];
        for (let frameNumber = 0; frameNumber < 20; frameNumber++)
            this.images.moveright.push(loadImage('flamingo/moveright' + frameNumber + '.png'));

        //Load the duck images
        this.images.duck = [];
        for (let frameNumber = 0; frameNumber < 10; frameNumber++)
            this.images.duck.push(loadImage('flamingo/duck' + frameNumber + '.png'));

        //Load the duckright images
        this.images.duckright = [];
        for (let frameNumber = 0; frameNumber < 10; frameNumber++)
            this.images.duckright.push(loadImage('flamingo/duckright' + frameNumber + '.png'));

    }

    move(x1, x2) {

        //Moves it only if it is not currently ducking
        if (this.status !== "duck" && this.status !== "duckright")
            super.move(x1, x2);

    }

    //Special function to see if mouse is over the neck
    withinNeck(x, y) {

        let thisFrame = this.images[this.status][this.spriteFrame];
        let imageWidth = (thisFrame.width * this.imageScale) * this.size;
        let imageHeight = (thisFrame.height * this.imageScale) * this.size;

        let rectX1 = this.x + imageWidth / 2.5;
        let rectY1 = this.y + imageHeight / 5;

        let rectX2 = rectX1 + imageWidth / 3;
        let rectY2 = rectY1 + imageHeight / 3;

        if (x > rectX1 && y > rectY1 && y > rectY1 && x < rectX2 && y < rectY2)
            return true;
        else
            return false;

    }

    tickle() {

        //Makes the flamingo duck
        if (this.status !== "duck" && this.status !== "duckright" && !this.tickleLocked) {

            this.spriteFrame = 0;

            //Ducks based on which way it was walking
            if (this.status == "moveright")  
                this.status = "duckright";
            else 
                this.status = "duck";


        }   
    
    }

    //This will check if the mouse is over the neck
    checkForTickles() {

        if (this.withinNeck(mouseX, mouseY))
            this.tickle();
        else if (this.tickleLocked)
            //This will run if the mouse is not over
            //the flamingo, but it was locked previously.
            this.tickleLocked = false;

    }

    display() {

        //Special display function so that it doesn't reverse sprites
        if (this.status === "move" || this.status === "moveright") {

            let statusCount = this.images[this.status].length;
            let thisFrame = this.images[this.status][this.spriteFrame];
    
    
            let imageWidth = (thisFrame.width * this.imageScale) * this.size;
            let imageHeight = (thisFrame.height * this.imageScale) * this.size;

            if (frameCount % 3 === 0) {

                //Make it go back to the first sprite
                if (this.spriteFrame === statusCount - 1) 
                    this.spriteFrame = 0;

                if (this.spriteFrameIncrementing === true)
                    this.spriteFrame++;

            }

            smooth();
            image(thisFrame, this.x, this.y, imageWidth, imageHeight);
        
            this.checkForTickles();

        } else {
        
            //Displays as normal if its status is idle
            super.display();

        }

        if ((this.status == "duck" || this.status == "duckright") && this.spriteFrame === 9) {
            
            //Checks to see if the "duck" action is over
            this.status = "idle";

            //Locks it so that it won't duck immediately
            //after if the mouse is over
            this.tickleLocked = true;

        }

    }

}