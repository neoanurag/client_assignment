import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import globalStyles, { BorderRadius, Colors, FontSizes, Spacing } from '../../css';

const FormField = ({ field, value, error, onChange }: { field: any, value: any, error: any, onChange: any }) => {
    const renderField = () => {
        switch (field.fieldType) {
            case 'text':
            case 'email':
                return (
                    <TextInput
                        style={styles.fieldInput}
                        placeholder={field.label}
                        placeholderTextColor={Colors.placeHolder}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={field.fieldType === 'email' ? 'email-address' : 'default'}
                    />
                );
            case 'dropdown':
            case 'singleSelect':
                return (
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={globalStyles.placeholderText}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={field.options || []}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={field.placeholder || `Select ${field.label}...`}
                        value={value}
                        onChange={item => onChange(item.value)}
                        renderLeftIcon={() => null}
                    />
                );
            case 'multiSelect':
                return (
                    <MultiSelect
                        style={styles.dropdown}
                        placeholderStyle={globalStyles.placeholderText}
                        data={field.options || []}
                        labelField="label"
                        valueField="value"
                        placeholder={field.placeholder || `Select ${field.label}...`}
                        value={value || []}
                        onChange={onChange}
                        multiSelect={true}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>{field.label}</Text>
            {renderField()}
            {error && <Text style={globalStyles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    fieldContainer: {
        marginBottom: Spacing.medium,
    },
    fieldLabel: {
        fontSize: FontSizes.medium,
        marginBottom: Spacing.small,
        fontWeight: 'bold',
    },
    fieldInput: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.medium,
        padding: Spacing.medium,
        fontSize: FontSizes.medium,
        backgroundColor: Colors.white,
    },
    dropdown: {
        height: 48,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.medium,
        paddingHorizontal: Spacing.medium,
        backgroundColor: Colors.white,
    },
    selectedTextStyle: {
        fontSize: FontSizes.medium,
        color: Colors.textPrimary,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
});

export default FormField;
