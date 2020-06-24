import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

class Games extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.text}>
                            <Text style={styles.headertext}>More </Text>
                        </View>
                        <View style={styles.headermenu}>
                            <Feather
                                onPress={() => alert('It will be side menu!')}
                                name="more-vertical"
                                size={25}
                                color='#05375a'
                                style={styles.headerright}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        )
    }
}
export default Games
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 1,
        //height: '10%',
        backgroundColor: 'white',
        // borderTopRightRadius: 25,
        // borderTopLeftRadius: 25,
    },
    text: {
        width: '90%',
        paddingHorizontal: 15,
    },
    headertext: {
        width: '90%',
        color: '#05375a',
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    headermenu: {
        width: '10%',
        color: '#05375a',
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingRight: 10,
    },
    footer: {
        flex: 13,
        //height: '90%',
        backgroundColor: 'white',
        /* borderTopRightRadius: 30,
        borderTopLeftRadius: 30, */
    },
})