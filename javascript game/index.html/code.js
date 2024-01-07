const character = document.getElementById("character");
const obstacle = document.getElementById("obstacle");

function jump(){
    if (character.classList != "jump"){
    character.classList.add("jump");

    setTimeout(function(){
        character.classList.remove("jump");
    },500);
}
}
let isAlive = setInterval(function(){

    let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let obsatcleleft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obsatcleleft > 50 && obsatcleleft > 0 && charactertop >= 121){
        alert("Game over!");
    }
},10)



document.addEventListener("keydown",function (event) {
    jump();
});