var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
player_object="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",updatePlayerImg);
}
function updatePlayerImg(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
    top:player_y,left:player_x 
});
canvas.add(player_object);
}

function new_Img(get_Img){
    fabric.Image.fromURL(get_Img,updateBlockImg);
}
function updateBlockImg(Img){
block_img_object=Img;
block_img_object.scaleToWidth(block_img_width);
block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:player_y,left:player_x 
});
canvas.add(block_img_object);
}

window.addEventListener("keydown",myKeyDown)
function myKeyDown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey==true && keyPressed=="80") {
        block_img_height=block_img_height+10
        block_img_width=block_img_width+10
        document.getElementById("current_height").innerHTML=block_img_height
        document.getElementById("current_width").innerHTML=block_img_width
}

if (e.shiftKey==true && keyPressed=="77") {
    block_img_height=block_img_height-10
    block_img_width=block_img_width-10
    document.getElementById("current_height").innerHTML=block_img_height
    document.getElementById("current_width").innerHTML=block_img_width
}

if (keyPressed=="37") {
    console.log("left");
    left();
}

if (keyPressed=="38") {
    console.log("up");
    up();
}

if (keyPressed=="39") {
    console.log("right");
    right();
}

if (keyPressed=="40") {
    console.log("down");
    down();
}

if (keyPressed=="87") {
    console.log("w");
    new_Img("wall.jpg");
}

if (keyPressed=="71") {
    console.log("g");
    new_Img("ground.png");
}

if (keyPressed=="76") {
    console.log("l");
    new_Img("light_green.jpg");
}

if (keyPressed=="84") {
    console.log("t");
    new_Img("trunk.jpg");
}

if (keyPressed=="82") {
    console.log("r");
    new_Img("roof.jpg");
}

if (keyPressed=="89") {
    console.log("y");
    new_Img("yellow_wall.png");
}

if (keyPressed=="68") {
    console.log("d");
    new_Img("dark_green.png");
}

if (keyPressed=="85") {
    console.log("u");
    new_Img("unique.png");
}

if (keyPressed=="67") {
    console.log("c");
    new_Img("cloud.jpg");
}

}

function up(){
    if (player_y >0) {
        player_y=player_y - block_img_height;
        console.log("block_img_height "+block_img_height);
        console.log("player_x "+player_x + " player_y "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y<=500) {
       player_y=player_y+block_img_height;
       console.log("block_img_height "+block_img_height);
       console.log("player_x "+player_x +" player_y "+player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function right(){
    if (player_x<850) {
    player_x=player_x+block_img_width;
    console.log("block_img_width "+block_img_width);
    console.log("player_x "+player_x+" player_y "+player_y);
    canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x>0) {
        player_x=player_x-block_img_width;
        console.log("block_img_width "+block_img_width);
        console.log("player_x "+player_x+" player_y "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}