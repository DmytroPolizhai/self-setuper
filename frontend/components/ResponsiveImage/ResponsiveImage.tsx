import { useEffect, useState } from "react";
import { Image, Dimensions, ScaledSize } from "react-native";

import { ResponsiveProps } from './ResponsiveImage.types'

function getImageSize(width: number, coefficient: number): number {
    return width * coefficient;
}

export const ResponsiveImage = (props: ResponsiveProps) => {
    const [size, setSize] = useState(getImageSize(Dimensions.get('window').width, 0.08));

    useEffect(() => {
        const handleResize = ({ window }: { window: ScaledSize }) => {
            setSize(getImageSize(window.width, 0.08));
        };

        const subscription = Dimensions.addEventListener('change', handleResize);
        return () => subscription.remove();
    }, []);

    return (
        <Image style={[props.style, {
            width: size,
            height: size,
        }]} source={props.source}/>
    );
}