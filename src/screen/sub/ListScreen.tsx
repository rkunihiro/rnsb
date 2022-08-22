import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button } from "react-native-paper";

interface Props {
    id: number;
}

export function ListScreen({ navigation, id }: NativeStackScreenProps<{ [key: string]: { id?: number } }> & Props) {
    const screenList = [];
    for (let i = 1; i < 10; i++) {
        const name = `List${i}`;
        screenList.push(
            <Button
                onPress={() => {
                    navigation.navigate(name);
                }}
            >
                {name}
            </Button>,
        );
    }
    return (
        <View>
            {screenList}
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
}
