import { SystemExtension } from "@/utils/system/types/SystemExtension";

import { Button, RadioButton, Text } from 'react-native-paper';
import { useState, Fragment as ReactFragment } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SystemManager } from "@/utils/system/SystemManager";
import { FileDownloader } from "@/utils/files/FileDownloader";
import { FileBuilder } from "@/utils/files/FileBuilder";

export const ControlPanel = () => {
    const [systemType, setSystemType] = useState<SystemExtension>(SystemManager.currentSystemExtension);
    const [links, setLinks] = useState(['https://stable.dl2.discordapp.net/distro/app/stable/win/x64/1.0.9194/DiscordSetup.exe']);

    const handlePressDownload = () => {
        const fileBuilder = new FileBuilder(systemType);
        fileBuilder.build(links).then((file) => {
            FileDownloader.download(file)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
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
            <Button mode="contained" onPress={handlePressDownload}> Download</Button>
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