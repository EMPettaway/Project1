let gameCards = document.getElementsByClassName('game-card');
let gameCardsArray = [...gameCards];
let cardImgs = document.getElementsByClassName('game-card-img');
console.log(cardImgs);
let cardImageArray = Object.values(cardImgs)
const handleClick = (e) => {
    e.target.querySelector(".game-card-img").style.visibility = "visible"

}

cardImageArray.forEach(card => {
card.parentElement.addEventListener('click', handleClick)
})

// function to randomize cards

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//shuffle cards
let shuffledImages = shuffle(cardImageArray)
// }


for(i=0; i<shuffledImages.length; i++) {
    gameCards[i].appendChild(shuffledImages[i]);
    gameCards[i].appendChild(shuffledImages[i]);
    gameCards[i].type = `${shuffledImages[i].alt}`;
}

// Source for MyTimer function https://stackoverflow.com/questions/32141035/countdown-timer-using-moment-js-mmss-format

function MyTimer(callback, val) {
    val = val || 60; 
    var timer=setInterval(function() { 
        callback(val);
        if(val-- <= 0) { 
            clearInterval(timer); 
        } 
    }, 1000);
}
new MyTimer(function(val) {
    var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
    document.getElementById("timer").textContent = timerMsg; 
});

