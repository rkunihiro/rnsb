import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, List, Text } from "react-native-paper";

import { MenuButton } from "../component/MenuButton";

interface NewsParamList {
    [key: string]: object | undefined;
    NewsList: undefined;
    NewsDetail: { id: number };
}

interface Item {
    id: number;
    title: string;
    description: string;
    body: string;
}

const itemList: Item[] = [
    { id: 1, title: "title1", description: "description1", body: "body1" },
    { id: 2, title: "title2", description: "description2", body: "body2" },
    { id: 3, title: "title3", description: "description3", body: "body3" },
    { id: 4, title: "title4", description: "description4", body: "body4" },
];

function findById(id: number): Item | undefined {
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i]?.id === id) {
            return itemList[i];
        }
    }
    return;
}

function NewsListScreen({ navigation }: NativeStackScreenProps<NewsParamList, "NewsList">) {
    return (
        <View>
            {itemList.map((item) => (
                <List.Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    onPress={() => {
                        navigation.navigate("NewsDetail", { id: item.id });
                    }}
                />
            ))}
        </View>
    );
}

function BackButton() {
    const navigation = useNavigation();
    return <Button onPress={() => navigation.goBack()}>Back</Button>;
}

function NewsDetailScreen({
    navigation,
    route: {
        params: { id },
    },
}: NativeStackScreenProps<NewsParamList, "NewsDetail">) {
    const [item, setItem] = useState<Item>();

    useEffect(() => {
        setItem(findById(id));
    }, []);

    if (!item) {
        return (
            <View>
                <Text>Not Found</Text>
                <BackButton />
            </View>
        );
    }

    navigation.setOptions({ headerTitle: item.title });
    return (
        <>
            <Text>{item.body}</Text>
            <BackButton />
        </>
    );
}

const Stack = createNativeStackNavigator();

export function NewsStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="NewsList"
                component={NewsListScreen}
                options={{
                    headerTitle: "News",
                    headerLeft: () => <MenuButton />,
                }}
            />
            <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        </Stack.Navigator>
    );
}
