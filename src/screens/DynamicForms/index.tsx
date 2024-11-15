// screens/HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../constants/Strings';
import styles from '../../css';
const DynamicForms: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.containerCenter}>
            <Button title={Strings.home} onPress={() => navigation.navigate('Home')} />
            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('Form')}>
                <Text style={styles.btnTitle}>{Strings.new_form}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('FormList')}>
                <Text style={styles.btnTitle}>{Strings.form_list}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DynamicForms;
