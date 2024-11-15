import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PollDataMock } from '../../constants/PollDataMock';
import { Strings } from '../../constants/Strings';
import globalStyles from '../../css';

const PollList: React.FC = () => {
    const polls = PollDataMock;
    const navigation = useNavigation();

    const renderPollItem = ({ item }) => (
        <TouchableOpacity
            style={globalStyles.card}
            onPress={() => navigation.navigate('PollDetails', { pollId: item.id })}
        >
            <Text style={globalStyles.subheading}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>{Strings.select_poll_type}</Text>
            <FlatList
                data={polls}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPollItem}
            />
        </View>
    );
};

export default PollList;
