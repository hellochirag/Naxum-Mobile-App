import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import withLoader from "../../actions/withLoader";
import withToast from "../../actions/withToast";
import styles from "./styles/ProfileScreenStyles";
import { Images, Icons } from "../../assets/index";
import { Button } from "../../components/index";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Colors, scale, Fonts } from "../../utils/index";
import CustomTextInput from "../../components/CustomTextInput";
import { formValueSelector, reduxForm } from "redux-form";
import { connect } from "react-redux";
import API from "../../utils/RestAPI";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstants } from "../../constants/index";
import * as ImagePicker from "expo-image-picker";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    console.log(' props.route.params?.UserDetail ',  props.route.params?.UserDetail);
    const { token, contact_number, email, name, picture } =
      props.route.params?.UserDetail;
    this.state = {
      email: email | "",
      activeTabIndex: 0,
      photo: picture | null,
      firstName: name,
      lastName: name,
      mobile: contact_number | "",
      token: token | "",
      loading: true,
    };
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem(AppConstants.USER_DETAILS).then((value) => {
      const object = JSON.parse(value);
      this.setState({
        token: object?.token,
        email: object?.email,
        mobile: object?.contact_number,
        firstName: object?.name,
        lastName: object?.name,
        photo: object?.picture,
      });
    });
  }

  updateProfile = async (values) => {
    const { loader, toast } = this.props;
    const { firstName, lastName, mobile, email } = values;
    const { token, base64, photo } = this.state;

    const request = base64 ? { photo: base64 } : {};
    loader(true);
    await API.updateProfile({
      header: { token: token },
      body: {
        name: firstName + lastName,
        contact_number: mobile,
        email: email,
        ...request,
      },
    })
      .then(async (response) => {
        loader(false);
        if (response?.success) {
          toast({ text: `Update Profile has been saved successfully` });
          const updateObject = {
            token: token,
            email: email,
            mobile: mobile,
            firstName: firstName,
            lastName: lastName,
            photo: photo,
          };
          AsyncStorage.setItem(AppConstants.USER_DETAILS, JSON.stringify(updateObject), () => {
            console.log("Updated stored successfully in storage");
          });
        } else {
          setTimeout(() => {
            toast({ text: `Something went wrong, please try again!` });
          }, 200);
        }
      })
      .catch((error) => {
        loader(false);
        setTimeout(() => {
          toast({ text: `Error: ${error.message}` });
        }, 200);
      });
  };

  handleImage = async (file) => {
    let imageUri = file ? `data:image/jpg;base64,${file.base64}` : null;
    this.setState({
      photo: imageUri,
      base64: `data:image/jpeg;base64,${file.base64}`,
    });
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
      base64: true,
      aspect: [4, 3],
    });
    if (!picked.cancelled) {
      this.handleImage(picked);
    } else {
      this.setState({ photo: null });
    }
  };

  render() {
    const { activeTabIndex, photo, loading, firstName } = this.state;
    const { valid, dirty, handleSubmit } = this.props;
    const imgurl = photo?.length > 0 ? { uri: photo } : Images.profileDefault;
    return (
      <ScrollView
        ref={(ref) => (this.scrollRef = ref)}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.profileContainer}>
          <View>
            <Image
              onLoadEnd={() => {
                this.setState({ loading: false });
              }}
              source={imgurl}
              style={styles.image}
              resizeMode={"cover"}
            />
            {loading && (
              <ActivityIndicator
                size="large"
                color="black"
                style={styles.activityIndicator}
              />
            )}

            <TouchableOpacity
              style={styles.editPhotoIcon}
              onPress={this.getPermissions}
            >
              <EntypoIcon name={"pencil"} size={14} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <Button
            disabled={true}
            title={"Top badges"}
            textStyle={styles.badgeButtonText}
            contentStyle={{ height: scale(38), marginTop: scale(18) }}
          />

          <View style={{ flexDirection: "row", marginVertical: scale(18) }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.profileButton,
                {
                  backgroundColor:
                    activeTabIndex == 0 ? Colors.shadeblue : Colors.transparent,
                  borderRightWidth: 0,
                },
              ]}
              onPress={() => this.setState({ activeTabIndex: 0 })}
            >
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      activeTabIndex == 0 ? Colors.white : Colors.shadeblue,
                  },
                ]}
              >
                {"Profile"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.profileButton,
                {
                  backgroundColor:
                    activeTabIndex == 1 ? Colors.shadeblue : Colors.transparent,
                },
              ]}
              onPress={() => this.setState({ activeTabIndex: 1 })}
            >
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      activeTabIndex == 1 ? Colors.white : Colors.shadeblue,
                  },
                ]}
              >
                {"Social"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.profileButton,
                {
                  backgroundColor:
                    activeTabIndex == 2 ? Colors.shadeblue : Colors.transparent,
                  borderLeftWidth: 0,
                },
              ]}
              onPress={() => this.setState({ activeTabIndex: 2 })}
            >
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      activeTabIndex == 2 ? Colors.white : Colors.shadeblue,
                  },
                ]}
              >
                {"Links"}
              </Text>
            </TouchableOpacity>
          </View>

          <CustomTextInput
            name="firstName"
            placeholder="First Name"
            refProp={(ref) => (this.firstnameRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            style={{ paddingLeft: 0 }}
            autoCapitalize="none"
            autoCorrect={false}
            value={firstName}
            require={true}
            autoFocus={true}
            returnKeyType={"next"}
            keyboardType={"default"}
            ellipsizeMode="tail"
            numberOfLines={1}
            onSubmitEditing={() => this.lastNameRef.focus()}
          />

          <CustomTextInput
            name="lastName"
            placeholder="Last Name"
            style={{ paddingLeft: 0 }}
            refProp={(ref) => (this.lastNameRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            autoCapitalize="none"
            autoCorrect={false}
            //value={profileFormData.lastName ? profileFormData.lastName : ''}
            value={""}
            require={true}
            returnKeyType={"next"}
            keyboardType={"default"}
            ellipsizeMode="tail"
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
            refProp={(ref) => (this.mobileRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            autoCapitalize="none"
            autoCorrect={false}
            //value={profileFormData.mobile ? profileFormData.mobile : ''}
            value={""}
            maxLength={11}
            require={true}
            returnKeyType={"next"}
            keyboardType={"numeric"}
            ellipsizeMode="tail"
            numberOfLines={1}
            onEndEditing={() => {
              this.emailRef.isFocused();
            }}
            onSubmitEditing={() => this.emailRef.focus()}
          />

          <CustomTextInput
            refProp={(ref) => (this.emailRef = ref)}
            name="email"
            require={true}
            style={{ paddingLeft: 0 }}
            placeholder="Email Address"
            changeSuccessColor={true}
            ellipsizeMode="tail"
            type={"text"}
            autoCapitalize="none"
            numberOfLines={1}
            autoCorrect={false}
            //value={profileFormData.mobile ? profileFormData.mobile : ''}
            value={""}
            keyboardType={"email-address"}
            returnKeyType={"done"}
            onSubmitEditing={() => {
              if (!dirty && !valid) {
                handleSubmit(this.updateProfile);
              }
            }}
          />

          <Button
            disabled={dirty && valid ? false : true}
            onPress={handleSubmit(this.updateProfile)}
            title={"UPDATE PROFILE"}
            textStyle={{ textAlign: "center" }}
            contentStyle={{ marginTop: scale(25), height: scale(40) }}
          />
        </View>
      </ScrollView>
    );
  }
}

const initialValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
};

const validate = (values) => {
  let errors = {};

  errors.firstName = !values.firstName ? "First name is required" : undefined;

  errors.lastName = !values.lastName ? "Last name is required" : undefined;

  errors.mobile = !values.mobile ? "Mobile number is required" : undefined;

  errors.email = !values.email
    ? "Email Address is required"
    : !emailRegex.test(values.email)
    ? "Invalid email"
    : undefined;

  return errors;
};

const withForm = reduxForm({
  form: "profileForm",
  validate,
  initialValues,
  enableReinitialize: true,
});

const selector = formValueSelector("profileForm");

const mapStateToProps = (state) => {
  return {
    formValue: state.form.profileForm ? state.form.profileForm.values : {},
    firstName: selector(state, "firstName"),
    lastName: selector(state, "lastName"),
    mobile: selector(state, "mobile"),
    email: selector(state, "email"),
  };
};

export default connect(
  mapStateToProps,
  {}
)(withLoader(withToast(withForm(ProfileScreen))));
