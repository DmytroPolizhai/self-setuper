import React, { useRef } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Dimensions,
} from 'react-native';

import { CustomScrollViewType } from './CustomScrollView.types'
import { Colors } from "@/constants/schemes/red/Colors";

import { Color } from "@/shared/types"

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

/**
 * Custom, universal scroll view for lists.
 * @param children
 * @param contentHeight {number * number} height of children's element (approximately)
 * @param visibleRatio {number} ratio which is used in visibility
 * @param barColor {Color} color of the bar
 * @param barBackgroundColor {Color} background color of the bar
 * @param barIsVisible {boolean} bar is visible or not
 * @param props {CustomScrollViewType} others props
 * @constructor
 *
 * @example
 * <CustomScrollView contentHeight={300} barBackgroundColor="transparent" barIsVisible={false}>
 *     <Child1></Child1>
 *     <Child2></Child2>
 *     <Child3></Child3>
 * </CustomScrollView>
 */

export const CustomScrollView = ({
                                     children,
                                     contentHeight,
                                     visibleRatio = 0.15,
                                     barColor = Colors.dark.backdrop,
                                     barBackgroundColor = Colors.dark.onBackground,
                                     barIsVisible = true,
                                     ...props
                                 }: CustomScrollViewType) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const scrollIndicatorSize = scrollY.interpolate({
        inputRange: [0, contentHeight],
        outputRange: [
            SCREEN_HEIGHT * visibleRatio,
            SCREEN_HEIGHT * visibleRatio * 0.7,
        ],
        extrapolate: 'clamp',
    });

    const translateY = Animated.multiply(
        scrollY,
        SCREEN_HEIGHT / contentHeight
    );

    return (
        <View style={styles.wrapper}>
            <View style={styles.scrollRow}>
                <Animated.ScrollView
                    {...props}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: false}
                    )}
                    scrollEventThrottle={16}
                >
                    {children}
                </Animated.ScrollView>

                {/* Custom Scrollbar */}
                {barIsVisible &&
                    <View style={[styles.scrollBarContainer, {backgroundColor: barBackgroundColor}]}>
                        <Animated.View
                            style={[
                                styles.scrollBarThumb,
                                {
                                    backgroundColor: barColor,
                                    height: scrollIndicatorSize,
                                    transform: [{translateY}],
                                },
                            ]}
                        />
                    </View>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    scrollRow: {
        flexDirection: 'row',
        flex: 1,
    },
    scrollBarContainer: {
        width: 10,
        borderRadius: 3,
        marginVertical: 8,
    },
    scrollBarThumb: {
        width: 6,
        borderRadius: 3,
    },
});

