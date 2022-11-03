import * as Application from "expo-application";
import { useEffect } from "react";
import { Text, View } from "react-native";

export function HomeScreen() {
    useEffect(() => {
        console.log(`HomeScreen#mount`);

        return () => {
            console.log(`HomeScreen#unmount`);
        };
    }, []);

    console.log(`HomeScreen#render`);
    return (
        <View>
            <Text>Hello,World!</Text>
            <Text>applicationId: {Application.applicationId}</Text>
            <Text>applicationName: {Application.applicationName}</Text>
            <Text>nativeApplicationVersion: {Application.nativeApplicationVersion}</Text>
            <Text>nativeBuildVersion: {Application.nativeBuildVersion}</Text>
        </View>
    );
}
