import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import withLoader from '../../actions/withLoader';
import withToast from '../../actions/withToast';
import styles from './styles/DashboardScreenStyles';
import { Images, Icons } from '../../assets/index';
import { Button, CustomHeader } from '../../components/index';
import { Colors, scale } from '../../utils/index';
import CustomTextInput from '../../components/CustomTextInput';
import { formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import API from '../../utils/RestAPI';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstants } from '../../constants/index';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import RefreshContactIcon from 'react-native-vector-icons/AntDesign';

class DashboardScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchData: [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ],
      searchContact: ''
    };
  }

  renderItem = (item) => {
    const name = item.item.label;
    const imgurl = item.item.uri ? { uri: item.item.uri } : Images.profileDefault;
    return (
      <View style={styles.listContainer}>
        <Image
          source={imgurl}
          style={styles.contactImage}
          resizeMode={'cover'}
        />
        <Text style={styles.contactName}>{name}</Text>
      </View>
    )
  }

  onChangeSearch = (searchContact) => {
    this.setState({ searchContact: searchContact })

  }

  render() {
    const { searchData, searchContact } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <CustomHeader />
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.toggleDrawer()}
        >
          <EntypoIcon name={'menu'} size={20} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.title}>{'Add Contacts'}</Text>
        <View style={styles.actionableButtonRaw}>
          <View>
            <View style={styles.actionableButton}>
              <PlusIcon name={'plus-box-multiple-outline'} size={40} color={Colors.white} />
            </View>
            <Text style={styles.subtitle}>{'New'}</Text>
          </View>
          <View>
            <View style={styles.actionableButton}>
              <PhoneIcon name={'address-book'} size={40} color={Colors.white} />
            </View>
            <Text style={styles.subtitle}>{'Phone Book'}</Text>
          </View>
          <View>
            <View style={styles.actionableButton}>
              <EmailIcon name={'email'} size={40} color={Colors.white} />
            </View>
            <Text style={styles.subtitle}>{'Email'}</Text>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeSearch}
          value={searchContact}
          placeholder="Search Contract"
        />
        <Button
          disabled={false}
          onPress={() => this.props.navigation.navigate('Root')}
          title={'Search'}
          textStyle={styles.searchButtonText}
          contentStyle={{ height: scale(32), marginTop: scale(18), padding: 0 }}
        />
        <FlatList
          style={styles.listStyle}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: scale(20)
          }}
          data={searchData}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.value}
        />
        <TouchableOpacity style={styles.floatingButton}>
          <RefreshContactIcon name={'adduser'} size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    formValue: state.form.loginForm ? state.form.loginForm.values : {},
  };
};

export default connect(mapStateToProps, {})(withLoader(withToast(DashboardScreen)));

