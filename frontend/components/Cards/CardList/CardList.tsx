import { useState } from 'react'

import { Card } from "@/components/Cards/Card/Card";
import { CardListProps } from "@/components/Cards/CardList/CardList.types";
import { CardProps } from "@/components/Cards";

export const CardList = (props: CardListProps) => {
    const [cards, setCards] = useState<typeof props.cards>(props.cards)

    const deleteCard = ({ id }: CardProps) => {
        try {
            setCards(prev => prev.filter(card => card.id !== id));
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {cards.map((card) => (
                <Card key={card.id} onDelete={() => {
                    deleteCard(card);
                }} {...card}></Card>
            ))}
        </>
    )
}