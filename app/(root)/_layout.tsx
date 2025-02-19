
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Clerk:']);

const Layout = () => {


    return (

        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            
        </Stack>

    );
}
export default Layout;
