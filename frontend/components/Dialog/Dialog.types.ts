export type ListItem = {
    title: string;
    description?: string;
};

export type RadioOption = {
    value: string;
    label: string;
};

export type ActionDialogProps = {
    visible: boolean;
    onDismiss: () => void;
    title: string;
    listItems?: ListItem[];
    radioOptions?: RadioOption[];
    radioValue: string;
    onRadioChange: (value: string) => void;
    onConfirm?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
    showCancel?: boolean;
};

export type DialogConfig = {
    title: string;
    listItems?: ListItem[];
    radioOptions?: RadioOption[];
    radioValue?: string;
    onConfirm?: (selectedValue?: string) => void;
    confirmLabel?: string;
    cancelLabel?: string;
    showCancel?: boolean;
};
