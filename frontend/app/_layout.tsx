import { Stack } from 'expo-router';
import {useColorScheme} from 'react-native';
import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider,
    adaptNavigationTheme
} from "react-native-paper";

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import {Colors} from "@/constants/Colors";
import merge from "deepmerge";


const customDarkTheme = {...MD3DarkTheme, colors: Colors.dark};
const customLightTheme = {...MD3LightTheme, colors: Colors.light};

const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const paperTheme =
        colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

    return (
        <PaperProvider theme={paperTheme}>
            <ThemeProvider value={paperTheme}>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </PaperProvider>
    )
}