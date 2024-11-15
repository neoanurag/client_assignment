import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Form from '../screens/DynamicForms/Form';
import FormList from '../screens/DynamicForms/FormList';
import FormDetails from '../screens/DynamicForms/FormDetails';
import DynamicForms from '../screens/DynamicForms';

const Stack = createStackNavigator();

const FormsStack = () => {
    return (
            <Stack.Navigator initialRouteName="DynamicForms">
                <Stack.Screen
                    name="DynamicForms"
                    component={DynamicForms}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Form"
                    component={Form}
                    options={{ title: 'Form' }}
                />
                <Stack.Screen
                    name="FormList"
                    component={FormList}
                    options={{ title: 'Form List' }}
                />
                <Stack.Screen
                    name="FormDetails"
                    component={FormDetails}
                    options={{ title: 'Form Details' }}
                />
            </Stack.Navigator>
    );
};

export default FormsStack;
