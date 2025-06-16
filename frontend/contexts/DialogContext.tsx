import { createContext } from "react";
import { DialogConfig } from "@/components/Dialog/Dialog.types";

type DialogContextType = {
    openDialog: (config: DialogConfig) => void;
    closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | undefined>(undefined);
