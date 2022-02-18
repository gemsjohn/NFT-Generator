var theBody = document.querySelector("#body");
var theEyes = document.querySelector("#eyes");
var theHair = document.querySelector("#hair");
// var theNose = document.querySelector("#nose");
// var theEars = document.querySelector("#ears");
// var theHair = document.querySelector("#hair");

var theNFT = document.querySelector("#nft");

var body = [];
var eyes = [];
var hair = [];
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
        body[i] = "body_" + i;
        eyes[i] = "eyes_" + i;
        hair[i] = "hair_" + i;
        // nose[i] = "nose_" + i;
        // ears [i] = "ears" + i;
        // hair[i] = "hair" + i;
    }
    for (var i = 0; i < totalNfts; i++) {
        nft[i] = {
            body: body[getRandomInt(totalNfts)], 
            eyes: eyes[getRandomInt(totalNfts)],
            hair: hair[getRandomInt(totalNfts)]
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
    theBody.textContent = nft[i].body;
    theEyes.textContent = nft[i].eyes;
    theHair.textContent = nft[i].hair;
    // theNose.textContent = nft[i].nose;
    // theEars.textContent = nft[i].ears;
    // theHair.textContent = nft[i].hair;
    var appendNFT = document.createElement("div");
    appendNFT.setAttribute("data-img", count)
    appendNFT.innerHTML = "<img class='body' src='./assets/ape/body/" + nft[i].body + ".png' /> <img class='body' src='./assets/ape/face.png' /> <img class='hair' src='./assets/ape/hair/" + nft[i].hair + ".png' /> <img class='eyes' src='./assets/ape/eyes/" + nft[i].eyes + ".png'/ >";
    theNFT.appendChild(appendNFT);
    count++;
}

$("#mint").click(function() {
    updateMetadata();
})
