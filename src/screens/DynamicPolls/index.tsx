import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Strings } from '../../constants/Strings';
import globalStyles from '../../css';
const DynamicPolls: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.containerCenter}>
            <Button title={Strings.home} onPress={() => navigation.navigate('Home')} />
            <TouchableOpacity style={globalStyles.btnContainer} onPress={() => navigation.navigate('PollList')}>
                <Text style={globalStyles.btnTitle}>{Strings.new_poll}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.btnContainer} onPress={() => navigation.navigate('PollSummary', { pollId: 0 })}>
                <Text style={globalStyles.btnTitle}>{Strings.poll_list}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DynamicPolls;
