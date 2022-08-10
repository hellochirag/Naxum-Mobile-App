import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
// import withLoader from '../../actions/withLoader';
// import withToast from '../../actions/withToast';
import styles from './styles/DrawerScreenStyle';
import { Images, Icons } from '../assets/index';
//import { Button, CustomHeader } from '../../components/index';
import ProfileIcon from 'react-native-vector-icons/Fontisto';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import { Colors, scale } from '../utils/index';
//import CustomTextInput from '../../components/CustomTextInput';
import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import API from '../utils/RestAPI';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../constants/index';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class DrawerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: [
                { label: 'Item 1', value: '1' },
                { label: 'Item 2', value: '2' },
                { label: 'Item 3', value: '3' },
                { label: 'Item 4', value: '4' },
                { label: 'Item 5', value: '5' },
                { label: 'Item 6', value: '6' },
                { label: 'Item 7', value: '7' },
                { label: 'Item 8', value: '8' },
            ],
            selecedField: { label: 'Item 2', value: '2' }
        }
    }


    render() {
        const { profile, selecedField } = this.state;
        const { valid, dirty, handleSubmit, navigation, photo = null } = this.props;
        const imgurl = photo ? { uri: photo.uri } : Images.profileDefault;
        return (
            <View style={styles.container}>

                <Image
                    source={imgurl}
                    style={styles.image}
                    resizeMode={'cover'}
                />
                <View style={styles.horizontalLine}></View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: scale(16),
                        marginTop: scale(20),
                        justifyContent: 'space-around',
                    }}
                >
                    <View
                        style={{
                            flex: 0.8,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            paddingBottom: scale(6)
                        }}>
                        <ProfileIcon name={'locked'} size={20} color={Colors.gray} />
                        <Text style={styles.title}>{'Profile'}</Text>
                    </View>
                    <View>
                        <EntypoIcon name={'chevron-up'} size={30} color={Colors.gray} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: scale(14),
                        marginTop: scale(20),
                        justifyContent: 'space-around',
                    }}
                >
                    <View
                        style={{
                            flex: 0.8,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            paddingBottom: scale(6)
                        }}>
                        <AntDesign name={'poweroff'} size={18} color={Colors.gray} />
                        <Text style={styles.title}>{'Logout'}</Text>
                    </View>
                    <View/>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        formValue: state.form.loginForm ? state.form.loginForm.values : {}
    };
};

export default connect(mapStateToProps, {})(DrawerScreen);

