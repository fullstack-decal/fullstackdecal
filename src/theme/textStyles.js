const defaultTextStyle = {};

const textStyles = {
  title1: {
    ...defaultTextStyle,
    fontSize: ["5xl", "6xl", "8xl"],
    fontWeight: "200",
    lineHeight: "1",
  },
  title2: {
    ...defaultTextStyle,
    fontSize: "5xl",
    fontWeight: 500,
    lineHeight: "1.2",
    mt: "4rem",
    mb: "3rem",
    as: "h2",
  },
  subtitle1: {
    ...defaultTextStyle,
    fontWeight: "500",
    fontSize: "lg",
    lineHeight: 1.3,
    mb: 1,
  },
  subtitle2: {
    ...defaultTextStyle,
    fontWeight: "500",
    fontSize: "lg",
    color: "gray.500",
    lineHeight: 1.3,
    mb: 1,
  },
  subtitle3: {
    ...defaultTextStyle,
    fontWeight: "300",
    fontSize: "xl",
    my: 0,
  },
  label1: {
    ...defaultTextStyle,
    fontSize: "sm",
    my: 0,
    fontWeight: "medium",
    color: "primary",
  },
  label2: {
    ...defaultTextStyle,
    fontSize: "sm",
    my: 0,
    fontWeight: "medium",
    color: "gray.400",
  },
  body1: {
    ...defaultTextStyle,
    fontSize: "md",
    fontWeight: "bold",
    as: "p",
  },
  body2: {
    ...defaultTextStyle,
    fontSize: "md",
    fontWeight: "normal",
    as: "p",
  },
  caption: {
    ...defaultTextStyle,
    fontSize: "sm",
    lineHeight: "1.5",
    color: "gray.600",
  },
  inherit: {
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
  },
};

export default textStyles;
