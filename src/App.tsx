import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { CustomDrawerContent } from "./component/CustomDrawerContent";
import { BottomTabScreen } from "./screen/BottomTabScreen";

const Drawer = createDrawerNavigator();

export function DrawerScreen() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="BT" component={BottomTabScreen} options={{ drawerLabel: "Home" }} />
        </Drawer.Navigator>
    );
}

const theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 2,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: "#3498db",
        secondary: "#f1c40f",
        tertiary: "#a1b2c3",
    },
};

export default function App() {
    const navigationRef = useNavigationContainerRef();
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer
                documentTitle={{
                    enabled: false,
                }}
                onReady={() => {
                    console.log("onReady");
                }}
                ref={navigationRef}
            >
                <DrawerScreen />
                <StatusBar style="auto" />
            </NavigationContainer>
        </PaperProvider>
    );
}
