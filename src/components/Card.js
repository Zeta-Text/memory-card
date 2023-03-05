import React, { useState } from "react";

const Card = ({ updateScore, resetScore }) => {

    const initialState =     
    [
        {
        kanji: "水", 
        definition: "water", 
        clicked: false, 
    },
    {
        kanji: "火", 
        definition: "fire",
        clicked: false
    },
    {
        kanji: "砂", 
        definition: "sand",
        clicked: false
    },
    {
        kanji: "風", 
        definition: "wind",
        clicked: false
    },
    {
        kanji: "氷", 
        definition: "ice",
        clicked: false
    },
    {
        kanji: "海", 
        definition: "sea",
        clicked: false
    }
    ]
    
    const [arrOfKanji, setArrOfKanji] = useState(initialState)

    function handleClick(definition) {

        for(let i=0; i < arrOfKanji.length;i++) {
            let targetDef = arrOfKanji[i].definition
            let targetClick = arrOfKanji[i].clicked
            if( targetDef == definition && targetClick == true) {
                resetScore()
                setArrOfKanji(initialState)
                return
            }
        }

        const newArr = arrOfKanji.map((element) => {
            if(element.definition == definition) {
                updateScore()
                return {...element, clicked: true}
            } else {
                return element
            }
        })

        const shuffledArr = shuffle(newArr)
        setArrOfKanji(shuffledArr)
        
    }

    function shuffle(arrOfKanji) {
        let currentIndex = arrOfKanji.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arrOfKanji[currentIndex], arrOfKanji[randomIndex]] = [
                arrOfKanji[randomIndex], arrOfKanji[currentIndex]
            ]
        }
        return arrOfKanji
    }


    const printCards = arrOfKanji.map((card) => 

        <div className="wrapper" onClick={ () => { handleClick(card.definition) }}>
            <div className="kanji">{card.kanji}</div>
            <div className="def">{card.definition}</div>
            
        </div>
        
        );


    return (
        <div className="card">
            {printCards}
        </div>

    );
}

export default Card;



