import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export function MenuButton() {
    const navigation = useNavigation<DrawerNavigationHelpers>();
    return (
        <Text onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={24} />
        </Text>
    );
}
