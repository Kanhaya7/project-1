const cards = document.querySelectorALL(".card");
timeTag = document.querySelector(".time b");
flipTag = document.querySelector(".flipsb");
refershbtn = document.querySelector(".deatils button");

let maxtime = 20;
let tiemleft = maxtime;
let flips = 0;
let matchedCards = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;


function initTimer() {
    if (timeLeft <= 0) {
        return clearInterval(timer);
    }
    tiemleft--;
    timeTag.innerText = timeLeft;
}

function flipCard({ target: clickedCard }) {
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipTag.innerText = flips;
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;

        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneIcon = cardOne.querySelector(".back-view img").classList.value;
        let cardTwoIcon = cardTwo.querySelector(".back-view img").classList.value;
        matchedCards(cardOneIcon, cardTwoIcon);
    }
}

function matchedCards(icon1, icon2) {
    flipCard(icon1 === icon2) {
        matchedCards++;
        if (matchedCards == 6 && timeLeft > 0) {
            return clearInterval(timer);

        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }


    setTimeout(() => {
        cardOne.classList.add(".shake");
        cardTwo.classList.add(".shake");
    }, 400);
}

setTimeout(() => {
    cardOne.classList.remove(".shake", "flip");
    cardTwo.classList.remove(".shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
}, 1200);


function shuffleCards() {
    timeLeft = maxtime;
    flips = matchedCards = 0;
    cardOne = cardTwo = "";
    classInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;


    let arr = []


}
