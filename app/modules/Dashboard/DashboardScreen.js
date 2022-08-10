import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import withLoader from '../../actions/withLoader';
import withToast from '../../actions/withToast';
import styles from './styles/DashboardScreenStyles';
import { Images, Icons } from '../../assets/index';
import { Button, CustomHeader } from '../../components/index';
import PasswordIcon from 'react-native-vector-icons/Fontisto';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import { Colors, scale } from '../../utils/index';
import CustomTextInput from '../../components/CustomTextInput';
import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import API from '../../utils/RestAPI';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../../constants/index';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class DashboardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  doLogin = async (values) => {
    const { loader, toast } = this.props;
    const { email, password } = values;
    loader(true);
    await API.login({ Username: email, Password: password })
      .then(async (response) => {
        if (_.isEmpty(response)) {
          loader(false);
          setTimeout(() => {
            toast({ text: `Invalid credentials` });
          }, 200);
        } else {
          toast({ text: `You Have Successfully Logged in to Naxum` });
          AsyncStorage.setItem(AppConstants.USER_DETAILS, JSON.stringify(response), () => {
            console.log('cred stored successfully in storage')
          });
          loader(false);
        }
      })
      .catch((error) => {
        loader(false);
        setTimeout(() => {
          toast({ text: `Error: ${error.message}` });
        }, 200);
      });
  }

  render() {
    const { valid, dirty, handleSubmit, navigation, photo = null } = this.props;
    const imgurl = photo ? { uri: photo.uri } : Images.profileDefault;
    return (
      <View style={styles.container}>
        <CustomHeader></CustomHeader>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <EntypoIcon name={'menu'} size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}





const mapStateToProps = state => {
  return {
    formValue: state.form.loginForm ? state.form.loginForm.values : {},
  };
};

export default connect(mapStateToProps, {})(withLoader(withToast(DashboardScreen)));

