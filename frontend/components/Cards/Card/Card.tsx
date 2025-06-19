import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card as PaperCard, Text, Button } from "react-native-paper";

import { ResponsiveImage } from "@/components/ResponsiveImage/ResponsiveImage"
import { Menu } from '@/components/Menu/Menu'
import { Icon, IconPicker } from '@/shared/utils/pickers/'

import { CardProps } from "./Card.types";

import { isCompletedType } from "@/shared/utils/typeOperations";

/**
 * **Just clean card. Use CardViewer to control card logic.**
 * @param props
 * @constructor
 */
export const Card = (props: CardProps) => {
    const [icon, setIcon] = useState<Icon>({
        uri: props.imageUri
    })

    const onCardDelete = () => {
        console.log("Deleting:", props);
        props.onDelete?.();
    };

    const onCardEdit = () => {
        console.log("Editing:", props);
        props.onEdit?.();
    };

    const onUploadIcon = () => {
        console.log("Uploading image for:", props);
        const iconPicker = new IconPicker();
        iconPicker.pick()?.then(icon => {
            if (isCompletedType(icon)) {
                setIcon(icon);
            }
            else {
                console.error("Icon is not full completed: ", icon);
            }
        });
        props.onUploadIcon?.();
    };

    return (
        <PaperCard style={styles.card}>
            <View style={styles.row}>
                <ResponsiveImage
                    source={{uri: icon?.uri }}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text variant="titleLarge" style={styles.title}>{props.title}</Text>
                    <Text variant="bodyMedium" style={styles.description}>{props.description}</Text>


                    <View style={styles.menuContainer}>
                        <Button mode="contained">Download</Button>
                        <Menu>
                            <Menu.Item onPress={onUploadIcon} title="Upload Icon" leadingIcon="upload"/>
                            <Menu.Item onPress={onCardEdit} title="Edit" leadingIcon="pencil"/>
                            <Menu.Item onPress={onCardDelete} title="Delete" leadingIcon="trash-can"/>
                        </Menu>
                    </View>
                </View>
            </View>
        </PaperCard>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        flexShrink: 0,
        borderRadius: 8,
        margin: 10,
    },
    content: {
        marginLeft: "5%",
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        marginBottom: 4,
    },
    description: {
        marginBottom: 8,
    },
    menuContainer: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-end',
    }
});