import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { Link, ScriptExtensionType } from "@/shared/types";
import { ScriptExtension } from "@/constants/Script";
import { CardView } from "@/components/Cards/CardView/CardView";


export default function BuildTab() {
    const [links, setLinks] = useState<Link[]>([]);
    const [scriptExtension, setScriptExtension] =
        useState<ScriptExtensionType>(ScriptExtension.windows);

    return (
        <SafeAreaView style={styles.container}>
            <CardView></CardView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
})