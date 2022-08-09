/**
 * @Screen : Register Custom Field
 * @Description :
 *
 * @providesModule CustomField
 */

import React, { Component } from 'react';
import { View, TextInput, Platform, Text, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import styles from './styles/TextInputStyle';
import { scale, Fonts, Colors } from '../utils/index';

class CustomField extends Component {

    focusInput() {
        if (this.input) {
            this.input.focus();
        }
    }

    render() {
        const {
            value, refProp, input, multiline, keyboardType, onChangeText, changeSuccessColor, placeholder, secureTextEntry, _onFocus, _onBlur,
            selectTextOnFocus, containerStyle, onLayout, ellipsizeMode, numberOfLines, returnKeyType, autoFocus, onEndEditing, autoGrow, maxLength, autoCapitalize, placeholderTextColor, autoCorrect, style, disabled, meta: { touched, error, warning }, onSubmitEditing,
            labelComponent, info, onInfoPress, itemInputStyle, leftSideComponent
        } = this.props;
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (itemInputStyle) ? itemInputStyle : styles.registerInputField;
        let returnKey = (returnKeyType) ? (Platform.OS === 'android') ? returnKeyType : (keyboardType && keyboardType === 'numeric') ? 'done' : returnKeyType : null;
        return (
            <>
            <View onLayout={onLayout} style={styles.container}>
                <View style={itemStyle} underline error={hasError && touched}>
                    {
                        (leftSideComponent) &&
                        <View>
                            {leftSideComponent}
                        </View>
                    }
                    <TextInput {...input}
                        ref={refProp ? refProp : (node) => this.input = node}
                        multiline={multiline}
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        selectTextOnFocus={selectTextOnFocus}
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.deActiveTab}
                        style={Object.assign([styles.inputStyle, style])}
                        placeholderStyle={styles.placeholder}
                        autoCapitalize={autoCapitalize}
                        autoCorrect={autoCorrect}
                        autoGrow={autoGrow}
                        returnKeyType={returnKey}
                        autoFocus={autoFocus}
                        onEndEditing={onEndEditing}
                        onSubmitEditing={onSubmitEditing}
                        numberOfLines={numberOfLines}
                        ellipsizeMode={ellipsizeMode}
                        maxLength={maxLength}
                        editable={!disabled}
                        onChangeText={onChangeText}
                        underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                    />
                </View>

              
            </View>

             {hasError && touched && <View
                style={[styles.infoInputRaw, (info) ? { height: scale(25) } : { height: scale(20) }]}>
                {(hasError && touched) ?
                    <View style={styles.errorInputRaw}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View> : null}
    
                {(info) && <TouchableOpacity
                    style={styles.infoRaw}
                    onPress={onInfoPress}>
                    <Text style={styles.infoText}>{info}</Text>
                </TouchableOpacity>}
    
            </View> }
            
        </>
        )
    }
}

class CustomTextInput extends Component {

    focus() {
        this.foo.getRenderedComponent().focusInput()
    }

    render() {
        return (
            <Field
                {...this.props}
                component={CustomField}
                ref={node => this.foo = node}
                withRef
            />
        );
    }

}

export default CustomTextInput;

