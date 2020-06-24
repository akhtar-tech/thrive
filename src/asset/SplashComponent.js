import * as React from 'react';
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';


class SplashComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar backgroundColor="#05375a" barStyle="light-content" hidden={false} /> */}
                <View style={styles.header}>
                    {/* <Animatable.Image
                    source={require('./asset/logo.png')}
                /> */}
                    <Animatable.Text style={styles.logo} resizeMode="stretch" animation='bounceIn' duration={1500}>Thrive Institute of Education</Animatable.Text>
                </View>
                <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                    <Text style={styles.title}>
                        Start your online English
                </Text>
                    {/* <Text style={styles.text}>
                        Sign in with account
                </Text> */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SigninScreen')}>
                        <Animatable.View sytyle={styles.button} animation='bounceInRight'>
                            <Text style={styles.btntext}>
                                Get Started
                    </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </Animatable.View>

            </View>
        );
    }
}
export default SplashComponent;
const { height } = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05375a',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        fontSize: 30,
        color: 'white',
        height: height_logo,
        width: height_logo,
    },
    title: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text: {
        color: 'gray',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,

    },
    btntext: {
        width: 150,
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: '#5db8fe',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})