import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal, Dialog, Button, Text, RadioButton, List, Divider } from 'react-native-paper';
import { ActionDialogProps } from "@/components/Dialog/Dialog.types";


export const DialogAction = ({
                                         visible,
                                         onDismiss,
                                         title,
                                         listItems = [],
                                         radioOptions = [],
                                         radioValue,
                                         onRadioChange,
                                         onConfirm,
                                         confirmLabel = 'OK',
                                         cancelLabel = 'Cancel',
                                         showCancel = true,
                             }: ActionDialogProps) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    {listItems.length > 0 && (
                        <List.Section>
                            {listItems.map(({title, description}, i) => (
                                <List.Item key={i} title={title} description={description}/>
                            ))}
                        </List.Section>
                    )}

                    {listItems.length > 0 && radioOptions.length > 0 && <Divider style={{marginVertical: 10}}/>}

                    {radioOptions.length > 0 && (
                        <>
                            <Text variant="titleLarge" style={styles.label}>Select Option</Text>
                            <RadioButton.Group onValueChange={onRadioChange} value={radioValue}>
                                <View style={styles.radioRow}>
                                    {radioOptions.map(({value, label}) => (
                                        <React.Fragment key={value}>
                                            <RadioButton value={value}/>
                                            <Text variant="bodyMedium">{label}</Text>
                                        </React.Fragment>
                                    ))}
                                </View>
                            </RadioButton.Group>
                        </>
                    )}
                </Dialog.Content>

                <Dialog.Actions>
                    {showCancel && <Button onPress={onDismiss}>{cancelLabel}</Button>}
                    {onConfirm && <Button onPress={onConfirm}>{confirmLabel}</Button>}
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 8,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
    },
});
