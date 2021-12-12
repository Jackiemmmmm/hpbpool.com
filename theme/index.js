const yellow = '#ffda79';
const transparent = 'transparent';
const white = '#ffffff';
const purple = '#251046';

const flex = {
  fill: {
    display: 'flex',
    flex: 1,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillCenter: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowReverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  colReverse: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  mainStart: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  mainCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  mainEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  mainSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainSpaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  crossStart: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  crossCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  crossEnd: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  crossStretch: {
    display: 'flex',
    alignItems: 'stretch',
  },
  rowMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCross: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colCross: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  colCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  fillRowReverse: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fillRowMain: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowCross: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fillRowCenter: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillCol: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  fillColReverse: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column-reverse',
  },
  fillColMain: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColCross: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  fillColCenter: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const theme = {
  typography: {
    // hpb pool use styels
    h1: { fontSize: 36, lineHeight: '56px', fontWeight: 'normal', letterSpacing: 'normal' },
    h3: { fontSize: 24, lineHeight: '32px', fontWeight: 'bold', letterSpacing: 'normal' },
    bodyLarge: { fontSize: 19, lineHeight: '32px', fontWeight: 'normal', letterSpacing: 'normal' },
    body1: { fontSize: 14, lineHeight: '20px', letterSpacing: 'normal' },

    fontFamily: '"Roboto" "Arimo", "Helvetica", "Arial", sans-serif',
    h2: { fontSize: 22, lineHeight: '40px', fontWeight: 'bold', letterSpacing: 'normal' },
    h4: { fontSize: 16, lineHeight: '28px', letterSpacing: 'normal' },
    h5: { fontSize: 14, lineHeight: '20px', fontWeight: 'bold', letterSpacing: 'normal' },
    h6: { fontSize: 12, lineHeight: '16px', fontWeight: 'bold', letterSpacing: 'normal' },
    body2: { fontSize: 12, lineHeight: '20px', letterSpacing: 'normal' },
    button: {
      fontSize: 14,
      lineHeight: '24px',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 'bold',
    },
    caption: { fontSize: 10, lineHeight: '16px', letterSpacing: 'normal' },
    dropdown: { fontSize: 14, lineHeight: '20px' },
  },

  colors: {
    yellow,
    transparent,
    white,
    purple,
  },

  borderRadius: {
    // small: 4,
    // big: 8,
    // huge: 10,
    // full: 9999,
  },

  shadow: {
    // main: '0 2px 16px 0 rgba(51, 53, 50, 0.08)',
    // modal: '0 4px 16px 0 rgba(51, 53, 50, 0.24)',
    // componentDark: '0 2px 8px 0 rgba(51, 53, 50, 0.16)',
    // componentShallow: '0 2px 8px 0 rgba(51, 53, 50, 0.08)',
    // brandActionShallow: '0 0 4px 0 rgba(69, 87, 161, 0.64)',
  },

  flex,
};

export default theme;
