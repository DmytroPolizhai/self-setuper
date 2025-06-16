import { DialogContext } from '@/contexts/DialogContext'
import { DialogConfig } from "./Dialog.types";
import { DialogAction } from "@/components/Dialog/DialogAction";


import React, { useState, ReactNode } from 'react';


export function DialogProvider({children}: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [config, setConfig] = useState<DialogConfig | null>(null);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

    const openDialog = (cfg: DialogConfig) => {
        setConfig(cfg);
        setSelectedValue(cfg.radioValue);
        setVisible(true);
    };

    const closeDialog = () => {
        setVisible(false);
        setConfig(null);
        setSelectedValue("");
    };

    const handleConfirm = () => {
        if (config?.onConfirm) {
            config.onConfirm(selectedValue);
        }
        closeDialog();
    };

    return (
        <DialogContext.Provider value={{openDialog, closeDialog}}>
            {children}

            {config && (
                <DialogAction
                    visible={visible}
                    onDismiss={closeDialog}
                    title={config.title}
                    listItems={config.listItems}
                    radioOptions={config.radioOptions}
                    radioValue={selectedValue}
                    onRadioChange={setSelectedValue}
                    onConfirm={handleConfirm}
                    confirmLabel={config.confirmLabel}
                    cancelLabel={config.cancelLabel}
                    showCancel={config.showCancel}
                />
            )}
        </DialogContext.Provider>
    );
}