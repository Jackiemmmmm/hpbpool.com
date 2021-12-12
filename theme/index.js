const brandAction = '#4557a1';
const brandHover = '#374681';
const brandIcon = '#5566aa';
const brandMedium = '#8f9dd6';
const brandBg = '#f4f5fb';
const dark = '#333532';
const grey66 = '#666666';
const grey99 = '#999999';
const greyCc = '#cccccc';
const greyE8 = '#e3e8e8';
const greyF7 = '#f5f7f7';
const greyFa = '#f9fafa';
const yellow = '#fece00';
const yellowMedium = '#ffe266';
const yellowBg = '#fff6cc';
const yellowDark = '#f1be04';
const red = '#d85145';
const redMedium = '#f89d96';
const redBg = '#fde4e2';
const redDark = '#ca493f';
const green = '#3ea769';
const greenMedium = '#88d3a6';
const greenDark = '#419061';
const greenBg = '#e9f7ee';
const violet = '#475e9f';
const violetMedium = '#8e9fcc';
const violetBg = '#eaedf6';
const violetDark = '#495a88';
const orange = '#fb8f23';
const orangeBg = '#ffe6ce';
const orangeMedium = '#fcc083';
const orangeDark = '#f08519';
const blue = '#0c8be6';
const blueBg = '#e7f4fe';
const blueMedium = '#62b9f7';
const blueDark = '#147ec9';
const rose = '#f22f70';
const roseBg = '#fde2eb';
const roseMedium = '#f99fbd';
const roseDark = '#e72767';
const transparent = 'transparent';
const white = '#ffffff';

const mainRootPadding = '16px 32px';

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
    fontFamily: '"Arimo", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: 28, lineHeight: '40px', fontWeight: 'normal', letterSpacing: 'normal' },
    h2: { fontSize: 22, lineHeight: '40px', fontWeight: 'bold', letterSpacing: 'normal' },
    h3: { fontSize: 18, lineHeight: '32px', letterSpacing: 'normal' },
    h4: { fontSize: 16, lineHeight: '28px', letterSpacing: 'normal' },
    h5: { fontSize: 14, lineHeight: '20px', fontWeight: 'bold', letterSpacing: 'normal' },
    h6: { fontSize: 12, lineHeight: '16px', fontWeight: 'bold', letterSpacing: 'normal' },
    body1: { fontSize: 14, lineHeight: '24px', letterSpacing: 'normal' },
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

  mainRootPadding,

  colors: {
    brandAction,
    brandHover,
    brandIcon,
    brandMedium,
    brandBg,
    dark,
    grey66,
    grey99,
    greyCc,
    greyE8,
    greyF7,
    greyFa,
    yellow,
    yellowMedium,
    yellowBg,
    yellowDark,
    red,
    redMedium,
    redBg,
    redDark,
    green,
    greenMedium,
    greenBg,
    greenDark,
    violet,
    violetMedium,
    violetBg,
    violetDark,
    orange,
    orangeMedium,
    orangeBg,
    orangeDark,
    blue,
    blueBg,
    blueMedium,
    blueDark,
    rose,
    roseBg,
    roseMedium,
    roseDark,
    transparent,
    white,
  },

  borderRadius: {
    small: 4,
    big: 8,
    huge: 10,
    full: 9999,
  },

  shadow: {
    main: '0 2px 16px 0 rgba(51, 53, 50, 0.08)',
    modal: '0 4px 16px 0 rgba(51, 53, 50, 0.24)',
    componentDark: '0 2px 8px 0 rgba(51, 53, 50, 0.16)',
    componentShallow: '0 2px 8px 0 rgba(51, 53, 50, 0.08)',
    brandActionShallow: '0 0 4px 0 rgba(69, 87, 161, 0.64)',
  },

  flex,
};

export default theme;
