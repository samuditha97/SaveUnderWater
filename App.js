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
import EventList from "./screens/Volunteer/EventList";
import Donation from "./screens/Donor/Donation";
import PollutedLocationList from './screens/Volunteer/PollutedLocationList';
import NewPollutedLocation from './screens/Volunteer/NewPollutedLocaiton';
import Facts from './screens/Biologist/Facts';
import Progress from "./screens/Donor/Progress";
import Summery from "./screens/Donor/Summery";

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
          {/* <Stack.Screen name="PollutedLocationList" component={PollutedLocationList} /> */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="OneEvent" component={OneEvent} />
          <Stack.Screen name="EventList" component={EventList} />
          <Stack.Screen name="Donation" component={Donation} />
          <Stack.Screen
            name="PollutedLocationList"
            component={PollutedLocationList}
          />
          <Stack.Screen
            name="NewPollutedLocation"
            component={NewPollutedLocation}
          />
          <Stack.Screen name="Facts" component={Facts} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Summery" component={Summery} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;