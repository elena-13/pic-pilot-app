import ReactSelect, { Props, OptionProps } from 'react-select';

import { ReactSelectOption } from './types';
import { selectMenuStyles } from './styles';

const Select = ({ ...props }: Props<ReactSelectOption, false>) => {
  return <ReactSelect {...props} styles={selectMenuStyles} />;
};

export default Select;
