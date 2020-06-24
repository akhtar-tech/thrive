import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

class SignupComponent extends React.Component {
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
                <Animatable.View
                    style={styles.header}
                    name='bounceIn'
                    duration={1500}
                >
                    <Text style={styles.text_header}>Welcome to Thrive</Text>
                </Animatable.View>
                <SafeAreaView>
                    <ScrollView>
                        <Animatable.View
                            name='fadeInUpBig'
                            style={styles.footer}
                        >
                            <Text style={styles.text_footer}>Full Name</Text>
                            <View style={styles.action}>
                                <Feather
                                    name='user'
                                    color='#05375a'
                                    size={20}
                                />
                                <TextInput
                                    placeholder='Enter Full Name'
                                    style={styles.textinput}
                                    onChangeText={(text) => this.textinputchange(text)}
                                />
                                {this.state.check_textinputchange ?
                                    <Animatable.View
                                        name='bounceIn'
                                    >
                                        <Feather
                                            name="check-circle"
                                            color="green"
                                            size={20}
                                        />
                                    </Animatable.View>
                                    : null}
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 25 }]}>Mobile</Text>
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
                                    <Animatable.View
                                        name='bounceIn'
                                    >
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
                            <Text style={[styles.text_footer, { marginTop: 25 }]}>Batch Time</Text>
                            <View style={styles.action}>
                                <Feather
                                    name='clock'
                                    color='#05375a'
                                    size={20}
                                />
                                <TextInput
                                    placeholder='Enter Mobile Number'
                                    style={styles.textinput}
                                    onChangeText={(text) => this.textinputchange(text)}
                                />
                                {this.state.check_textinputchange ?
                                    <Animatable.View
                                        name='bounceIn'
                                    >
                                        <Feather
                                            name="check-circle"
                                            color="green"
                                            size={20}
                                        />
                                    </Animatable.View>
                                    : null}
                            </View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                <View>
                                    <Text style={styles.signupbtn}>
                                        Sign Up
                            </Text>
                                </View>
                            </TouchableOpacity>

                        </Animatable.View>
                    </ScrollView>
                </SafeAreaView>
            </View >
        );
    }
}
export default SignupComponent;
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
        flex: 3,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
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

    signupbtn: {
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
    
})