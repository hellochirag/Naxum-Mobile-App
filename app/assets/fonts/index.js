import {moderateScale} from '../../utils/Metrics';

const type = {
  bold: 'System',
  semiBold: 'System',
  medium: 'System',
  regular: 'System',
};

const size = {
  input: moderateScale(18),
  regular: moderateScale(17),
  medium: moderateScale(14),
  tabLabel: moderateScale(15),
  small: moderateScale(12),
  tiny: moderateScale(10),
  label: moderateScale(16),
};

export default {
  type,
  size,
};
