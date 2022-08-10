import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import withLoader from "../../actions/withLoader";
import withToast from "../../actions/withToast";
import styles from "./styles/ProfileScreenStyles";
import { Images } from "../../assets/index";
import { Button } from "../../components/index";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Colors, scale } from "../../utils/index";
import CustomTextInput from "../../components/CustomTextInput";
import API from "../../utils/RestAPI";
import { emailRegex } from "../../utils";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstants } from "../../constants/index";
import * as ImagePicker from "expo-image-picker";

class ContactDetailScreen extends Component {
  constructor(props) {
    super(props);
    const { UserDetail, isNewContact } = props.route.params;
    this.state = {
      email: UserDetail?.email | "",
      photo: UserDetail?.picture | null,
      firstName: UserDetail?.name,
      lastName: UserDetail?.name,
      mobile: UserDetail?.contact_number | "",
      token: "",
      loading: true,
      isNewContact: isNewContact | true,
    };
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem(AppConstants.USER_DETAILS).then((value) => {
      const object = JSON.parse(value);
      this.setState({
        token: object?.token,
      });
    });
  }

  addContact = async () => {
    const { loader, toast } = this.props;
    const { token, base64, firstName, lastName, mobile, email } = this.state;

    const request = base64 ? { photo: base64 } : {};
    loader(true);
    await API.addContact({
      header: { token: token },
      body: {
        first_name: firstName,
        last_name: lastName,
        contact_number: mobile,
        email: email,
        ...request,
      },
    })
      .then(async (response) => {
        loader(false);
        if (response?.success) {
          toast({ text: `New Contact added successfully` });
          this.state = {
            email:  "",
            photo: null,
            firstName: "",
            lastName: "",
            mobile: "",
          };
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

  validateTheContact = () => {
    const {  toast } = this.props;
    const { email, lastName, firstName, mobile } = this.state;
    if (firstName?.length < 1) {
      toast({ text: `First name is required` });
    } else if (lastName?.length < 1) {
      toast({ text: `Last name is required` });
    } else if (mobile?.length < 1) {
      toast({ text: `Mobile number is required` });
    }else if (mobile?.length === 10) {
      toast({ text: `Invalid Mobile number` });
    }else if (email?.length < 1) {
      toast({ text: `Email Address is required` });
    }else if (!emailRegex.test(email)) {
      toast({ text: `Invalid email address` });
    } else {
      this.addContact();
    }
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
    const { isNewContact, photo, loading, email, lastName, firstName, mobile } =
      this.state;
    const imgURI = photo?.length > 0 ? { uri: photo } : Images.profileDefault;
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
              source={imgURI}
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

            {isNewContact && (
              <TouchableOpacity
                style={styles.editPhotoIcon}
                onPress={this.getPermissions}
              >
                <EntypoIcon name={"pencil"} size={14} color={Colors.white} />
              </TouchableOpacity>
            )}
          </View>

          <CustomTextInput
            name="firstName"
            disabled={isNewContact}
            placeholder="First Name"
            refProp={(ref) => (this.firstnameRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            onChangeText={(text) => this.setState({ firstName: text })}
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
            disabled={isNewContact}
            placeholder="Last Name"
            style={{ paddingLeft: 0 }}
            refProp={(ref) => (this.lastNameRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => this.setState({ lastName: text })}
            value={lastName}
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
            disabled={isNewContact}
            placeholder="Mobile Number"
            style={{ paddingLeft: 0 }}
            refProp={(ref) => (this.mobileRef = ref)}
            changeSuccessColor={true}
            type={"text"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => this.setState({ mobile: text })}
            value={mobile}
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
            disabled={isNewContact}
            style={{ paddingLeft: 0 }}
            placeholder="Email Address"
            changeSuccessColor={true}
            ellipsizeMode="tail"
            type={"text"}
            autoCapitalize="none"
            numberOfLines={1}
            autoCorrect={false}
            onChangeText={(text) => this.setState({ email: text })}
            value={email}
            keyboardType={"email-address"}
            returnKeyType={"done"}
            onSubmitEditing={this.validateTheContact()}
          />
          {isNewContact && (
            <Button
              onPress={this.validateTheContact()}
              title={"Submit"}
              textStyle={{ textAlign: "center" }}
              contentStyle={{ marginTop: scale(25), height: scale(40) }}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}

export default withLoader(withToast(ContactDetailScreen));
