import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import {HomeScreen} from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Signup } from './screens/Signup';
import Event from "./screens/Donor/Event";
import OneEvent from "./screens/Donor/OneEvent";


const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  useEffect(() => {
    const isAppFirstLaunchedCheck = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    };
    isAppFirstLaunchedCheck();
    //AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="OneEvent" component={OneEvent} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;