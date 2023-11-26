import { CSSObjectWithLabel, GroupBase, StylesConfig } from 'react-select';

import { ReactSelectOption } from './types';

const SELECT_HEIGHT = '2.8rem';
const SELECT_BACKGROUND_COLOR = '#4F4F4F';
const SELECT_BORDER_COLOR = '#4F4F4F';
const SELECT_FONT_COLOR = '#F5F5F5';
const SELECT_BORDER_RADIUS = '1.2rem';
const SELECT_ACCENT_COLOR = '#b2f366';
const SELECT_FONT_SIZE = '1.2rem';
const SELECT_ACTIVE_COLOR = '#575757';
const SELECT_HOVER_COLOR = '#5F5F5F';

export const selectMenuStyles: StylesConfig<ReactSelectOption, false> = {
  container: (provided: CSSObjectWithLabel) => ({
    ...provided,
    width: '100%',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: (provided: CSSObjectWithLabel, { menuIsOpen }) => ({
    ...provided,
    minHeight: SELECT_HEIGHT,
    height: SELECT_HEIGHT,
    color: SELECT_FONT_COLOR,
    backgroundColor: SELECT_BACKGROUND_COLOR,
    borderColor: menuIsOpen ? SELECT_ACCENT_COLOR : 'transparent',
    borderRadius: SELECT_BORDER_RADIUS,
    boxShadow: 'none',
    fontSize: SELECT_FONT_SIZE,
    cursor: 'pointer',
    ':hover': {
      ...provided[':hover'],
      borderColor: SELECT_ACCENT_COLOR,
      boxShadow: 'none',
    },
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: SELECT_FONT_COLOR,
  }),
  placeholder: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontSize: SELECT_FONT_SIZE,
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    overflow: 'hidden',
    backgroundColor: SELECT_BACKGROUND_COLOR,
    border: `1px solid ${SELECT_BORDER_COLOR}`,
    borderRadius: SELECT_BORDER_RADIUS,
  }),
  option: (provided: CSSObjectWithLabel, { isSelected }) => ({
    ...provided,
    fontSize: SELECT_FONT_SIZE,
    backgroundColor: isSelected ? SELECT_ACTIVE_COLOR : 'inherit',
    ':hover': {
      ...provided[':hover'],
      backgroundColor: SELECT_HOVER_COLOR,
    },
  }),
  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0.5rem',
  }),
};
