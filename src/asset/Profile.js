import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ChatList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Profile Detail Here
                </Text>
            </View>
        )
    }
}
export default ChatList
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})