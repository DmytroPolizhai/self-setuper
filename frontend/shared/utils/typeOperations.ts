/**
 * Checks if all fields of type was filled.
 * @param ref - reference to object
 */
export function isCompletedType<T extends {}>(ref: T): ref is Required<T> {
    return Object.values(ref).every(value => value !== undefined);
}