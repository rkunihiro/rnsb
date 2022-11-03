import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";

import { ParamList } from "./screen";
import { Battery } from "./screen/battery";
import { CameraScreen } from "./screen/camera";
import { CellularScreen } from "./screen/cellular";
import { Home } from "./screen/home";

const Drawer = createDrawerNavigator<ParamList>();

export function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Battery" component={Battery} />
                <Drawer.Screen name="Camera" component={CameraScreen} />
                <Drawer.Screen name="Cellular" component={CellularScreen} />
            </Drawer.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
