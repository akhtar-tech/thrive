import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList, ScrollView, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Calls extends React.Component {
    constructor() {
        super();

        this.Array_Items = [
            'Sandeep Kumar',
            'Akhtar Siddiqui',
            'Mehtab Alam',
            'Jaidev',
            'Suraj Singh',
            'Sachin Nigam',
            'Veer Sagar',
            'Atul',
            'Ajay',
            'Ruksaar',
            'Anjali',
            'Ritu',
            'Rekha',
            'Khushboo'
        ];
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.text}>
                            <Text style={styles.headertext}>Calls</Text>
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
                    <ScrollView>
                        {
                            this.Array_Items.map((item, key) =>
                                (
                                    <View key={key} style={styles.item_container}>
                                        <TouchableOpacity>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={styles.user_avatar}>
                                                    {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                                                    <FontAwesome style={styles.userimg} name='user-circle-o' />
                                                </View>
                                                <View style={styles.user_name}>
                                                    <Text style={styles.nametext}>{item}</Text>
                                                    <View style={styles.calltextall}>
                                                        <MaterialIcons style={styles.calltexticon} name='call-made' />
                                                        <Text style={styles.calltext}>20 May 2020</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.callnoti}>
                                                    <MaterialIcons style={styles.calltime} name='videocam' />
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default Calls
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
    search_container: {
        flex: 1,
        backgroundColor: 'white',
    },
    footer: {
        flex: 13,
        //height: '90%',
        backgroundColor: 'white',
        /* borderTopRightRadius: 30,
        borderTopLeftRadius: 30, */
    },
    item_container: {
        borderBottomWidth: 1,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        padding: 10,
        borderColor: '#eff0f1',
    },
    user_avatar: {
        width: '10%',
    },
    userimg: {
        height: 70,
        width: 70,
        fontSize: 70,
        borderRadius: 50,
        borderWidth: 1,
        color: '#05375a',
        borderColor: '#05375a',
        marginHorizontal: 5,
    },
    user_name: {
        width: '75%',
    },
    calltextall: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 60,
    },
    nametext: {
        fontSize: 16,
        paddingLeft: 60,
        paddingTop: 8,
    },
    calltexticon: {
        fontSize: 13,
        color: '#05375a',
    },
    calltext: {
        fontSize: 13,
        paddingLeft: 5,
        color: 'gray',
    },
    callnoti: {
        width: '15%',
        alignItems: 'flex-end'
    },
    calltime: {
        paddingTop: 8,
        color: '#05375a',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    callcount: {
        height: 25,
        width: 25,
        color: 'white',
        backgroundColor: '#05375a',
        borderRadius: 50,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 3,
    },
    item_text_style:
    {
        fontSize: 20,
        color: '#000',
        padding: 10
    },


})