import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import { MenuButton } from "../component/MenuButton";

type HomeParamList = {
    HomeDetail: { id?: number };
};

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: NativeStackScreenProps<HomeParamList>) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello,World!!</Text>
            <Button
                icon="camera"
                mode="outlined"
                onPress={() => navigation.navigate("HomeDetail")}
                style={{ margin: 8 }}
            >
                Detail
            </Button>
        </View>
    );
}

type Props = NativeStackScreenProps<HomeParamList, "HomeDetail">;

function HomeDetailScreen({ route }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>key: {route.key}</Text>
            <Text style={styles.text}>name: {route.name}</Text>
        </View>
    );
}

export function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeMain"
                component={HomeScreen}
                options={{
                    headerTitle: "Home",
                    headerLeft: () => <MenuButton />,
                }}
            />
            <Stack.Screen
                name="HomeDetail"
                component={HomeDetailScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTitle: "detail",
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
    },
});
