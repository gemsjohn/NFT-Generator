var theHead = document.querySelector("#head");
var theMouth = document.querySelector("#mouth");
var theNose = document.querySelector("#nose");
var theEyes = document.querySelector("#eyes");
var theEars = document.querySelector("#ears");
var theHair = document.querySelector("#hair");

var head = [];
var mouth = [];
var nose = [];
var eyes = [];
var ears = [];
var hair = [];

var nft = [];

var totalNfts = 4;

var getRandomInt = function(max) {
    return Math.floor(Math.random() * max);
};

function updateMetadata() {
    for (var i = 0; i < totalNfts; i++) {
        head[i] = "head_" + i;
        mouth[i] = "mouth_" + i;
        nose[i] = "nose_" + i;
        eyes[i] = "eyes_" + i;
        ears [i] = "ears" + i;
        hair[i] = "hair" + i;
    }
    for (var i = 0; i < totalNfts; i++) {
        nft[i] = {
            head: head[getRandomInt(totalNfts)], 
            mouth: mouth[getRandomInt(totalNfts)], 
            nose: nose[getRandomInt(totalNfts)], 
            eyes: eyes[getRandomInt(totalNfts)], 
            ears: ears[getRandomInt(totalNfts)], 
            hair: hair[getRandomInt(totalNfts)]    
        }
    }
    reveal();
};

function reveal() {
    var i = getRandomInt(totalNfts);
    theHead.textContent = nft[i].head;
    theMouth.textContent = nft[i].mouth;
    theNose.textContent = nft[i].nose;
    theEyes.textContent = nft[i].eyes;
    theEars.textContent = nft[i].ears;
    theHair.textContent = nft[i].hair;
}

//updateMetadata();

$("#mint").click(function() {
    updateMetadata();
})
