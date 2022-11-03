import { BatteryState, getPowerStateAsync, PowerState } from "expo-battery";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const batteryStateLabel: Record<BatteryState, string> = {
    [BatteryState.UNKNOWN]: "UNKNOWN",
    [BatteryState.UNPLUGGED]: "UNPLUGGED",
    [BatteryState.CHARGING]: "CHARGING",
    [BatteryState.FULL]: "FULL",
};

export function BatteryScreen() {
    const [powerState, setPowerState] = useState<PowerState | null>(null);

    const update = async () => {
        const state = await getPowerStateAsync();
        console.log(`getPowerStateAsync return ${JSON.stringify(state)}`);
        setPowerState(state);
    };

    useEffect(() => {
        console.log(`Battery#mount`);

        update();

        return () => {
            console.log(`Battery#unmount`);
        };
    }, []);

    console.log(`Battery#render`);

    return (
        <View>
            {powerState !== null ? (
                <>
                    <Text>batteryLevel: {powerState.batteryLevel * 100}%</Text>
                    <Text>batteryState: {batteryStateLabel[powerState.batteryState]}</Text>
                    <Text>lowPowerMode: {powerState.lowPowerMode ? "true" : "false"}</Text>
                </>
            ) : (
                <Text>Loading</Text>
            )}
            <Button
                onPress={() => {
                    setPowerState(null);
                    update();
                }}
                title="Update"
            />
        </View>
    );
}
