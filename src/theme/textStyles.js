const defaultTextStyle = {
  fontFamily: 'Poppins',
  color: '#000000',
  m: 0,
};

const textStyles = {
  title1: {
    ...defaultTextStyle,
    fontSize: ['5xl', '6xl', '8xl'],
    fontWeight: 'bold',
    lineHeight: '1.25',
    textShadow: '0px 0px 25px rgba(109, 23, 139, 0.25)',
    as: 'h1',
  },
  title2: {
    ...defaultTextStyle,
    fontSize: ['3xl', '4xl', '5xl'],
    fontWeight: 'bold',
    lineHeight: '1.3',
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
  label1: {
    ...defaultTextStyle,
    fontSize: ['xl', '2xl'],
    fontWeight: 'bold',
    as: 'p',
    color: 'white',
  },
  body1: {
    ...defaultTextStyle,
    fontSize: 'md',
    fontWeight: 'bold',
    as: 'p',
  },
  body2: {
    ...defaultTextStyle,
    fontSize: 'md',
    fontWeight: 'normal',
    as: 'p',
  },
  inherit: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
};

export default textStyles;
