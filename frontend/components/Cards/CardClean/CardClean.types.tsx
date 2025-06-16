export type CardCleanTypes = {
    title: string,
    description?: string,
    imageUri?: string,
    onDelete?: () => void,
    onEdit?: () => void,
    onUploadImage?: () => void,
}