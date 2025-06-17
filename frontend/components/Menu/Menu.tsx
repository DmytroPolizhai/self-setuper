import React from 'react'

import { useState } from "react";
import { Menu as PaperMenu, IconButton } from 'react-native-paper';
import { StyleSheet } from "react-native";
import { Props } from "./Menu.types";
import { MenuItem } from "./MenuItem/MenuItem";

export const Menu = (props: Props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <PaperMenu
            style={styles.menuBox}
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
                <IconButton
                    icon="dots-vertical"
                    size={24}
                    onPress={openMenu}
                />
            }>
            {props.children}
        </PaperMenu>
    );
}

Menu.Item = MenuItem;

const styles = StyleSheet.create({
    menuBox: {
        flex: 1,
        borderRadius: 10,
    }
})
