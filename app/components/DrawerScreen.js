import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles/DrawerScreenStyle";
import { Images } from "../assets/index";
import ProfileIcon from "react-native-vector-icons/Fontisto";
import { Colors, scale } from "../utils/index";
import { connect } from "react-redux";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstants } from "../constants/index";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleProfile: false,
      loading: true,
      photo:  null,
    };
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem(AppConstants.USER_DETAILS).then((value) => {
      const object = JSON.parse(value);
      this.setState({
        UserDetail: object,
        photo: object?.picture,
      });
    });
  }

  profileAction = () => {
    const { toggleProfile } = this.state;
    this.setState({ toggleProfile: !toggleProfile });
  };

  render() {
    const { toggleProfile, loading, photo } = this.state;
    const imgurl = photo?.length > 0 ? { uri: photo } : Images.profileDefault;

    return (
      <View style={styles.container}>
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
        <View style={styles.horizontalLine}></View>
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownRaw}>
            <ProfileIcon name={"locked"} size={20} color={Colors.gray} />
            <Text style={styles.title}>{"Profile"}</Text>
          </View>
          <TouchableOpacity
            style={styles.editPhotoIcon}
            onPress={this.profileAction}
          >
            <EntypoIcon
              name={toggleProfile ? "chevron-up" : "chevron-down"}
              size={24}
              color={Colors.gray}
            />
          </TouchableOpacity>
        </View>
        {toggleProfile && (
          <View style={styles.myProfileRaw}>
            <TouchableOpacity
              style={{ paddingLeft: scale(40) }}
              onPress={() => {
                this.props.navigation.navigate(AppConstants.PROFILE, {
                  UserDetail: this.state.UserDetail,
                });
              }}
            >
              <Text style={styles.title}>{"My Profile"}</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.logoutRaw}>
          <TouchableOpacity style={styles.logoutContainer} onPress={() => true}>
            <AntDesign name={"poweroff"} size={18} color={Colors.gray} />
            <Text style={styles.title}>{"Logout"}</Text>
          </TouchableOpacity>
          <View />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValue: state.form.loginForm ? state.form.loginForm.values : {},
  };
};

export default connect(mapStateToProps, {})(DrawerScreen);
