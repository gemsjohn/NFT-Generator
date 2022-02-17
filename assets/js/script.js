var theHead = document.querySelector("#head");
var theMouth = document.querySelector("#mouth");
var theEyes = document.querySelector("#eyes");
// var theNose = document.querySelector("#nose");
// var theEars = document.querySelector("#ears");
// var theHair = document.querySelector("#hair");

var theNFT = document.querySelector("#nft");

var head = [];
var mouth = [];
var eyes = [];
// var nose = [];
// var ears = [];
// var hair = [];

var nft = [];

var totalNfts = 5;
var count = 0;

var getRandomInt = function(max) {
    return Math.floor(Math.random() * max);
};

function updateMetadata() {
    for (var i = 0; i < totalNfts; i++) {
        head[i] = "head_" + i;
        mouth[i] = "mouth_" + i;
        eyes[i] = "eyes_" + i;
        // nose[i] = "nose_" + i;
        // ears [i] = "ears" + i;
        // hair[i] = "hair" + i;
    }
    for (var i = 0; i < totalNfts; i++) {
        nft[i] = {
            head: head[getRandomInt(totalNfts)], 
            mouth: mouth[getRandomInt(totalNfts)],
            eyes: eyes[getRandomInt(totalNfts)]
            // nose: nose[getRandomInt(totalNfts)], 
            // ears: ears[getRandomInt(totalNfts)], 
            // hair: hair[getRandomInt(totalNfts)]    
        }
    }
    reveal();
};

function reveal() {
    if (count) {
        var remove = count - 1;
        $('[data-img="' + remove + '"]').remove();
    }
    var i = getRandomInt(totalNfts);
    theHead.textContent = nft[i].head;
    theMouth.textContent = nft[i].mouth;
    theEyes.textContent = nft[i].eyes;
    // theNose.textContent = nft[i].nose;
    // theEars.textContent = nft[i].ears;
    // theHair.textContent = nft[i].hair;
    var appendNFT = document.createElement("div");
    appendNFT.setAttribute("data-img", count)
    appendNFT.innerHTML = "<img class='head' src='./assets/img/head/" + nft[i].head + ".png' /> <img class='eyes' src='./assets/img/eyes/" + nft[i].eyes + ".png' /> <img class='mouth' src='./assets/img/mouth/" + nft[i].mouth + ".png'/ >";
    theNFT.appendChild(appendNFT);
    count++;
}

$("#mint").click(function() {
    updateMetadata();
})
