import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

const styles = StyleSheet.create({
  imageLoader: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(16),
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
});

export default styles;
