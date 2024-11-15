import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import DynamicForm from '../../components/form/DynamicForm';
import { FormDataMock } from '../../constants/FormDataMock';
import styles from '../../css';
const Form = () => {
    const navigation = useNavigation();

    const handleSubmitSuccess = () => {
        navigation.navigate('FormList');
    };

    return (
        <View style={styles.container}>
            <DynamicForm
                config={FormDataMock}
                onSubmitSuccess={handleSubmitSuccess}
            />
        </View>
    );
};

export default Form;
