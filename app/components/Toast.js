/**
 * @providesModule Toast
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Text } from 'react-native';
import Toast from 'react-native-root-toast';
class MyToast extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      toast: '',
      visible: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.toast.text !== prevState.toast.text) {
     Toast.show(nextProps.toast.text, {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
  });
      return {
        toast: nextProps.toast.text,
      };
    } else {
      return null;
    }
  }

  render() {
    return <Text />;
  }
}

const mapStateToProps = state => ({
  toast: state.toast !== '' ? state.toast : '',
});

export default connect(mapStateToProps)(MyToast);
