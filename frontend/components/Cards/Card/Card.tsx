import { Card as PaperCard, Text, Button } from "react-native-paper";
import { View, Image, StyleSheet } from 'react-native';

import { Menu } from '@/components/Menu/Menu'
import { CardProps } from "./Card.types";

/**
 * **Just clean card. Use CardViewer to control card logic.**
 * @param props
 * @constructor
 */
export const Card = (props: CardProps) => {
    const onCardDelete = () => {
        console.log("Deleting:", props);
        props.onDelete?.();
    };

    const onCardEdit = () => {
        console.log("Editing:", props);
        props.onEdit?.();
    };

    const onImageUpload = () => {
        console.log("Uploading image for:", props);

        // const imageUploader = new ImageUploader();
        // const newImage: Image = imageUploader.loadImage();
        //
        // props.imageUri = newImage.uri;

        props.onUploadImage?.();
    };

    return (
        <PaperCard style={styles.card}>
            <View style={styles.row}>
                <Image
                    source={{uri: props.imageUri}}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text variant="titleLarge" style={styles.title}>{props.title}</Text>
                    <Text variant="bodyMedium" style={styles.description}>{props.description}</Text>


                    <View style={styles.menuContainer}>
                        <Button mode="contained">Download</Button>
                        <Menu>
                            <Menu.Item onPress={onImageUpload} title="Upload Image" leadingIcon="upload"/>
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
        width: 100,
        height: 100,
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