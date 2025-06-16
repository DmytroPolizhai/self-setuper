import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Systems } from '@/constants/Systems';

interface ScriptExtensionSelectorProps {
    value: string;
    onValueChange: (value: string) => void;
}

export const ScriptExtensionSelector: FC<ScriptExtensionSelectorProps> = (props: ScriptExtensionSelectorProps) => {
    return (
        <RadioButton.Group onValueChange={props.onValueChange} value={props.value}>
            <View style={styles.radioRow}>
                {Object.entries(Systems).map(([key, system]) => (
                    <View key={key} style={styles.radioItem}>
                        <RadioButton value={system.scriptExtension}/>
                        <Text variant="bodyMedium">{system.description}</Text>
                    </View>
                ))}
            </View>
        </RadioButton.Group>
    );
};

const styles = StyleSheet.create({
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 8,
    },
});
