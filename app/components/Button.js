import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles/ButtonStyle';
import { Icons } from '../assets';

const Button = ({ disabled, title ,onPress, iconURI,contentStyle, textStyle, isRightIcon= false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      style={[styles.container,contentStyle]}
      onPress={onPress}
    >
      <Text style={[styles.title,textStyle]}>{title}</Text>
      <TouchableOpacity activeOpacity={0.5}>
      {isRightIcon &&
        <Image
          source={iconURI}
          style={styles.rightIcon}
          resizeMode={'contain'}
        />
    }
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Button;
