export const backgroundGradient = (colorMode: string) => (colorMode == "light"
    ? [
        "radial-gradient(circle 40vw at 0px 700px, #dbc1ffa1, transparent)",
        "radial-gradient(circle 40vw at 50% 600px, #ffe2fbcf, transparent)",
        "radial-gradient(circle 40vw at 70% 800px, #7ad4d333, transparent)",
        "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
      ]
    : [
        "radial-gradient(circle 40vw at 0px 700px, #4e169c78, transparent)",
        "radial-gradient(circle 40vw at 50% 600px, #46063d85, transparent)",
        "radial-gradient(circle 40vw at 70% 800px, #0020209c, transparent)",
        "linear-gradient(transparent, 400px, transparent, 1000px, hsla(225.7, 59.23%, 69.34%, 0.12), #ffe2fbcf)",
      ]
  ).join(", ");