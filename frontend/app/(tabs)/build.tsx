import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Link, ScriptExtensionType } from "@/shared/types";
import { ScriptExtension } from "@/constants/Script";
import { CardView } from "@/components/Cards/";

import { Divider } from "react-native-paper";

export default function BuildTab() {
    const [links, setLinks] = useState<Link[]>([]);
    const [scriptExtension, setScriptExtension] =
        useState<ScriptExtensionType>(ScriptExtension.windows);

    return (
        <SafeAreaView style={styles.container}>
            <Divider />
            <CardView></CardView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
})