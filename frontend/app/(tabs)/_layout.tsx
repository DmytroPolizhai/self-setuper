import {Tabs} from "expo-router";
import {Feather} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => (
                        <Feather name="home" size={24} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="test"
                options={{
                    title: "Test",
                    tabBarIcon: ({color}) => (
                        <Feather name="search" size={24} color={color}/>
                    )
                }}
            />
        </Tabs>
    );
}