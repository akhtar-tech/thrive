import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Modal,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class UserProfile extends React.Component {
    state = {
        isVisible: false, //state of modal default false
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar backgroundColor="#05375a" barStyle="light-content" hidden={false} /> */}
                <View style={styles.header}>
                    {/* <Animatable.Image
                    source={require('./asset/logo.png')}
                /> */}
                    <View style={styles.backbtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                            {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                            <MaterialIcons size={25} color='white' name='arrow-back' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.audeocallcontainer}>
                        <TouchableOpacity>
                            {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                            <MaterialIcons size={25} color='#05375a' name='call' />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfileScreen')}>
                        {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                        <FontAwesome style={styles.userimg} name='user-circle-o' />
                    </TouchableOpacity>
                    <View style={styles.videocallcontainer}>
                        <TouchableOpacity>
                            {/* <Image style={styles.userimg} source={require('../images/default_user.jpg')} /> */}
                            <MaterialIcons color='#05375a' size={25} name='video-call' />
                        </TouchableOpacity>
                    </View>

                </View>
                {/* <Modal animationType={"slide"} transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>
                    <View style={styles.modal}>
                        <Text style={styles.modaltext}>Modal is open!</Text>
                        <Button title="Click To Close Modal" onPress={() => {
                            this.setState({ isVisible: !this.state.isVisible })
                        }} />
                    </View>
                </Modal> */}
                <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                    <View style={styles.headtitlecontainer}>
                        <Text style={styles.title}>
                            Akhtar Siddiqui
                        </Text>
                        {/* <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
                            <MaterialIcons style={styles.settingicon} name='settings' />
                        </TouchableOpacity> */}
                    </View>

                    <View style={styles.row}>
                        <View style={styles.col1}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Name</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Class</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Badge</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Section</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Batch Time</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Addmission No.</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Joining Date</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Standard</Text>
                            </View>
                        </View>
                        <View style={styles.col2}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Akhtar Siddiqui</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>English</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>Gold</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Morning</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>8:00 AM</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>2020-0201963</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.col1text}>1st-Jan-2020</Text>
                            </View>
                            <View style={styles.textcontainer2}>
                                <Text style={styles.col1text}>Pro Student</Text>
                            </View>
                        </View>
                    </View>

                </Animatable.View>

            </View>
        );
    }
}
export default UserProfile;
const { height } = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        marginHorizontal: 10,
        /* borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 10, */
    },
    logo: {
        fontSize: 30,
        color: 'white',
        height: height_logo,
        width: height_logo,
    },
    headtitlecontainer: {
        height: 50,
        backgroundColor: '#eeee',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    backbtn: {
        top: '-19%',
        left:'-7%'
    },
    videocallcontainer: {
        marginLeft: '15%',
        borderRadius: 50,
        padding: 5,
        backgroundColor: 'white'
    },
    audeocallcontainer: {
        marginRight: '15%',
        borderRadius: 50,
        padding: 5,
        backgroundColor: 'white',
    },
    title: {
        width: '100%',
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingLeft: 10,
    },
    text: {
        color: 'gray',
    },
    userimg: {
        height: 120,
        width: 120,
        fontSize: 120,
        color: 'white',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    col1: {
        width: '50%',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    col2: {
        width: '50%',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    textcontainer: {
        backgroundColor: 'white',
        width: '100%',
        /*  borderBottomColor: 'black',
         borderBottomWidth: 1, */
        padding: 10,

    },
    textcontainer2: {
        backgroundColor: '#eee',
        width: '100%',
        /* borderBottomColor: 'black',
        borderBottomWidth: 1, */
        padding: 10,

    },
    col1text: {
        color: 'gray',
        fontWeight: '700',
        fontSize: 15,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#05375ad9',
        padding: 100
    },
    modaltext: {
        color: 'white',
        fontSize: 50,
        marginTop: 10
    }
})