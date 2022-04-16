const widths = {
  xmobile: '321px',
  mobile: '416px',
  tablet: '769px',
  laptop: '1100px',
};

export const theme = {
  fontWeights: {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
  fontSizes: {
    xxsmall: '14px',
    xsmall: '16px',
    small: '18px',
    medium: '24px',
    large: '28px',
    big: '32px',
    title: '56px',
    backgroundNum: '500px',
  },
  fontFamilies: {
    titleFont: `'Hind', sans-serif`,
    primaryFont: `'Nunito', sans-serif`,
  },
  colors: {
    white: '#ffffff',
    orange: '#ff9c6f',
    primaryBackground: '#454545',
    cardBackground: '#3f3d56',
    whiteBackground: '#e6e6e6',
  },
  breakpoints: {
    xmobile: `screen and (max-width: ${widths.xmobile})`,
    mobile: `screen and (max-width: ${widths.mobile})`,
    tablet: `screen and (max-width: ${widths.tablet})`,
    laptop: `screen and (max-width: ${widths.laptop})`,
  },
};
