import { Path } from "@/shared/types";

export type CardProps = {
    id: string,
    title: string,
    description?: string,
    imageUri?: Path,
    onDelete?: () => void,
    onEdit?: () => void,
    onUploadIcon?: () => void,
}