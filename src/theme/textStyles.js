const defaultTextStyle = {
  fontFamily: 'Poppins',
  color: '#000000',
  m: 0,
};

const textStyles = {
  title1: {
    ...defaultTextStyle,
    fontSize: '7xl',
    fontWeight: 'bold',
    as: 'h1',
  },
  title2: {
    ...defaultTextStyle,
    fontSize: '5xl',
    fontWeight: 'bold',
    as: 'h2',
  },
  subtitle1: {
    ...defaultTextStyle,
    fontSize: '3xl',
    fontWeight: 'bold',
    as: 'h3',
  },
  subtitle2: {
    ...defaultTextStyle,
    fontSize: 'lg',
    fontWeight: 'bold',
    as: 'h4',
  },
  body1: {
    ...defaultTextStyle,
    fontSize: 'md',
    fontWeight: 'normal',
    as: 'p',
  },
  body2: {
    ...defaultTextStyle,
    fontSize: 'md',
    fontWeight: 'normal',
    color: 'grey',
    as: 'p',
  },
  inherit: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
};

export default textStyles;
