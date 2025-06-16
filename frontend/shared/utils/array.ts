/**
 * Generate array with specific length with custom logic when is iterating.
 * @param maxLength max length of array
 * @param factory logic for generating
 */
export function generateArrayByLength<T>(maxLength: number, factory: (index: number) => T): T[] {
    return Array.from({length: maxLength}, (_, i) => factory(i));
}