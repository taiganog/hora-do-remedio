import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Store() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/store.tsx to edit this screen.</Text>
        </View>
    );
}