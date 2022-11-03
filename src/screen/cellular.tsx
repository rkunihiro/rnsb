import {
    CellularGeneration,
    getCarrierNameAsync,
    getCellularGenerationAsync,
    getIsoCountryCodeAsync,
    getMobileCountryCodeAsync,
    getMobileNetworkCodeAsync,
} from "expo-cellular";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const cellularGenerationLabel: Record<CellularGeneration, string> = {
    [CellularGeneration.UNKNOWN]: "-",
    [CellularGeneration.CELLULAR_2G]: "2G",
    [CellularGeneration.CELLULAR_3G]: "3G",
    [CellularGeneration.CELLULAR_4G]: "4G",
    [CellularGeneration.CELLULAR_5G]: "5G",
};

export function CellularScreen() {
    const [carrierName, setCarrierName] = useState<string | null>(null);
    const [cellularGeneration, setCellularGeneration] = useState<CellularGeneration | null>(null);
    const [isoCountryCode, setIsoCountryCode] = useState<string | null>(null);
    const [mobileCountryCode, setMobileCountryCode] = useState<string | null>(null);
    const [mobileNetworkCode, setMobileNetworkCode] = useState<string | null>(null);

    const update = () => {
        getCarrierNameAsync().then((value) => {
            console.log(`getCarrierNameAsync return ${value}`);
            setCarrierName(value);
        });

        getCellularGenerationAsync().then((value) => {
            console.log(`getCellularGenerationAsync return ${value}`);
            setCellularGeneration(value);
        });

        getIsoCountryCodeAsync().then((value) => {
            console.log(`getIsoCountryCodeAsync return ${value}`);
            setIsoCountryCode(value);
        });

        getMobileCountryCodeAsync().then((value) => {
            console.log(`getMobileCountryCodeAsync return ${value}`);
            setMobileCountryCode(value);
        });

        getMobileNetworkCodeAsync().then((value) => {
            console.log(`getMobileNetworkCodeAsync return ${value}`);
            setMobileNetworkCode(value);
        });
    };

    useEffect(() => {
        console.log(`CellularScreen#mount`);

        update();

        return () => {
            console.log(`CellularScreen#unmount`);
        };
    }, []);

    console.log(`CellularScreen#render`);
    return (
        <View>
            <Text>carrierName: {carrierName ?? "-"}</Text>
            <Text>cellularGeneration: {cellularGeneration ? cellularGenerationLabel[cellularGeneration] : "-"}</Text>
            <Text>isoCountryCode: {isoCountryCode ?? "-"}</Text>
            <Text>mobileCountryCode: {mobileCountryCode ?? "-"}</Text>
            <Text>mobileNetworkCode: {mobileNetworkCode ?? "-"}</Text>
            <Button
                onPress={() => {
                    update();
                }}
                title="update"
            />
        </View>
    );
}
