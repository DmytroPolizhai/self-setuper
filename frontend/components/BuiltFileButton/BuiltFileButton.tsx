import { Button } from "react-native-paper";
import { ScriptBuilder } from "@/core/script/ScriptBuilder";
import { ScriptExtensionType } from "@/shared/types";
import { ScriptDownloader } from "@/core/script/ScriptDownloader";
import { Link } from '@/shared/types'
import { StyleSheet } from "react-native";

type BuiltFileButtonProps = {
    fileName?: string,
    links: Link[],
    scriptExtension: ScriptExtensionType,
    text: string,
}

/**
 * Button which can generate file from props
 * @constructor
 */
export const BuiltFileButton = (props: BuiltFileButtonProps) => {

    function handleDownloadPress() {
        const scriptBuilder: ScriptBuilder = new ScriptBuilder();
        console.log("Building file...")
        scriptBuilder.build({
            links: props.links,
            fileName: props.fileName ? props.fileName : "setup",
            extensionToBuild: props.scriptExtension,
        })
            .then(file => {
                console.log("Downloading file...", file);
                ScriptDownloader.download(file);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Button mode="contained" onPress={handleDownloadPress} style={styles.button}>
            {props.text}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
    }
})