import { StyleSheet, View } from 'react-native';
import { CardPanel } from '@/components/CardPanel'
import { DialogProvider } from "@/components/dialog/DialogProvider";
import { Provider } from "react-native-paper";

export default function Home() {
    return (
        <Provider>
            <View style={styles.container}>
                <DialogProvider>
                    <CardPanel/>
                </DialogProvider>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
