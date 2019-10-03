/**
 * Ben Potter
 * IGME-102: Menagerie Project, 09/23/2019
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

//This will be an array of images
let creatureFiles;

let img;
let rand1, rand2, rand3;

let topOfSand, bottomOfSand, waterMedium, waterSafeStart;


let menagerie = [];

function preload() {

    // creatureFiles = preloadCreatures();

}

function landBounds() {

    let landBounds = {

        x1: 0,
        x2: windowWidth / 3.5 + windowWidth / 20,
        y1: windowHeight - (windowHeight / 2),
        y2: windowHeight - windowHeight / 4

    }

    return landBounds;

}

function waterBounds() {

    let waterBounds = {

        x1: windowWidth - windowWidth / 2.6,
        x2: windowWidth,
        y1: windowHeight - windowHeight / 6.3,
        y2: windowHeight - windowHeight / 20

    }

    return waterBounds;

}

function stockMenagerie(capacity = 15) {

    console.log("*****Stocking the menagerie!*****");

    let critters = [];

    for (let i = 0; i < capacity; i++) {

        critters.push(getNewCreature());

    }

    return critters;

}

/**
 * setup :
 */
function setup() {

    // imageMode(CENTER);

    rand1 = random(0.8, 1.2);
    rand2 = random(0.8, 1.2);
    rand3 = random(0.8, 1.2);

    createCanvas(windowWidth, windowHeight);

    menagerie = stockMenagerie(15);

}

/**
 * draw :
 */
function draw() {

    //Some points used a lot in my landscape
    topOfSand = [

        windowWidth / 3,
        windowHeight - (windowHeight / 3) * rand1

    ];
    bottomOfSand = [

        windowWidth / 3 + windowWidth / 4,
        windowHeight

    ];
    waterMedium = windowHeight - (windowHeight / 5) * rand2;
    waterSafeStart = windowWidth - windowWidth / 4;


    background("#BDD7E9");

    //Draw the sand
    push();
    fill("#EBCCA4");
    strokeWeight(0);
    beginShape();
    vertex(0, windowHeight - (windowHeight / 3) );
    vertex(topOfSand[0], topOfSand[1]);
    vertex(bottomOfSand[0], bottomOfSand[1]);
    vertex(0, windowHeight);
    endShape(CLOSE);
    pop();

    //Draw the water
    push();
    fill("#003851");
    strokeWeight(0);
    beginShape();
    vertex(windowWidth, waterMedium);
    vertex(waterSafeStart, windowHeight - (windowHeight / 5.2) * rand1);
    vertex(windowWidth - windowWidth / 2.6, windowHeight - (windowHeight / 6) * rand3);
    //Some stupid calculations to find where the water meets the sand
    let waveHeight = windowHeight / 7;
    let opp = windowHeight - topOfSand[1];
    let adj = bottomOfSand[0] - topOfSand[0];
    let newPoint = bottomOfSand[0] - (bottomOfSand[0] - waveHeight);
    //Let's add that point to the calculations
    //If I do width - 20, it looks kind of cool. better?
    vertex(bottomOfSand[0] - waveHeight, windowHeight - (opp * newPoint) / adj);
    vertex(windowWidth / 3 + windowWidth / 4, windowHeight);
    vertex(window.width, window.height);
    endShape(CLOSE);
    pop();

    for (let i = 0; i < menagerie.length; i++) {

        menagerie[i].display();

        if (menagerie[i].type == "flamingo") 
            menagerie[i].move(landBounds().x1, landBounds().x2);
        else
            menagerie[i].move(waterBounds().x1, waterBounds().x2);   

    }

    if (mouseIsPressed) {

        push();
        fill("white");
        stroke("blue");
        strokeWeight(4);
        circle(mouseX, mouseY, 20);
        pop();

    }

}

function getNewCreature(type = null) {

    let newCreature;

    //Generate a random x and Y whithin the bounds
    let randWaterX = parseInt(random(waterBounds().x1, waterBounds().x2));
    let randWaterY = parseInt(random(waterBounds().y1, waterBounds().y2));

    let randomCreature = parseInt(random(0, 4));

    //Check if a specific type of animal was requested
    if (type == "fish")
        randomCreature = parseInt(random(1,3));
    if (type == "flamingo")
        randomCreature = 0;
    
    if (randomCreature == 0) {

        //Generate a random x and Y whithin the bounds
        let randLandX = parseInt(random(landBounds().x1, landBounds().x2));
        let randLandY = parseInt(random(landBounds().y1, landBounds().y2));
    
        newCreature = new Flamingo(randLandX, randLandY);

    } else if (randomCreature == 1) {

        newCreature = new Creature(randWaterX, randWaterY);

    } else if (randomCreature == 2) {

        newCreature = new GreenFish(randWaterX, randWaterY);

    } else {

        newCreature = new YellowFish(randWaterX, randWaterY);

    }

    return newCreature;

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    
}

function mouseClicked() {

    //This will be the index of the creature to replace
    let replaceMe = -1;

    let theX, theY;

    for (let i = 0; i < menagerie.length; i++) {

        if (menagerie[i].within(mouseX, mouseY)) {

            //Save the X and Y of this creaure
            theX = menagerie[i].x;
            theY = menagerie[i].y;
        
            if (menagerie[i].type == "flamingo")
                menagerie[i] = getNewCreature("flamingo");
            else 
                menagerie[i] = getNewCreature("fish");
        
            //Move the creature to the new x and y
            menagerie[i].x = theX;
            menagerie[i].y = theY;

            //Change the size so it is obvious a new creature was made.
            menagerie[i].size = .6;
        
        }

    }

}