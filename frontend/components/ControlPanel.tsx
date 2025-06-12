import { ScriptExtension } from "@/shared/types";

import { Button, RadioButton, Text} from 'react-native-paper';
import { Fragment as ReactFragment, useState} from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SystemManager } from "@/core/system/SystemManager";

/**
 * Instead of this component use build tab.
 * @deprecated
 */
export const ControlPanel = () => {
    const [systemType, setSystemType] = useState<ScriptExtension>(ScriptExtension.windows);
    const handlePressDownload = () => {
        // Logic for downloading
    }

    return (
        <SafeAreaView style={styles.downloadContainer}>
            <Text variant="titleLarge" style={styles.label}>Select OS</Text>
            <RadioButton.Group onValueChange={value => setSystemType(value as ScriptExtension)} value={systemType}>
                <View style={styles.radioRow}>
                    {SystemManager.sysOptions.map(({value, label}) => (
                        <ReactFragment key={value}>
                            <RadioButton value={value}/>
                            <Text variant="bodyMedium">{label}</Text>
                        </ReactFragment>
                    ))}
                </View>
            </RadioButton.Group>
            <Button mode='outlined' icon="download" onPress={handlePressDownload}>Download</Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    downloadContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 50,
        justifyContent: 'flex-end',
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