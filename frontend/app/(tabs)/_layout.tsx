import {Tabs} from "expo-router";
import {Feather} from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({color}) => (
                        <Feather name="home" size={24} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="build"
                options={{
                    headerShown: false,
                    title: "Build",
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="build" size={24} color={color}/>
                    )
                }}
            />
        </Tabs>
    );
}