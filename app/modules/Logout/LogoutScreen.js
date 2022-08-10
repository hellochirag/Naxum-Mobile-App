import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import withLoader from '../../actions/withLoader';
import withToast from '../../actions/withToast';
import styles from './styles/LogoutScreenStyles';
import { Images, Icons } from '../../assets/index';
import { Button } from '../../components/index';
import { Colors, scale } from '../../utils/index';
import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import API from '../../utils/RestAPI';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../../constants/index';
import { CommonActions } from '@react-navigation/native';

class LogoutScreen extends Component {

  constructor(props) {
    super(props);
  }

  doLogout = async () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}></View>
        <Text style={styles.title}>{'Proceed Sign-out?'}</Text>
        <View style={styles.actionContainer}>
          <Button
            disabled={false}
            onPress={() => true}
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

