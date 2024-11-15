import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import FormsStack from './FormsStack';
import PollsStack from './PollsStack';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FormsStack"
                    component={FormsStack}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PollsStack"
                    component={PollsStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default Routes;
