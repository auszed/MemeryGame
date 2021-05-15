document.addEventListener('DOMContentLoaded', () =>{
    //card options array 
    const cardArray = [
        {
            name: 'meme_1',
            img: 'img/meme_1.png'
        },
        {
            name: 'meme_2',
            img: 'img/meme_2.png'
        },
        {
            name: 'meme_3',
            img: 'img/meme_3.png'
        },
        {
            name: 'meme_4',
            img: 'img/meme_4.png'
        },
        {
            name: 'meme_5',
            img: 'img/meme_5.png'
        },
        {
            name: 'meme_6',
            img: 'img/meme_6.png'
        },
        {
            name: 'meme_7',
            img: 'img/meme_7.png'
        },
        {
            name: 'meme_8',
            img: 'img/meme_8.png'
        },
        {
            name: 'meme_9',
            img: 'img/meme_9.png'
        },
        {
            name: 'meme_10',
            img: 'img/meme_10.png'
        },
        {
            name: 'meme_11',
            img: 'img/meme_11.png'
        },
        {
            name: 'meme_12',
            img: 'img/meme_12.png'
        },
        {
            name: 'meme_13',
            img: 'img/meme_13.png'
        },
        {
            name: 'meme_14',
            img: 'img/meme_14.png'
        },
        {
            name: 'meme_15',
            img: 'img/meme_15.png'
        },
        {
            name: 'meme_16',
            img: 'img/meme_16.png'
        },
        {
            name: 'meme_17',
            img: 'img/meme_17.png'
        },
        {
            name: 'meme_18',
            img: 'img/meme_18.png'
        },
        {
            name: 'meme_19',
            img: 'img/meme_19.png'
        },
        {
            name: 'meme_20',
            img: 'img/meme_20.png'
        },
        {
            name: 'meme_1',
            img: 'img/meme_1.png'
        },
        {
            name: 'meme_2',
            img: 'img/meme_2.png'
        },
        {
            name: 'meme_3',
            img: 'img/meme_3.png'
        },
        {
            name: 'meme_4',
            img: 'img/meme_4.png'
        },
        {
            name: 'meme_5',
            img: 'img/meme_5.png'
        },
        {
            name: 'meme_6',
            img: 'img/meme_6.png'
        },
        {
            name: 'meme_7',
            img: 'img/meme_7.png'
        },
        {
            name: 'meme_8',
            img: 'img/meme_8.png'
        },
        {
            name: 'meme_9',
            img: 'img/meme_9.png'
        },
        {
            name: 'meme_10',
            img: 'img/meme_10.png'
        },
        {
            name: 'meme_11',
            img: 'img/meme_11.png'
        },
        {
            name: 'meme_12',
            img: 'img/meme_12.png'
        },
        {
            name: 'meme_13',
            img: 'img/meme_13.png'
        },
        {
            name: 'meme_14',
            img: 'img/meme_14.png'
        },
        {
            name: 'meme_15',
            img: 'img/meme_15.png'
        },
        {
            name: 'meme_16',
            img: 'img/meme_16.png'
        },
        {
            name: 'meme_17',
            img: 'img/meme_17.png'
        },
        {
            name: 'meme_18',
            img: 'img/meme_18.png'
        },
        {
            name: 'meme_19',
            img: 'img/meme_19.png'
        },
        {
            name: 'meme_20',
            img: 'img/meme_20.png'
        }              
    ]
// ------------------------------------------------------------------
   
// ramdomaize the order
    cardArray.sort(() => 0.5 - Math.random());

// ------------------------------------------------------------------
    //selecting the class
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const  indicadorDisplay = document.querySelector('#indicador')
    const scoreSelector = document.querySelector('#score');
    const exit = document.querySelector('.exit')
    const counterClicks = document.querySelector('#counterClicks')
    const counterCircle = document.querySelector('.counter')
    
    
    cardChosen  = []
    cardChosenID = []
    cardWon = []
    arrayClicks = []


// ------------------------------------------------------------------
//create your board
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        //we create the tag image
        let card = document.createElement('img')
        // we add some atributes to the tag
        card.setAttribute('src', 'img/context.png')
        // we give a unique ID
        card.setAttribute('data-id', i)
        // we flip the card with the function flipcard
        card.addEventListener('click', flipCard)

        grid.appendChild(card)

        
        
    }
}

// ------------------------------------------------------------------
//check for matches
function checkMatch(){
    //we select the image
    let cards = document.querySelectorAll('img')
    // we select the pair selected
    const optionOneId = cardChosenID[0]
    const optionTwoId = cardChosenID[1]
    if (cardChosen[0] === cardChosen[1]){
        
        indicadorDisplay.textContent = "Match"
        //atribute
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].style.pointerEvents = "none"
        cards[optionTwoId].style.pointerEvents = "none"
        cardWon.push(cardChosen)
        arrayClicks.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'img/context.png')
        cards[optionTwoId].setAttribute('src', 'img/context.png')
        indicadorDisplay.textContent = "Try again"
        arrayClicks.push(cardChosen)
    }

    // we clear the memoty of boths arrays
    cardChosen  = []
    cardChosenID = []  

    //the value of resultDisplay is getting from cardWon
    resultDisplay.textContent = cardWon.length
    //counter of clicks
    counterClicks.textContent = arrayClicks.length
    
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textContent = ""
        indicadorDisplay.textContent = ""
        scoreSelector.textContent = "congratulations you found them"

        
        let buttonEnd = document.createElement("button") 
        let aRef = document.createElement("a")
        let div = document.createElement("div")
        aRef.setAttribute('href', '../index.html')
        aRef.textContent = "Return to the menu"
        div.textContent = "You get it done with " + arrayClicks.length + " Click's"
        div.classList.add('textDiv')

        exit.appendChild(buttonEnd)
        buttonEnd.appendChild(aRef)
        buttonEnd.append(div)
        //delete the grid
        grid.style.display = "none"
        exit.style.display = "flex"
        counterCircle.style.display = "none"
        
    }
}

// ------------------------------------------------------------------
//flip your cards
function flipCard(){
    //getting the data of the attribute
    let cardId = this.getAttribute('data-id')
    //we will push the name of the  card with the id
    cardChosen.push(cardArray[cardId].name)
    //we will get an id
    cardChosenID.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)

    //check if the selected cards are equal 
    if (cardChosen.length === 2){
        //if both cards are equal run this
        setTimeout(checkMatch, 400)
    }
}

//run the proyect
createBoard()


    

})



