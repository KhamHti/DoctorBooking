import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import BookAppointment from './screens/BookAppointment';
import BookingSuccess from './screens/BookingSuccess';
import Pending from './screens/Pending';
import Completed from './screens/Completed';
import CallAmbulance from './screens/CallAmbulance';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="BookingSuccess" component={BookingSuccess} />
        <Stack.Screen name="Pending" component={Pending} />
        <Stack.Screen name="Completed" component={Completed} />
        <Stack.Screen name="CallAmbulance" component={CallAmbulance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
