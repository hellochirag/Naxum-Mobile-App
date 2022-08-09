import React, { Component } from 'react';
import { View, TouchableOpacity, ImageBackground, Text, SafeAreaView } from 'react-native';
import { Images } from '../../assets/index';
import { CustomHeader } from '../../components/index';
import _ from 'lodash';
import styles from './styles/SettingsScreenStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../utils/index';
import { Button as DialogButton, Dialog, Portal, Provider, RadioButton } from 'react-native-paper';

const HeaderBanner = () => {
  return (
    <ImageBackground source={Images.bannerHome} resizeMode="cover" style={styles.settingBannerContent} >
      <Text style={styles.titleText} >{'Settings'}</Text>
    </ImageBackground>
  );
};

class SettingsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      visible: false,
      selectedPrinter: 'Zebra'
    };
  }

  render() {
    const {checked, visible, selectedPrinter } = this.state;
    return (
      <Provider>
      <SafeAreaView style={styles.container} forceInset={{ top: 'never' }} >
        <CustomHeader isBack isCenter isMenu={false} />
        <HeaderBanner />
        <View style={[styles.childContainer, {marginTop:25}]}>
          <Text style={styles.regularText} >{'Network'}</Text>
          <Text style={styles.mediumText} >{'Offline Mode'}</Text>
          <Text style={styles.childText} >{'Disables all web service requests. Can be used in situations where the network connection is poor.'}</Text>
          <TouchableOpacity disabled style={styles.checkBox} activeOpacity={0.5}>
          <Icon name={'checkbox-blank-outline'} size={30} color={Colors.deActiveTab} />
        </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        <TouchableOpacity style={styles.childContainer} onPress={() => this.setState({visible: true})}>
          <Text style={styles.mediumText} >{'Select Printer'}</Text>
          <Text style={styles.childText} >{'Selected Printer is Zebra'}</Text>
        </TouchableOpacity>

        <Portal>
        <Dialog visible={visible} onDismiss={() => this.setState({visible: false})}>
          <Dialog.Title>Select Printer</Dialog.Title>
          <Dialog.Content>
          <RadioButton.Group onValueChange={value => {
            console.log('Value ::', value);
            this.setState({visible: false,
              selectedPrinter: value})
          }} value={selectedPrinter}>
          <View style={styles.rowContainer}>
          <RadioButton.Android value="Zebra" />
           <Text style={styles.radioButton}>Zebra</Text>
        </View>

        <View style={styles.rowContainer}>
        <RadioButton.Android value="Bixolon" />
         <Text style={styles.radioButton}>Bixolon</Text>
      </View>
        </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <DialogButton color='grey' onPress={() => this.setState({visible: false})}>CANCEL</DialogButton>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      </SafeAreaView>
      </Provider>
    );
  }
}

export default SettingsScreen;

