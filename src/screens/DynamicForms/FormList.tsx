import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import globalStyles, { Colors, FontSizes } from '../../css';

const FormList = () => {
    const navigation = useNavigation();
    const submittedForms = useSelector((state: RootState) => state.form.submittedForms);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={globalStyles.card}
            onPress={() => navigation.navigate('FormDetails', { formId: item.id })}
        >
            <Text style={globalStyles.cardTitle}>{item.name}</Text>
            <Text style={globalStyles.cardSubtitle}>
                {item.email}
            </Text>
            <Text style={globalStyles.lightText}>
                Date: {new Date(item.submittedAt).toLocaleDateString()}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
                <FlatList
                    data={submittedForms}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={
                        <View style={globalStyles.containerCenter}>
                    <Text style={styles.emptyStateText}>No forms available</Text>
                </View>
                    }
                />
        </View>
    );
};

export default FormList;

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 100,
    },
    emptyStateText: {
        fontSize: FontSizes.medium,
        color: Colors.error,
    },
});
