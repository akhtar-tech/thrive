import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Contact extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Contact List Here
                </Text>
            </View>
        )
    }
}
export default Contact
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})