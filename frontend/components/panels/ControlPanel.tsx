import { SystemExtension } from "@/utils/system/types/SystemExtension";

import { Button, RadioButton, Text} from 'react-native-paper';
import { Fragment as ReactFragment, useState} from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SystemManager } from "@/utils/system/SystemManager";
import { FileDownloader } from "@/utils/files/FileDownloader";
import { FileBuilder } from "@/utils/files/FileBuilder";


export const ControlPanel = () => {
    const [systemType, setSystemType] = useState<SystemExtension>(SystemExtension.windows);
    const [links, setLinks] = useState([]);
    const handlePressDownload = () => {
        const fileBuilder = new FileBuilder();
        fileBuilder.build(links, systemType).then((file) => {
            FileDownloader.download(file)
        });
    }

    return (
        <SafeAreaView style={styles.downloadContainer}>
            <Text variant="titleLarge" style={styles.label}>Select OS</Text>
            <RadioButton.Group onValueChange={value => setSystemType(value as SystemExtension)} value={systemType}>
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