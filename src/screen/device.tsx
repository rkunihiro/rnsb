import * as Device from "expo-device";
import { useEffect, useState } from "react";
import { Button, Platform, Text, View } from "react-native";

const deviceTypeLabel: Record<Device.DeviceType, string> = {
    [Device.DeviceType.UNKNOWN]: "UNKNOWN",
    [Device.DeviceType.PHONE]: "PHONE",
    [Device.DeviceType.TABLET]: "TABLET",
    [Device.DeviceType.DESKTOP]: "DESKTOP",
    [Device.DeviceType.TV]: "TV",
};

export function DeviceScreen() {
    const [deviceType, setDeviceType] = useState<Device.DeviceType | null>(null);
    const [uptime, setUptime] = useState<number | null>(null);
    const [maxMemory, setMaxMemory] = useState<number | null>(null);
    const [isRootedExperimental, setRootedExperimental] = useState<boolean | null>(null);
    const [sideLoadingEnabled, setSideLoadingEnabled] = useState<boolean | null>(null);
    const [platformFeatures, setPlatformFeatures] = useState<string[] | null>(null);

    const update = () => {
        Device.getDeviceTypeAsync()
            .then((value) => {
                setDeviceType(value);
            })
            .catch((err) => console.log(err));

        Device.getUptimeAsync()
            .then((value) => {
                setUptime(value);
            })
            .catch((err) => console.log(err));

        Platform.OS !== "ios" &&
            Device.getMaxMemoryAsync()
                .then((value) => {
                    setMaxMemory(value);
                })
                .catch((err) => console.log(err));

        Device.isRootedExperimentalAsync()
            .then((value) => {
                setRootedExperimental(value);
            })
            .catch((err) => console.log(err));

        Platform.OS !== "ios" &&
            Device.isSideLoadingEnabledAsync()
                .then((value) => {
                    setSideLoadingEnabled(value);
                })
                .catch((err) => console.log(err));

        Device.getPlatformFeaturesAsync()
            .then((value) => {
                setPlatformFeatures(value);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(`DeviceScreen#mount`);

        update();

        return () => {
            console.log(`DeviceScreen#unmount`);
        };
    }, []);

    console.log(`DeviceScreen#render`);
    return (
        <View>
            <Text>isDevice: {Device.isDevice}</Text>
            <Text>brand: {Device.brand}</Text>
            <Text>manufacturer: {Device.manufacturer}</Text>
            <Text>modelName: {Device.modelName}</Text>
            <Text>modelId: {Device.modelId}</Text>
            <Text>designName: {Device.designName}</Text>
            <Text>productName: {Device.productName}</Text>
            <Text>deviceYearClass: {Device.deviceYearClass}</Text>
            <Text>totalMemory: {Device.totalMemory}</Text>
            <Text>supportedCpuArchitectures: {Device.supportedCpuArchitectures}</Text>
            <Text>osName: {Device.osName}</Text>
            <Text>osVersion: {Device.osVersion}</Text>
            <Text>osBuildId: {Device.osBuildId}</Text>
            <Text>osInternalBuildId: {Device.osInternalBuildId}</Text>
            <Text>osBuildFingerprint: {Device.osBuildFingerprint}</Text>
            <Text>platformApiLevel: {Device.platformApiLevel}</Text>
            <Text>deviceName: {Device.deviceName}</Text>

            <Text>deviceType: {deviceType ? deviceTypeLabel[deviceType] : "-"}</Text>
            <Text>uptime: {uptime ?? "-"}</Text>
            <Text>maxMemory: {maxMemory ?? "-"}</Text>
            <Text>isRootedExperimental: {isRootedExperimental ? "true" : "false"}</Text>
            <Text>sideLoadingEnabled: {sideLoadingEnabled ? "true" : "false"}</Text>
            {platformFeatures
                ? platformFeatures.map((value, index) => {
                      return (
                          <Text key={index}>
                              platformFeatures[{index}]: {value}
                          </Text>
                      );
                  })
                : null}

            <Button
                onPress={() => {
                    update();
                }}
                title="update"
            />
        </View>
    );
}
