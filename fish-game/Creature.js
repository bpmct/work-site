class Creature {

    constructor(x, y, speed, size) {

        //x and y coordinates on the canvas
        this.x = x;
        this.y = y;
        this.speed = speed || Number(random(.5, 3).toFixed(1));
        this.size = size || random(0.8, 1.2).toFixed(1);
        this.status = "idle";

        //Sets the first frame to 0
        this.spriteFrame = 0;
        this.spriteFrameIncrementing = true;

        this.images = {};

        this.type = "fish";
        this.imageScale = 1.2;

        this.loadImages();

        this.moveData = [];

        this.tickleLocked = false;

    }

    loadImages() {

        //Load the idle images
        this.images.idle = [];
        for (let frameNumber = 0; frameNumber < 2; frameNumber++)
            this.images.idle.push(loadImage('fish/idle' + frameNumber + '.png'));

        //Loads the move images
        this.images.move = [];
        for (let frameNumber = 0; frameNumber < 3; frameNumber++)
            this.images.move.push(loadImage('fish/move' + frameNumber + '.png'));

        //Loads the moveRight images
        this.images.moveright = [];
        for (let frameNumber = 0; frameNumber < 3; frameNumber++)
            this.images.moveright.push(loadImage('fish/moveright' + frameNumber + '.png'));

    }

    display() {

        /* Displays the image based on x, y, and also scales the original
        image by three and then multiplies by the scale multiplier */

        let statusCount = this.images[this.status].length;
        let thisFrame = this.images[this.status][this.spriteFrame];

        let imageWidth = (thisFrame.width * this.imageScale) * this.size;
        let imageHeight = (thisFrame.height * this.imageScale) * this.size;

        if (frameCount % 5 === 0) {

            //Make it reverse direction if in the beginning or end
            if (this.spriteFrame === statusCount - 1)
                this.spriteFrameIncrementing = false;
            else if (this.spriteFrame === 0)
                this.spriteFrameIncrementing = true;

            //Increase or decrease the frame based on its status
            if (this.spriteFrameIncrementing === true)
                this.spriteFrame++;
            else
                this.spriteFrame--;

        }

        smooth();

        image(thisFrame, this.x, this.y, imageWidth, imageHeight);

        this.checkForTickles();


    }

    //Check to see if the mouse is over the creature
    checkForTickles() {

        if (this.within(mouseX, mouseY)) {
            this.tickle();
        } else if (this.tickleLocked) {
            this.tickleLocked = false;
        }

    }

    move(xBoundary1, xBoundary2) {

        //Will set it to move if it wasn't already
        if (!this.moveData.direction || (this.status !== "move" && this.status !== "moveright")) {
            this.moveData.direction = "left";
            this.status = "move";
        }

        //Checks boundaries and flips if necessary
        if (this.x < xBoundary1) {
            this.moveData.direction = "right";
            this.status = "moveright";
        } else if (this.x > xBoundary2) {
            this.moveData.direction = "left";
            this.status = "move";
        }

        //Moves left or right based on direction
        if (this.moveData.direction == "left")
            this.x -= this.speed;
        if (this.moveData.direction == "right")
            this.x += this.speed;

    }

    //Makes it change direction if it was tickled
    tickle() {

        if (!this.tickleLocked) {

            this.tickleLocked =true;

            if (this.moveData.direction == "left") {

                this.status = "moveright";
                this.moveData.direction = "right";

            } else if (this.moveData.direction == "right") {
                this.moveData.direction = "left";
                this.status = "move";

            }

        }

    }

    //Checks to see if the x and y are within the boundaries
    within(x, y) {

        let thisFrame = this.images[this.status][this.spriteFrame];
        let imageWidth = (thisFrame.width * this.imageScale) * this.size;
        let imageHeight = (thisFrame.height * this.imageScale) * this.size;

        //Points for a virtual "rectangle" that surround the creature
        let rectX1 = this.x + imageWidth / 3.6;
        let rectY1 = this.y + imageHeight / 4;
        let rectX2 = rectX1 + imageWidth / 1.5;
        let rectY2 = rectY1 + imageHeight / 2;

        if (x > rectX1 && y > rectY1 && y > rectY1 && x < rectX2 && y < rectY2)
            return true;
        else
            return false;

    }



}