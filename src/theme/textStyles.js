const defaultTextStyle = {
  color: 'rgb(55, 53, 47)',
  m: 0,
};

const textStyles = {
  title: {
    ...defaultTextStyle,
    fontSize: '5xl',
    fontWeight: 'bold',
  },
  subtitle1: {
    ...defaultTextStyle,
    fontSize: '3xl',
    fontWeight: 'bold',
  },
  subtitle2: {
    ...defaultTextStyle,
    fontSize: '2xl',
    fontWeight: 'bold',
  },
  subtitle3: {
    ...defaultTextStyle,
    fontSize: 'xl',
    fontWeight: 'bold',
  },
  body: {
    ...defaultTextStyle,
    fontSize: 'md',
    fontWeight: 'normal',
  },
  inherit: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
};

export default textStyles;
