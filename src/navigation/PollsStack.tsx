import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PollList from '../screens/DynamicPolls/PollList';
import PollDetails from '../screens/DynamicPolls/PollDetails';
import PollSummary from '../screens/DynamicPolls/PollSummary';
import DynamicPolls from '../screens/DynamicPolls';

const Stack = createStackNavigator();

const PollsStack = () => {
    return (
            <Stack.Navigator initialRouteName="DynamicPolls">
                <Stack.Screen
                    name="DynamicPolls"
                    component={DynamicPolls}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PollList"
                    component={PollList}
                    options={{ title: 'Polls' }}
                />
                <Stack.Screen
                    name="PollDetails"
                    component={PollDetails}
                    options={{ title: 'Poll Details' }}
                />
                <Stack.Screen
                    name="PollSummary"
                    component={PollSummary}
                    options={{ title: 'Poll Summary' }}
                />
            </Stack.Navigator>
    );
};

export default PollsStack;
