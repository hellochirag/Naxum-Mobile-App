/**
 * @Screen : withToast
 * @Description :
 *
 * @providesModule withToast
 */

import {connect} from 'react-redux';
import {toastSet} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  toast: text => {
    dispatch(toastSet(text));
  },
});

export default connect(null, mapDispatchToProps);
