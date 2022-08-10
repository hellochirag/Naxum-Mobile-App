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


class DrawerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleProfile: false
        }
    }

    profileAction = () => {
        const { toggleProfile } = this.state;
        this.setState({ toggleProfile: !toggleProfile })
    }

    render() {
        const { toggleProfile } = this.state;
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
                <View style={styles.dropdownContainer}>
                    <View style={styles.dropdownRaw}>
                        <ProfileIcon name={'locked'} size={20} color={Colors.gray} />
                        <Text style={styles.title}>{'Profile'}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.editPhotoIcon}
                        onPress={this.profileAction}
                    >
                        <EntypoIcon name={toggleProfile ? 'chevron-up' : 'chevron-down'} size={24} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
                {toggleProfile && <View style={styles.myProfileRaw}>
                    <TouchableOpacity style={{ paddingLeft: scale(40) }} onPress={() => navigation.navigate(AppConstants.PROFILE)}>
                        <Text style={styles.title}>{'My Profile'}</Text>
                    </TouchableOpacity>
                </View>}
                <View style={styles.logoutRaw}>
                    <TouchableOpacity style={styles.logoutContainer} onPress={() => navigation.navigate(AppConstants.LOGOUT)}>
                        <AntDesign name={'poweroff'} size={18} color={Colors.gray} />
                        <Text style={styles.title}>{'Logout'}</Text>
                    </TouchableOpacity>
                    <View />
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

