import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/ButtonStyle';

const Button = ({ disabled, title ,onPress, contentStyle, textStyle }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      style={[styles.container,contentStyle]}
      onPress={onPress}
    >
      <Text style={[styles.title,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
