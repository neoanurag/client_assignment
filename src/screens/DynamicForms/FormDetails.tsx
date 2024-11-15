import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { RootState } from '../../store';
import globalStyles from '../../css';
import { Strings } from '../../constants/Strings';

const FormDetails = () => {
    const route = useRoute();
    const { formId } = route.params;

    const formData = useSelector((state: RootState) =>
        state.form.submittedForms.find(form => form.id === formId)
    );

    if (!formData) {
        return (
            <View style={globalStyles.flex1}>
                <Text>No data found</Text>
            </View>
        );
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                {Object.entries(formData).map(([key, value]) => {
                    if (key === 'id' || key === 'submittedAt') return null;
                    return (
                        <View key={key}>
                            <Text style={globalStyles.lightText}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </Text>
                            <Text style={globalStyles.cardSubtitle}>
                                {Array.isArray(value) ? value.join(', ') : value.toString()}
                            </Text>
                        </View>
                    );
                })}

                <Text style={globalStyles.lightText}>
                    {Strings.date_and_time}:
                </Text>
                <Text style={globalStyles.cardSubtitle}>
                    {new Date(formData.submittedAt).toLocaleString()}
                </Text>
            </View>
        </View>
    );
};

export default FormDetails;
