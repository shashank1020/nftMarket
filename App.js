import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts
} from '@expo-google-fonts/inter';
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";

const Stack = createStackNavigator();

function App() {
    const [fontsLoaded] = useFonts({
        Inter_700Bold, Inter_500Medium, Inter_300Light, Inter_400Regular, Inter_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
                <Stack.Screen name={'Home'} component={Home}/>
                <Stack.Screen name={'Details'} component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        backgroundColor: 'transparent'
    }
}
