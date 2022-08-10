import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import withLoader from "../../actions/withLoader";
import withToast from "../../actions/withToast";
import styles from "./styles/DashboardScreenStyles";
import { Images } from "../../assets/index";
import { Button, CustomHeader } from "../../components/index";
import { Colors, scale } from "../../utils/index";
import { connect } from "react-redux";
import API from "../../utils/RestAPI";
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConstants } from "../../constants/index";
import EntypoIcon from "react-native-vector-icons/Entypo";
import PlusIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EmailIcon from "react-native-vector-icons/Fontisto";
import PhoneIcon from "react-native-vector-icons/FontAwesome5";
import RefreshContactIcon from "react-native-vector-icons/AntDesign";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchValue: "",
    };
  }

  UNSAFE_componentWillMount() {
    this.getContacts();
  }

  getContacts = async (searchValue) => {
    const { loader, toast } = this.props;
    loader(true);
    var object = await AsyncStorage.getItem(AppConstants.USER_DETAILS);
    object = JSON.parse(object);
    await API.getContacts({
      header: { token: object?.token },
      params: searchValue,
    })
      .then(async (response) => {
        loader(false);
        if (response?.success && response?.data?.length > 0) {
          this.setState({ contacts: response?.data });
        } else if (response?.success && response?.data?.length === 0) {
          this.setState({ contacts: [] });
          toast({ text: `We couldn't find any matches for "${searchValue}"` });
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

  renderItem = (item) => {
    const { picture, first_name, last_name } = item?.item;
    const imgURI = picture ? { uri: picture } : Images.profileDefault;
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() =>
          this.props.navigation.navigate(AppConstants.ADD_CONTACT, {
            isNewContact: false,
            UserDetail: item?.item,
          })
        }
      >
        <Image
          source={imgURI}
          style={styles.contactImage}
          resizeMode={"cover"}
        />
        <Text style={styles.contactName}>{first_name + " " + last_name}</Text>
      </TouchableOpacity>
    );
  };

  onChangeSearch = (text) => {
    this.setState({ searchValue: text });
  };

  render() {
    const { contacts, searchValue } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <CustomHeader />
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <EntypoIcon name={"menu"} size={20} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>{"Add Contacts"}</Text>
        <View style={styles.actionableButtonRaw}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(AppConstants.ADD_CONTACT, {
                isNewContact: true,
              })
            }
          >
            <View style={styles.actionableButton}>
              <PlusIcon
                name={"plus-box-multiple-outline"}
                size={40}
                color={Colors.white}
              />
            </View>
            <Text style={styles.subtitle}>{"New"}</Text>
          </TouchableOpacity>
          <View>
            <View style={styles.actionableButton}>
              <PhoneIcon name={"address-book"} size={40} color={Colors.white} />
            </View>
            <Text style={styles.subtitle}>{"Phone Book"}</Text>
          </View>
          <View>
            <View style={styles.actionableButton}>
              <EmailIcon name={"email"} size={40} color={Colors.white} />
            </View>
            <Text style={styles.subtitle}>{"Email"}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeSearch}
          value={searchValue}
          placeholder="Search Contract"
        />
        <Button
          disabled={false}
          onPress={() => this.getContacts(searchValue)}
          title={"Search"}
          textStyle={styles.searchButtonText}
          contentStyle={{ height: scale(32), marginTop: scale(18), padding: 0 }}
        />
        <FlatList
          style={styles.listStyle}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: scale(20),
          }}
          data={contacts}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyContent}>
                <Text
                  style={styles.emptyText}
                >{`We couldn't find any matches for "${searchValue}"`}</Text>
              </View>
            );
          }}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.value}
        />
        <TouchableOpacity
          onPress={() => this.getContacts("")}
          style={styles.floatingButton}
        >
          <RefreshContactIcon name={"adduser"} size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValue: state.form.loginForm ? state.form.loginForm.values : {},
  };
};

export default connect(
  mapStateToProps,
  {}
)(withLoader(withToast(DashboardScreen)));
