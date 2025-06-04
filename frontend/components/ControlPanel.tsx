import { OSType } from "@/models/OSType";
import { buildFile } from "@/utils/Builder";

import { Button, RadioButton, Text } from 'react-native-paper';
import { useState, Fragment as ReactFragment } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";


const SYS_OPTIONS = [
    {label: "Windows", value: OSType.windows},
    {label: "Linux", value: OSType.linux},
    {label: "MacOS", value: OSType.macOs},
];

export const ControlPanel = () => {
    const [preferredOsType, setPreferredOsType] = useState<OSType>(OSType.windows);

    const handlePressDownload = () => {
        return buildFile([''], preferredOsType);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text variant="titleLarge" style={styles.label}>Select OS</Text>
            <RadioButton.Group onValueChange={value => setPreferredOsType(value as OSType)} value={preferredOsType}>
                <View style={styles.radioRow}>
                    {SYS_OPTIONS.map(({value, label}) => (
                        <ReactFragment key={value}>
                            <RadioButton value={value}/>
                            <Text variant="bodyMedium">{label}</Text>
                        </ReactFragment>
                    ))}
                </View>
            </RadioButton.Group>
            <Button mode="contained" onPress={handlePressDownload}>Download</Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    label: {
        marginBottom: 8,
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    button: {
        marginTop: 24,
    },
});