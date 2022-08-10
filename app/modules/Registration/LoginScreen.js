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

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  doLogin = async (values) => {
    const { loader, toast } = this.props;
    const { username, password } = values;
    loader(true);
    await API.login({ username: username, password: password })
      .then(async (response) => {
        if (_.isEmpty(response) || !response?.success) {
          loader(false);
          setTimeout(() => {
            toast({ text: `Invalid credentials` });
          }, 200);
        } else {
          toast({ text: `You Have Successfully Logged in to Naxum`});
          AsyncStorage.setItem(AppConstants.USER_DETAILS, JSON.stringify(response?.data), () => {
            this.props.navigation.navigate(AppConstants.ROOT, {UserDetail: response?.data })
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
          refProp={ref => this.username = ref}
          name="username"
          require={true}
          placeholder="User Name"
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
          keyboardType={"default"}
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
  username: '',
  password: ''
};

const validate = values => {
  let errors = {};

  errors.username = !values.username
    ? 'Please enter an User Name'
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
    username: selector(state, 'username'),
    password: selector(state, 'password'),
  };
};

export default connect(mapStateToProps, {})(withLoader(withToast(withForm(LoginScreen))));

