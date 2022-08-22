import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import { HomeStackScreen } from "./HomeScreen";
import { NewsStackScreen } from "./NewsScreen";

const BottomTab = createBottomTabNavigator();

export function BottomTabScreen() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: () => <Icon name="home" size={24} />,
                }}
            />
            <BottomTab.Screen
                name="News"
                component={NewsStackScreen}
                options={{
                    tabBarIcon: () => <Icon name="file-text" size={24} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
