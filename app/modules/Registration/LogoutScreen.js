import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/LogoutScreenStyles';
import { Icons } from '../../assets/index';
import { Button } from '../../components/index';
import _ from 'lodash';
import { CommonActions } from '@react-navigation/native';
import { AppConstants } from '../../constants/index';

class LogoutScreen extends Component {

  constructor(props) {
    super(props);
  }

  doLogout = async () => {
    AsyncStorage.setItem(AppConstants.USER_DETAILS, null, () => {
      this.props.navigation.navigate(AppConstants.LOGIN)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}></View>
        <Text style={styles.title}>{'Proceed Sign-out?'}</Text>
        <View style={styles.actionContainer}>
          <Button
            disabled={false}
            onPress={this.doLogout()}
            title={'Yes'}
            iconURI={Icons.rightArrow}
            textStyle={{ textAlign: 'center', flex: 1 }}
            contentStyle={styles.buttonContainer}
          />
          <Button
            disabled={false}
            onPress={() => this.props.navigation.dispatch(CommonActions.goBack())}
            title={'Cancel'}
            iconURI={Icons.rightArrow}
            textStyle={{ textAlign: 'center', flex: 1 }}
            contentStyle={styles.buttonContainer}
          />
        </View>
      </View>
    );
  }
}


export default LogoutScreen;
