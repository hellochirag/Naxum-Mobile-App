import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import withLoader from '../../actions/withLoader';
import withToast from '../../actions/withToast';
import styles from './styles/LoginScreenStyles';
import { Images, Icons } from '../../assets/index';
import { Button } from '../../components/index';
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

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class LoginScreen extends Component {

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

    const { valid, dirty, handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.3 }}></View>
        <Image
          source={Images.appLogo}
          style={styles.image}
          resizeMode={'contain'}
        />
        <CustomTextInput
          refProp={ref => this.email = ref}
          name="email"
          require={true}
          placeholder="Email Address"
          changeSuccessColor={true}
          leftSideComponent={
            <UserIcon name={'user-alt'} size={14}
              color={Colors.gray} />
          }
          ellipsizeMode='tail'
          onEndEditing={() => {
            this.passwordRef.isFocused();
          }}
          type={'text'}
          autoCapitalize="none"
          numberOfLines={1}
          autoCorrect={false}
          value={''}
          autoFocus={true}
          returnKeyType={"next"}
          keyboardType={"email-address"}
          onSubmitEditing={() => this.passwordRef.focus()}
        />

        <CustomTextInput
          refProp={(ref) => this.passwordRef = ref}
          name="password"
          require
          placeholder="Password"
          changeSuccessColor={true}
          leftSideComponent={
            <PasswordIcon name={'locked'} size={15}
              color={Colors.gray} />
          }
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType={'default'}
          ellipsizeMode='tail'
          numberOfLines={1}
          secureTextEntry
          returnKeyType={'done'}
          onSubmitEditing={() => {
            if (!dirty && !valid) {
              handleSubmit(this.doLogin);
            }
          }}
        />
        <Button
          disabled={(dirty && valid) ? false : true}
          onPress={handleSubmit(this.doLogin)}
          title={'LOGIN'}
          iconURI={Icons.rightArrow}
          textStyle={{ textAlign: 'center', flex: 1 }}
          contentStyle={{ marginTop: scale(25) }}
        />
      </View>
    );
  }
}


const initialValues = {
  email: '',
  password: ''
};

const validate = values => {
  let errors = {};

  errors.email = !values.email
    ? 'Please enter an Email Address'
    : !emailRegex.test(values.email)
      ? 'Invalid email'
      : undefined;

  errors.password = !values.password
    ? 'Please enter a password'
    : undefined;
  return errors;
};

const withForm = reduxForm({
  form: 'loginForm',
  validate,
  initialValues,
  enableReinitialize: true
});


const selector = formValueSelector('loginForm');

const mapStateToProps = state => {
  return {
    formValue: state.form.loginForm ? state.form.loginForm.values : {},
    email: selector(state, 'email'),
    password: selector(state, 'password'),
  };
};

export default connect(mapStateToProps, {})(withLoader(withToast(withForm(LoginScreen))));

