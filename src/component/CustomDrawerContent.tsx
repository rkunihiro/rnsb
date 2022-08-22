import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import type { PropsWithChildren } from "react";

export function CustomDrawerContent(props: PropsWithChildren<DrawerContentComponentProps>) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => {
                    console.log(`Help click`);
                }}
            />
        </DrawerContentScrollView>
    );
}
