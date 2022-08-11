import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles/LogoutScreenStyles";
import { Button } from "../../components/index";
import _ from "lodash";
import { CommonActions } from "@react-navigation/native";
import { AppConstants } from "../../constants/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LogoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}></View>
        <Text style={styles.title}>{"Proceed Sign-out?"}</Text>
        <View style={styles.actionContainer}>
          <Button
            disabled={false}
            onPress={async () => {
              await AsyncStorage.removeItem(AppConstants.USER_DETAILS);
              this.props.navigation.navigate(AppConstants.LOGIN);
            }}
            title={"Yes"}
            textStyle={{ textAlign: "center", flex: 1 }}
            contentStyle={styles.buttonContainer}
          />
          <Button
            disabled={false}
            onPress={() =>
              this.props.navigation.dispatch(CommonActions.goBack())
            }
            title={"Cancel"}
            textStyle={{ textAlign: "center", flex: 1 }}
            contentStyle={styles.buttonContainer}
          />
        </View>
      </View>
    );
  }
}

export default LogoutScreen;
