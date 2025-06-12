import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { BuiltFileButton } from "@/components/buttons/BuiltFileButton";
import { Link, ScriptExtensionType } from "@/shared/types";
import { ScriptExtensionSelector } from "@/components/ScriptExtensionSelector";
import { ScriptExtension } from "@/constants/Script";

export default function BuildTab() {
    const [links, setLinks] = useState<Link[]>([]);
    const [scriptExtension, setScriptExtension] =
        useState<ScriptExtensionType>(ScriptExtension.windows);

    return (
        <SafeAreaView style={styles.container}>
            <ScriptExtensionSelector value={scriptExtension} onValueChange={value => {
                setScriptExtension(value);
            }}/>
            <BuiltFileButton
                links={["https://stable.dl2.discordapp.net/distro/app/stable/win/x64/1.0.9195/DiscordSetup.exe"]}
                scriptExtension={scriptExtension} text="Download"></BuiltFileButton>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
})