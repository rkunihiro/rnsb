import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import "react-native-gesture-handler";

import { ParamList } from "./screen";
import { BatteryScreen } from "./screen/battery";
import { CameraScreen } from "./screen/camera";
import { CellularScreen } from "./screen/cellular";
import { DeviceScreen } from "./screen/device";
import { HomeScreen } from "./screen/home";

const Drawer = createDrawerNavigator<ParamList>();

export function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Battery" component={BatteryScreen} />
                <Drawer.Screen name="Camera" component={CameraScreen} />
                <Drawer.Screen name="Cellular" component={CellularScreen} />
                <Drawer.Screen name="Device" component={DeviceScreen} />
            </Drawer.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
