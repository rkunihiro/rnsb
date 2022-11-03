import { Camera } from "expo-camera";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export function CameraScreen() {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(() => {
        console.log(`CameraScreen#mount`);

        return () => {
            console.log(`CameraScreen#unmount`);
        };
    }, []);
    console.log(`CameraScreen#render`);

    if (!permission?.granted) {
        return (
            <View>
                <Text>No permission</Text>
                <Button
                    onPress={() => {
                        requestPermission();
                    }}
                    title="request"
                />
            </View>
        );
    }

    return (
        <View>
            <Camera style={{ width: "100%", height: "100%" }}>
                <Text>Permission granted</Text>
            </Camera>
        </View>
    );
}
