import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const RootLayout = () => {
    return(
        <GestureHandlerRootView>
            <StatusBar style="dark"/>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </GestureHandlerRootView>
    )
}

export default RootLayout