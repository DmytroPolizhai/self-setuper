import { Suspense } from 'react';
import { CustomScrollView } from "@/components/CustomScrollView/CustomScrollView";
import { LoadingIndicator } from "@/components/LoadingIndicator/LoadingIndicator";
import { CardProps, CardList } from "@/components/Cards";
import { generateArrayByLength } from "@/shared/utils/array";
import { generateUUID } from "@/shared/utils/uuid";

/**
 * Viewer for CardList
 * @see CardList
 * @constructor
 */
export const CardView = () => {
    // Remake by fetching in db. (axios)
    const cards = generateArrayByLength<CardProps>(10, i => ({
        id: generateUUID(),
        title: `Card ${i + 1}`,
    }))


    return (
        <CustomScrollView contentHeight={300} barBackgroundColor="transparent" barIsVisible={false}>
            <Suspense fallback={<LoadingIndicator/>}>
                <CardList cards={cards}></CardList>
            </Suspense>
        </CustomScrollView>
    );
}
