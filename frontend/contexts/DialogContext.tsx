import { createContext } from "react";
import { DialogConfig } from "@/components/dialog/types/DialogTypes";

type DialogContextType = {
    openDialog: (config: DialogConfig) => void;
    closeDialog: () => void;
};

export const DialogContext = createContext<DialogContextType | undefined>(undefined);
