import { Camera } from "expo-camera";
import { Button, Text, View } from "react-native";

export function CameraScreen() {
    const [permission, requestPermission] = Camera.useCameraPermissions();

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
