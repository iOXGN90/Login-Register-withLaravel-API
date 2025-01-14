import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './Screens/Login_Prototype';
import SignupPage from './Screens/SignupPage';
import UserProfilePage from './Screens/UserProfile';
import UserProfileSettingsPage from './Screens/UserProfileSettings';
import SignupConfirmationPage from './Screens/SignupPageConfirmation';
import HomePage from './Screens/Home';
import SignupTermsAndConditionPage from './Screens/SignupPageTermsAndAgreement';
import GoogleMapRegisterSelectPlace from './Screens/GoogleMapRegisterSelectPlace';
// import GoogleMapRegistration from './Screens/GoogleMap_Registration/GoogleRegistrationMap'
import GoogleMapRegisterImage from './Screens/GoogleMapRegisterImage'
import GoogleMapSearch from './Screens/GoogleMapSearch'

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
        headerShown: false,
        animation: 'slide_from_right', // Set the animation option
        }}
    >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="GoogleMap" component={GoogleMapRegisterSelectPlace} />
        <Stack.Screen name="GoogleMapRegisterImage" component={GoogleMapRegisterImage} />
        <Stack.Screen name="GoogleMapSearch" component={GoogleMapSearch} />
        <Stack.Screen name="UserProfile" component={UserProfilePage} />
        <Stack.Screen name="UserProfileSetting" component={UserProfileSettingsPage} /> 
        <Stack.Screen name="SignUp" component={SignupPage}/>
        <Stack.Screen name="SignUpTermsAndCondtion" component={SignupTermsAndConditionPage}/>
        <Stack.Screen name="SignupConfirmation" component={SignupConfirmationPage}/>
    </Stack.Navigator>
    </NavigationContainer>
);
};

