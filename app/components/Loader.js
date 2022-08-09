/**
 * @Screen : Loader
 * @Description :
 *
 * @providesModule Loader
 */

import React, {Component} from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import withLoader from './../actions/withLoader';
import styles from './styles/LoaderStyle';
import {Colors} from '../utils'

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {loaderState} = this.props;
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loaderState}
        onRequestClose={() => {
          console.log('close modal');
        }}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.white} />
        </View>
      </Modal>
    );
  }
}

export default withLoader(Loader);
