import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


class SigninComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check_textinputchange: false,
            password: '',
            secureTextEntry: true
        }
    }
    textinputchange(value) {
        if (value.length !== 0) {
            this.setState({
                check_textinputchange: true
            })

        } else {
            this.setState({
                check_textinputchange: false
            })
        }
    }
    secureTextEntry() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Animatable.View name='bounceIn' style={styles.header}>
                    <Text style={styles.text_header}>Welcome Back to Thrive</Text>
                </Animatable.View>
                <Animatable.View name='fadeInUpBig' style={styles.footer}>
                    <SafeAreaView>
                        <ScrollView>
                    <Text style={styles.text_footer}>Mobile</Text>
                    <View style={styles.action}>
                        <Feather
                            name='phone-call'
                            color='#05375a'
                            size={20}
                        />
                        <TextInput
                            placeholder='Enter Mobile Number'
                            style={styles.textinput}
                            onChangeText={(text) => this.textinputchange(text)}
                        />
                        {this.state.check_textinputchange ?
                            <Animatable.View name='bounceIn'>
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name='lock'
                            color='#05375a'
                            size={20}
                        />
                        {this.state.secureTextEntry ?
                            <TextInput
                                placeholder='Enter Password'
                                secureTextEntry={true}
                                style={styles.textinput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                            />
                            :
                            <TextInput
                                placeholder='Enter Password'
                                style={styles.textinput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                            />
                        }
                        <TouchableOpacity onPress={() => this.secureTextEntry()}>
                            {this.state.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#009bd1', marginTop: 15 }}>
                        Forgot Password ?
                    </Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                        <View>
                            <Text style={styles.signinbtn}>
                                Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
                        <View>
                            <Text style={styles.signupbtn}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
                </Animatable.View>
            </View >
        );
    }
}
export default SigninComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 6,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textinput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },

    signinbtn: {
        width: '100%',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#5db8fe',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupbtn: {
        width: '100%',
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#5db8fe',
        paddingVertical: 12,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#5db8fe',
        fontWeight: 'bold',
        fontSize: 18,
    },

})