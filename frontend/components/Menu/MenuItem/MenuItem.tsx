import { Menu as PaperMenu } from "react-native-paper";
import React from "react";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem = (props: MenuItemProps) => {
    return <PaperMenu.Item {...props} />
}


