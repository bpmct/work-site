class YellowFish extends Creature {

    constructor(x, y, speed, size) {

        super(x, y, speed, size);

        this.type = "yellowfish";

    }

    loadImages() {

        //Load the idle images
        this.images.idle = [];
        for (let frameNumber = 0; frameNumber < 2; frameNumber++)
            this.images.idle.push(loadImage('yellowfish/idle' + frameNumber + '.png'));

        //Loads the move images
        this.images.move = [];
        for (let frameNumber = 0; frameNumber < 2; frameNumber++)
            this.images.move.push(loadImage('yellowfish/move' + frameNumber + '.png'));
       
        //Loads the moveright images
        this.images.moveright = [];
        for (let frameNumber = 0; frameNumber < 2; frameNumber++)
            this.images.moveright.push(loadImage('yellowfish/moveright' + frameNumber + '.png'));

    }


}