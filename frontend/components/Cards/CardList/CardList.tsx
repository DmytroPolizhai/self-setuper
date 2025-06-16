import { useState } from 'react'

import { CardClean } from "@/components/Cards/CardClean/CardClean";
import { CardCleanTypes } from "@/components/Cards/CardClean/CardClean.types";


export const CardList = (props: CardListType) => {
    const [cards, setCards] = useState<CardCleanTypes[]>(props.cards)
    const deleteCard = (cardIndex: number) => {
        try {
            cards.forEach((card) => {
                if (card == cards[cardIndex]) {
                    setCards(prev => prev.filter((_, i) => i !== cardIndex));
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {cards.map((card, index) => (
                <CardClean key={index} onDelete={() => {
                    deleteCard(index);
                }} {...card}></CardClean>
            ))}
        </>
    )
}