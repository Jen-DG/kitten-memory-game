document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [
        {
            name: 'kitten1',
            img: 'images/kitten1.png'
        },

        {
            name: 'kitten1',
            img: 'images/kitten1.png'
        },

        {
            name: 'kitten2',
            img: 'images/kitten2.png'
        },

        {
            name: 'kitten2',
            img: 'images/kitten2.png'
        },

        {
            name: 'kitten3',
            img: 'images/kitten3.png'
        },

        {
            name: 'kitten3',
            img: 'images/kitten3.png'
        },


        {
            name: 'kitten4',
            img: 'images/kitten4.png'
        },

        {
            name: 'kitten4',
            img: 'images/kitten4.png'
        },

        {
            name: 'kitten5',
            img: 'images/kitten5.png'
        },

        {
            name: 'kitten5',
            img: 'images/kitten5.png'
        },

        {
            name: 'kitten6',
            img: 'images/kitten6.png'
        },

        {
            name: 'kitten6',
            img: 'images/kitten6.png'
        },


    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create the board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/back.jpg')
        cards[optionTwoId].setAttribute('src', 'images/back.jpg')
        alert('You clicked the same picture!')
    } 
    else if(cardsChosen[0] === cardsChosen[1]) {
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src', 'images/empty.jpg')
        cards[optionTwoId].setAttribute('src', 'images/empty.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/back.jpg')
        cards[optionTwoId].setAttribute('src', 'images/back.jpg')
        alert('Sorry, try again')
      }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations!! You won!!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()


})