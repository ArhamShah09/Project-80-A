import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    Modal, 
    ScrollView, 
    KeyboardAvoidingView 
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SettingScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>SettingScreen</Text>
            </View>
        )
    }
}