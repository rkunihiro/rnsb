import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Button } from "react-native-paper";

type ListParamList = {
    List1?: { [key: string]: unknown };
    List2?: { [key: string]: unknown };
};

export function List2Screen({ navigation }: NativeStackScreenProps<ListParamList>) {
    return (
        <View>
            <Button onPress={() => navigation.navigate("List1")}>List1</Button>
            <Button onPress={() => navigation.navigate("List2")}>List2</Button>
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
}
