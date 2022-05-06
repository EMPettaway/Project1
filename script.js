let gameCards = document.getElementsByClassName('game-card');
let gameCardsArray = [...gameCards];
let cardImgs = document.getElementsByClassName('game-card-img');
console.log(cardImgs);
let cardImageArray = Object.values(cardImgs)
const handleClick = (e) => {
    e.target.querySelector(".game-card-img").style.visibility = "visible"
    // console.log(e.target.style.visibility)
}

cardImageArray.forEach(card => {
card.parentElement.addEventListener('click', handleClick)
})

// console.log(cardImageArray);


let cardImgsArray = [...cardImgs];
let openedCards = [];
let matchedCards = [];

// function startGame()

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

// let startButton = document.getElementsByClassName('start');

// document.querySelector('.start').addEventListener('')

// function startGame() 



//shuffle cards
let shuffledImages = shuffle(cardImageArray)
// }


for(i=0; i<shuffledImages.length; i++) {
    //remove all images from previous games from each card (if any)
    // gameCards[i].innerHTML = "";
    gameCards[i].appendChild(shuffledImages[i]);
    
    // add the shuffled images to each card
    gameCards[i].appendChild(shuffledImages[i]);
    gameCards[i].type = `${shuffledImages[i].alt}`;
    
    //remove all extra classes for game play
    gameCards[i].classList.remove("show", "open", "match", "disabled");
    gameCards[i].children[0].classList.remove("show-img");
}



//     //listen for events on the cards
//     for(let i = 0; i < gameCardsArray.length; i++) {
//         gameCardsArray[i].addEventListener("click", displayCard)
//     }

//     // function flashCards() {
//     //     for(i=0; i<gameCards.length; i++) {
//     //         gameCards[i].children[0].classList.add("show-img")
//     //     }
//     //     setTimeout(function(){
//     //         for(i=0; i<gameCards.length; i++) {
//     //             gameCards[i].children[0].classList.remove("show-img")
//     //         }
//     //     }, 1000)
//     // }
    
//     function displayCard() {
//         this.children[0].classList.toggle('show-img');
//         this.classList.toggle("open");
//         this.classList.toggle("show");
//         this.classList.toggle("disabled");
//         cardOpen(this);
//     }
    
//     function cardOpen(card) {
//         openedCards.push(card);
//         let len = openedCards.length;
//         // if(len === 2) {
//         //     moveCounter();
//         //     if(openedCards[0].type === openedCards[1].type) {
//         //         matched();
//         //     } else {
//         //         unmatched();
//         //     }
//         //

// function cardOpen(card) {
//     openedCards.push(card);
//     let len = openedCards.length;
//     if(len === 2) {
//         moveCounter();
//         if(openedCards[0].type === openedCards[1].type) {
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// }

// function matched() {
//     openedCards[0].classList.add("match");
//     openedCards[1].classList.add("match");
//     openedCards[0].classList.remove("show", "open");
//     openedCards[1].classList.remove("show", "open");
//     matchedCards.push(openedCards[0]);
//     matchedCards.push(openedCards[1]);
//     openedCards = [];
//     if(matchedCards.length == 16) {
//         endGame();
//     }
// }

// function unmatched() {
//     openedCards[0].classList.add("unmatched");
//     openedCards[1].classList.add("unmatched");
//     disable();
//     setTimeout(function() {
//         openedCards[0].classList.remove("show", "open", "unmatched");
//         openedCards[1].classList.remove("show", "open", "unmatched");
//         openedCards[0].children[0].classList.remove('show-img');
//         openedCards[1].children[0].classList.remove('show-img');
//         enable();
//         openedCards = [];
        
//     }, 1100)
// }

// function disable() {
//     gameCardsArray.filter((card, i, gameCardsArray) => {
//         card.classList.add('disabled');
//     })
// }

// function enable() {
//     gameCardsArray.filter((card, i, gameCardsArray) => {
//         card.classList.remove('disabled');
//         for(let i=0; i<matchedCards.length; i++) {
//             matchedCards[i].classList.add('disabled');
//         }
//     })
// }
