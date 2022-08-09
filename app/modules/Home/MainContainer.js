import React, {Component} from 'react';
import {View} from 'react-native';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import {WINDOW} from '../../utils/Metrics';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          position: 'absolute',
          right: 0,
          left: 0,
          width: WINDOW.width,
          zIndex: 9999,
        }}>
        <Loader />
        <Toast />
      </View>
    );
  }
}

export default MainContainer;
