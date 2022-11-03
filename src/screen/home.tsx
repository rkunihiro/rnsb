import * as Application from "expo-application";
import { Text, View } from "react-native";

export function Home() {
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
