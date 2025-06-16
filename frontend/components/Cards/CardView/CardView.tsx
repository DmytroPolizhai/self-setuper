import { Suspense } from 'react';
import { CardList } from "../CardList/CardList";
import { CustomScrollView } from "@/components/CustomScrollView/CustomScrollView";
import { LoadingIndicator } from "@/components/LoadingIndicator/LoadingIndicator";
import { generateArrayByLength } from "@/shared/utils/array";

/**
 * Viewer for CardList
 * @see CardList
 * @constructor
 */
export const CardView = () => {
    const cards = generateArrayByLength<{ title: string, description: string }>(10, i => ({
        title: `Card ${i + 1}`,
        description: `Description for card ${i + 1}`,
    }))


    return (
        <CustomScrollView contentHeight={300} barBackgroundColor="transparent" barIsVisible={false}>
            <Suspense fallback={<LoadingIndicator/>}>
                <CardList cards={cards}></CardList>
            </Suspense>
        </CustomScrollView>
    );
}
