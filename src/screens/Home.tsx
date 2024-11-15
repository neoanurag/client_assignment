import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Strings } from '../constants/Strings';
import { useNavigation } from '@react-navigation/native';
import styles from '../css';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.containerCenter}>
            <Text style={styles.screenTitle}>{Strings.please_select_app}</Text>
            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('FormsStack')}>
                <Text style={styles.btnTitle}>{Strings.dynamic_forms}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('PollsStack')}>
                <Text style={styles.btnTitle}>{Strings.dyanamic_polls}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

