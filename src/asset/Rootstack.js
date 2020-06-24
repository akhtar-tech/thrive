import React from 'react';
import {
    StyleSheet  
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SplashComponent from './SplashComponent';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';
import ChatList from './ChatList';
import ContactList from './ContactList';
import Profile from './Profile';
import Calls from './Calls';
import Games from './Games';
import Chatting from './Chatting';
import UserProfile from './UserProfile';
import MyProfile from './MyProfile';

const Tabnavigator = createMaterialBottomTabNavigator({

    ChatList: {
        screen: ChatList,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name='message' size={25} color={tintColor} />
            ),
            activeColor: 'white',
            inactiveColor: 'white',
            barStyle: { backgroundColor: '#05375a' },
        },
    },
    Calls: {
        screen: Calls,
        navigationOptions: {
            tabBarLabel: 'Calls',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name='call' size={25} color={tintColor} />
            ),
            activeColor: 'white',
            inactiveColor: 'white',
            barStyle: { backgroundColor: '#05375a' },
        },
    },
    Profile: {
        screen: MyProfile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Feather name='user' size={25} color={tintColor} />
            ),
            activeColor: 'white',
            inactiveColor: 'white',
            barStyle: { backgroundColor: '#05375a' },
        },


    },
    Games: {
        screen: Games,
        navigationOptions: {
            tabBarLabel: 'More',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name='videogame-asset' size={25} color={tintColor} />
            ),
            activeColor: 'white',
            inactiveColor: 'white',
            barStyle: { backgroundColor: '#05375a' },
        },
    },
},
    {
        initialRouteName: 'ChatList',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: 'black' },

    });
const StackNavigator = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashComponent,
            /* navigationOptions: {
                title: '',
                headerStyle: {
                    backgroundColor: '#05375a',
                    elevation: 0,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
            navigationOptions: {
                headerShown: false,
            }
        },
        SigninScreen: {
            screen: SigninComponent,
            /* navigationOptions: {
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
            navigationOptions: {
                headerShown: false,
            }
        },
        SignupScreen: {
            screen: SignupComponent,
            /* navigationOptions: {
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
            navigationOptions: {
                headerShown: false,
            }
        },
        ChattingScreen: {
            screen: Chatting,
           /*  navigationOptions: {
                headerShown:true,
                title: 'Chatting',
                headerStyle: {
                    backgroundColor: '#05375a',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
            navigationOptions: {
                headerShown: false,
            }
        },
        UserProfileScreen: {
            screen: UserProfile,
           /*  navigationOptions: {
                headerShown:true,
                title: 'Chatting',
                headerStyle: {
                    backgroundColor: '#05375a',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
            navigationOptions: {
                headerShown: false,
            }
        },
        HomeScreen: {
            screen: Tabnavigator,
            navigationOptions: {
                headerShown: false,
                /* title:'Thrive Institute of education',
                headerLeft: false,
                headerRight: () => (
                    <Feather
                        onPress={() => alert('It will be side menu!')}
                        name="more-vertical"
                        size={25}
                        color='#05375a'
                        style={styles.headerright}
                    />
                ), */
            }
            /* navigationOptions: {
                headerStyle: {
                    backgroundColor: '#f4511e',

                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }, */
        },
    },
    {
        initialRouteName: 'SplashScreen',
        /* The header config from HomeScreen is now here */



    });
export default createAppContainer(StackNavigator);
const styles = StyleSheet.create({
    headerright: {
        paddingRight:10,
    },
});
