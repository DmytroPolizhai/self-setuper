import {View} from "react-native";
import {Button} from 'react-native-paper'
import {FileBuilder} from "@/utils/files/FileBuilder";
import {SystemExtension} from "@/utils/system/types/SystemExtension";

export default function Test() {
    return (
        <View>
            <Button mode="contained" onPress={() => {
                const fileBuilder: FileBuilder = new FileBuilder();
                fileBuilder.newBuild({
                    links: ["test"],
                    fileName: "test",
                    extensionToBuild: SystemExtension.Windows
                }).then(r => {
                    console.log(r);
                })
            }}>
                Emulate file building
            </Button>
        </View>
    );
}