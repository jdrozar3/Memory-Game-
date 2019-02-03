/*
 * Create a list that holds all of your cards
 */



// ALL SELECTIONS
const cardList = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb", "fa fa-leaf", "fa fa-leaf"]
const cards = document.querySelectorAll('.card');
const ul = document.querySelector('.deck');
let openList = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



//SHUFFLE

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(cardList);


/*
 * set up the event listener for a card. If a card is clicked:   */
for (let card of cards) {
    card.addEventListener('click', () => {

    });
}





//ALL FUNCTIONS 


// function to toggle the cards
function callCards(openCard) {
    openCard.classList.toggle('open');
    openCard.classList.toggle('show');
}

/* I used let not const because the array is focused to 
every time the cards are clicked and the two cards that are going to be clicked 
will be pushed to this array */


function addAray(openCard) {
    openList.push(openCard);
}



// Function for matching if the first 2 index inside the array 'openList' matches

function closeCard(off) {
    off.classList.toggle('open');
    off.classList.toggle('show');
}
/*had to watch videos and do some google search to learn and fix the bugs in the matching part, especially the 
set timeout part, */
function matchCards() {
    if (openList[0].firstElementChild.className === openList[1].firstElementChild.className) {
        openList[0].classList.toggle('match');
        openList[1].classList.toggle('match');
        openList = [];

    } else {
        setTimeout(() => {
            closeCard(openList[0]);
            closeCard(openList[1]);
            openList = [];

        }, 1500);
    }

}



//MAIN EVENT HANDLER  - ALSO HAD TO DO SOME GOOGLE SEARCH TO FIX BUGS IN THE IF STATEMENT
ul.addEventListener('click', event => {
    const openCard = event.target;
    if (openCard.classList.contains('card') &&
        !openCard.classList.contains('match') &&
        openList.length < 2 &&
        !openList.includes(openCard)
    ) {


        callCards(openCard);
        addAray(openCard);
        if (openList.length === 2) {
            matchCards(openCard);
            increaseMoves();
        }
    }

});



//moves
let showMoves = 0;

function increaseMoves() {
    showMoves++;
    const movess = document.querySelector('.moves');
    movess.innerText = showMoves;
}




/*  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */