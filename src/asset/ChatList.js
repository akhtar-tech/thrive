import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList, ScrollView, Alert, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ChatList extends React.Component {
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
                            <Text style={styles.headertext}>Chats</Text>
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
                <View style={styles.search_container}>
                    <View style={styles.searchbar}>
                        <MaterialIcons color='#05375a' size={20} name='search' />
                        <TextInput style={styles.searchinput} placeholder='Search for batch mate' />
                    </View>
                    <View style={styles.adduser}>
                        <TouchableOpacity>
                            <MaterialIcons color='#05375a' size={30} name='person-add' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <ScrollView>
                        {
                            this.Array_Items.map((item, key) =>
                                (
                                    <View key={key} style={styles.item_container}>


                                        <View style={{ flex: 1, flexDirection: 'row' }}>

                                            <View style={styles.user_avatar}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfileScreen')}>
                                                    {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                                                    <FontAwesome style={styles.userimg} name='user-circle-o' />
                                                </TouchableOpacity>
                                            </View>


                                            <View style={styles.user_name}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChattingScreen')}>
                                                    <Text style={styles.nametext}>{item}</Text>
                                                    <Text style={styles.msgtext}>Proposal for designing</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.msgnoti}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChattingScreen')}>
                                                    <Text style={styles.msgtime}>
                                                        2 Min ago
                                                    </Text>
                                                    <Text style={styles.msgcount}>
                                                        2
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>


                                    </View>
                                ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default ChatList
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
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    searchbar: {
        width: '88%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        marginTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        paddingHorizontal: 15,

    },
    adduser: {
        width: '12%',
        marginTop: 17,
        alignItems: 'flex-end',

    },
    searchinput: {
        paddingHorizontal: 15,
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
    nametext: {
        fontSize: 16,
        paddingLeft: 60,
        paddingTop: 8,
    },
    msgtext: {
        fontSize: 13,
        paddingLeft: 60,
        color: 'gray',
    },
    msgnoti: {
        width: '15%',
        alignItems: 'flex-end'
    },
    msgtime: {
        paddingTop: 8,
        color: 'black',
        fontSize: 11,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    msgcount: {
        height: 25,
        width: 25,
        color: 'white',
        backgroundColor: '#05375a',
        borderRadius: 50,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 3,
        marginTop: 5,
    },
    item_text_style:
    {
        fontSize: 20,
        color: '#000',
        padding: 10
    },


})