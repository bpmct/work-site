class GreenFish extends Creature {

    constructor(x, y, speed, size) {

        super(x, y, speed, size);

        this.type = "greenfish";

        //Use new or legacy animation style
        this.animateFresh = true;

    }

    loadImages() {

        if (!this.animateFresh)
            loadAnimationProcedures();

        //Load the idle images
        this.images.idle = [];
        for (let frameNumber = 0; frameNumber < 2; frameNumber++)
            this.images.idle.push(loadImage('greenfish/idle' + frameNumber + '.png'));

        //Loads the move images
        this.images.move = [];
        for (let frameNumber = 0; frameNumber < 3; frameNumber++)
            this.images.move.push(loadImage('greenfish/move' + frameNumber + '.png'));

        //Loads the moveright images
        this.images.moveright = [];
        for (let frameNumber = 0; frameNumber < 3; frameNumber++)
            this.images.moveright.push(loadImage('greenfish/moveright' + frameNumber + '.png'));

    }

    loadAnimationProcedures(creatureSad = false) {

        if (creatureSad) {
            this.images.moveright.push(loadImage('greenfish/wiggle_sad' + frameNumber + '.png'));
        } else {
            this.images.moveright.push(loadImage('greenfish/wiggle_happy' + frameNumber + '.png'));
        }

    }


}