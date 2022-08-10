import React, { Component } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import withLoader from '../../actions/withLoader';
import withToast from '../../actions/withToast';
import styles from './styles/ProfileScreenStyles';
import { Images, Icons } from '../../assets/index';
import { Button } from '../../components/index';
import PasswordIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import { Colors, scale, Fonts } from '../../utils/index';
import CustomTextInput from '../../components/CustomTextInput';
import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import API from '../../utils/RestAPI';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../../constants/index';
import * as ImagePicker from 'expo-image-picker';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      activeTabIndex: 0,
      photo: null
    };
  }

  updateProfile = async (values) => {
    const { loader, toast } = this.props;
    const { firstName, lastName, mobile, email } = values;
    //loader(true);
    // await API.updateProfile({ Username: email, Password: password })
    //   .then(async (response) => {
    //     if (_.isEmpty(response)) {
    //       loader(false);
    //       setTimeout(() => {
    //         toast({ text: `Invalid credentials` });
    //       }, 200);
    //     } else {
    //       toast({ text: `You Have Successfully Logged in to Naxum` });
    //       AsyncStorage.setItem(AppConstants.USER_DETAILS, JSON.stringify(response), () => {
    //         console.log('cred stored successfully in storage')
    //       });
    //       loader(false);
    //     }
    //   })
    //   .catch((error) => {
    //     loader(false);
    //     setTimeout(() => {
    //       toast({ text: `Error: ${error.message}` });
    //     }, 200);
    //   });
  }

   handleImage = async (file) => {
    let filename = file.uri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let photo = { uri: file.uri, name: filename, type }
    this.setState({photo:photo})
  };

   getPermissions = async () => {
    let perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.granted === false) {
      alert("Permission to access image gallery denied!");
      return;
    }
    let picked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    console.log('picked',picked)
    if (!picked.cancelled) {
      this.handleImage(picked);
    } else {
      this.setState({photo: null})
    }
  };

  render() {
    const { activeTabIndex, photo } = this.state;
    const { valid, dirty, handleSubmit } = this.props;
    const imgurl = photo ? { uri: photo.uri } : Images.profileDefault;
    console.log('this.props',this.props)
    return (
      <ScrollView
        ref={ref => this.scrollRef = ref}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>

        <View style={styles.profileContainer}>
          <View>
            <Image
              source={imgurl}
              style={styles.image}
              resizeMode={'cover'}
            />
            <TouchableOpacity 
              style={styles.editPhotoIcon}
              onPress={this.getPermissions}
            >
              <EntypoIcon name={'pencil'} size={14} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <Button
            disabled={false}
            onPress={() => this.props.navigation.navigate('Root')}
            title={'Top badges'}
            textStyle={styles.badgeButtonText}
            contentStyle={{ height: scale(38), marginTop: scale(18) }}
          />

          <View style={{ flexDirection: 'row', marginVertical: scale(18) }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.profileButton, { backgroundColor: activeTabIndex == 0 ? Colors.shadeblue : Colors.transparent, borderRightWidth: 0 }]}
              onPress={() => this.setState({ activeTabIndex: 0 })}
            >
              <Text style={[styles.title, { color: activeTabIndex == 0 ? Colors.white : Colors.shadeblue }]}>{'Profile'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.profileButton, { backgroundColor: activeTabIndex == 1 ? Colors.shadeblue : Colors.transparent }]}
              onPress={() => this.setState({ activeTabIndex: 1 })}
            >
              <Text style={[styles.title, { color: activeTabIndex == 1 ? Colors.white : Colors.shadeblue }]}>{'Social'}</Text>

            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.profileButton, { backgroundColor: activeTabIndex == 2 ? Colors.shadeblue : Colors.transparent, borderLeftWidth: 0 }]}
              onPress={() => this.setState({ activeTabIndex: 2 })}
            >
              <Text style={[styles.title, { color: activeTabIndex == 2 ? Colors.white : Colors.shadeblue }]}>{'Links'}</Text>

            </TouchableOpacity>
          </View>

          <CustomTextInput
            name="firstName"
            placeholder="First Name"
            refProp={(ref) => this.firstnameRef = ref}
            changeSuccessColor={true}
            type={'text'}
            style={{ paddingLeft: 0 }}
            autoCapitalize="none"
            autoCorrect={false}
            //value={profileFormData.firstName ? profileFormData.firstName : ''}
            value={''}
            require={true}
            autoFocus={true}
            returnKeyType={"next"}
            keyboardType={"default"}
            ellipsizeMode='tail'
            numberOfLines={1}
            onSubmitEditing={() => this.lastNameRef.focus()}
          />

          <CustomTextInput
            name="lastName"
            placeholder="Last Name"
            style={{ paddingLeft: 0 }}
            refProp={(ref) => this.lastNameRef = ref}
            changeSuccessColor={true}
            type={'text'}
            autoCapitalize="none"
            autoCorrect={false}
            //value={profileFormData.lastName ? profileFormData.lastName : ''}
            value={''}
            require={true}
            returnKeyType={"next"}
            keyboardType={"default"}
            ellipsizeMode='tail'
            numberOfLines={1}
            onEndEditing={() => {
              this.mobileRef.isFocused();
            }}
            onSubmitEditing={() => this.mobileRef.focus()}
          />

          <CustomTextInput
            name="mobile"
            placeholder="Mobile Number"
            style={{ paddingLeft: 0 }}
            refProp={(ref) => this.mobileRef = ref}
            changeSuccessColor={true}
            type={'text'}
            autoCapitalize="none"
            autoCorrect={false}
            //value={profileFormData.mobile ? profileFormData.mobile : ''}
            value={''}
            maxLength={11}
            require={true}
            returnKeyType={"next"}
            keyboardType={"numeric"}
            ellipsizeMode='tail'
            numberOfLines={1}
            onEndEditing={() => {
              this.emailRef.isFocused();
            }}
            onSubmitEditing={() => this.emailRef.focus()}
          />

          <CustomTextInput
            refProp={ref => this.emailRef = ref}
            name="email"
            require={true}
            style={{ paddingLeft: 0 }}
            placeholder="Email Address"
            changeSuccessColor={true}
            ellipsizeMode='tail'
            type={'text'}
            autoCapitalize="none"
            numberOfLines={1}
            autoCorrect={false}
            //value={profileFormData.mobile ? profileFormData.mobile : ''}
            value={''}
            keyboardType={"email-address"}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              if (!dirty && !valid) {
                handleSubmit(this.updateProfile);
              }
            }}
          />

          <Button
            disabled={(dirty && valid) ? false : true}
            onPress={handleSubmit(this.updateProfile)}
            title={'UPDATE PROFILE'}
            textStyle={{ textAlign: 'center' }}
            contentStyle={{ marginTop: scale(25), height: scale(40) }}
          />
        </View>
      </ScrollView>
    );
  }
}


const initialValues = {
  firstName: '',
  lastName: '',
  mobile: '',
  email: ''
};

const validate = values => {
  let errors = {};

  errors.firstName = !values.firstName
    ? 'First name is required'
    : undefined;

  errors.lastName = !values.lastName
    ? 'Last name is required'
    : undefined;

  errors.mobile = !values.mobile
    ? 'Mobile number is required'
    : undefined;

  errors.email = !values.email
    ? 'Email Address is required'
    : !emailRegex.test(values.email)
      ? 'Invalid email'
      : undefined;

  return errors;
};

const withForm = reduxForm({
  form: 'profileForm',
  validate,
  initialValues,
  enableReinitialize: true
});


const selector = formValueSelector('profileForm');

const mapStateToProps = state => {
  return {
    formValue: state.form.profileForm ? state.form.profileForm.values : {},
    firstName: selector(state, 'firstName'),
    lastName: selector(state, 'lastName'),
    mobile: selector(state, 'mobile'),
    email: selector(state, 'email'),
  };
};

export default connect(mapStateToProps, {})(withLoader(withToast(withForm(ProfileScreen))));

