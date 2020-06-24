import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Chatting extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.back_container}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                                <MaterialIcons style={styles.backbtn} name='arrow-back' color='#05375a' size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.text}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfileScreen')}>
                                <FontAwesome style={styles.userimg} name='user-circle-o' />
                            </TouchableOpacity>
                            <View style={styles.user_name}>
                                <Text style={styles.nametext}>Akhtar Siddiqui </Text>
                                <Text style={styles.status}>Online </Text>
                            </View>

                        </View>
                        <View style={styles.headermenu}>
                            <View style={styles.audiocall}>
                                <MaterialIcons
                                    onPress={() => alert('Make A Audio Call')}
                                    name="call"
                                    style={styles.headermenuicon}
                                />
                            </View>
                            <View style={styles.videocall}>
                                <MaterialIcons
                                    onPress={() => alert('Make A Video Call')}
                                    name="video-call"
                                    style={styles.headermenuicon}
                                />
                            </View>
                            <View style={styles.moreoption}>
                                <Feather
                                    onPress={() => alert('More Option Here')}
                                    name="more-vertical"
                                    style={styles.headermenuicon}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        )
    }
}
export default Chatting
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 2,
        //height: '10%',
        backgroundColor: '#05375a',
        // borderTopRightRadius: 25,
        // borderTopLeftRadius: 25,
    },
    back_container: {
        width: '10%',
    },
    backbtn: {
        paddingLeft: 10,
        paddingTop: 25,
        color: 'white',
        fontSize: 25,
    },
    text: {
        width: '57%',
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    userimg: {
        height: 50,
        width: 50,
        fontSize: 50,
        borderRadius: 50,
        borderWidth: 1,
        color: 'white',
        //marginTop: 15,
        borderColor: 'white',
        marginVertical: 15,
    },
    nametext: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginLeft: 10,
        marginTop: 20,
    },
    status: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 13,
        marginLeft: 10,
    },
    headermenu: {
        width: '30%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection:'row',
        marginLeft:12,
        marginVertical:20
    },
    headermenuicon: {
        color: 'white',
        fontSize: 20,
        padding:6,
    },
    footer: {
        flex: 13,
        //height: '90%',
        backgroundColor: 'white',
        /* borderTopRightRadius: 30,
        borderTopLeftRadius: 30, */
    },
})