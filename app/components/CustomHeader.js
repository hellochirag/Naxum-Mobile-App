import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert, Linking } from 'react-native';
import styles from './styles/CustomHeaderStyle';
import { Images } from '../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../utils/index';
import { AppConstants } from '../constants';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ isBack = false, onBackPress, isCenter = false, isMenu = true }) => {

  const [visible, setVisible] = useState(false);
  const [isHelp, setHelp] = useState(false);
  const hideMenu = () => setVisible(false);
  const navigation = useNavigation();
  const url= 'https://secureparkhelp.freshdesk.com/support/solutions';

  const doNavigate = (route) => {
    navigation.navigate(route)
    hideMenu();
  }


  return (
    <View style={styles.container} >
      {isBack && <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.5}>
        <Icon name={'keyboard-backspace'} size={30} color={Colors.black} />
      </TouchableOpacity>}
      <Image
        source={Images.blackLogo}
        style={isCenter ? styles.centerLogo : styles.logo}
        resizeMode={'contain'}
      />
      {isMenu &&
        <View style={styles.rightIcon}>
          
        </View>}
    </View>
  );
};

export default CustomHeader;
