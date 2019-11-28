function inSanDiego() {
    return true;
}

let thisFrame = this.images[this.status][this.spriteFrame];
let imageWidth = thisFrame.width * this.imageScale * this.size;
let imageHeight = thisFrame.height * this.imageScale * this.size;

let rectX1 = this.x + imageWidth / 2.5;
let rectY1 = this.y + imageHeight / 5;

let rectX2 = rectX1 + imageWidth / 3;
let rectY2 = rectY1 + imageHeight / 3;

while (inSanDiego()) {
    let activities = ["⛱", "🏄🏽‍♀️", "🌮", "🛹", "🐟"];
}
