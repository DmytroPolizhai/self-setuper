import { ScrollViewProps } from "react-native";
import React from "react";

export type CustomScrollViewType = ScrollViewProps & {
    children: React.ReactNode;
    contentHeight: number; // total height of the scrollable content (approximate)
    visibleRatio?: number; // portion of screen taken up by scroll thumb
    barColor?: string;
    barBackgroundColor?: string;
    barIsVisible?: boolean;
}
