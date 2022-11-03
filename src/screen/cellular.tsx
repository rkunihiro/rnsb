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
            setCarrierName(value);
        });
        getCellularGenerationAsync().then((value) => {
            setCellularGeneration(value);
        });
        getIsoCountryCodeAsync().then((value) => {
            setIsoCountryCode(value);
        });
        getMobileCountryCodeAsync().then((value) => {
            setMobileCountryCode(value);
        });
        getMobileNetworkCodeAsync().then((value) => {
            setMobileNetworkCode(value);
        });
    };

    useEffect(() => {
        update();
    }, []);

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
