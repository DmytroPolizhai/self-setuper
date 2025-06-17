export type CardProps = {
    id: string,
    title: string,
    description?: string,
    imageUri?: string,
    onDelete?: () => void,
    onEdit?: () => void,
    onUploadImage?: () => void,
}