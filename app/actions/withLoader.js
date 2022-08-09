/**
 * @Screen : withLoader
 * @Description :
 *
 * @providesModule withLoader
 */

import {connect} from 'react-redux';
import {loaderSet} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  loader: state => {
    dispatch(loaderSet(state));
  },
});

const mapStateToProps = state => ({
  loaderState: state.loader ? state.loader : false,
});

export default connect(mapStateToProps, mapDispatchToProps);
