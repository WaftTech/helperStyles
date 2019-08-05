import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  bgTransparent: { backgroundColor: 'transparent' },
  bgBlack: { backgroundColor: '#000' },
  bgDarkest: { backgroundColor: '#3d4852' },
  bgDarker: { backgroundColor: '#606f7b' },
  bgDark: { backgroundColor: '#8795a1' },
  bgGray: { backgroundColor: '#b8c2cc' },
  bgLight: { backgroundColor: '#dae1e7' },
  bgLighter: { backgroundColor: '#f1f5f8' },
  bgLightest: { backgroundColor: '#f8fafc' },
  bgWhite: { backgroundColor: '#fff' },


  border0: { borderWidth: 0 },
  border1_2: { borderWidth: 0.5 },
  border1: { borderWidth: 1 },
  border2: { borderWidth: 2 },
  border4: { borderWidth: 4 },
  border8: { borderWidth: 8 },
  borderT1_2: { borderTopWidth: 0.5 },
  borderR1_2: { borderRightWidth: 0.5 },
  borderB1_2: { borderBottomWidth: 0.5 },
  borderL1_2: { borderLeftWidth: 0.5 },
  borderT1: { borderTopWidth: 1 },
  borderR1: { borderRightWidth: 1 },
  borderB1: { borderBottomWidth: 1 },
  borderL1: { borderLeftWidth: 1 },
  borderTransparent: { borderColor: 'transparent' },
  borderBlack: { borderColor: '#000' },
  borderDarkest: { borderColor: '#3d4852' },
  borderDarker: { borderColor: '#606f7b' },
  borderDark: { borderColor: '#8795a1' },
  borderGray: { borderColor: '#b8c2cc'},
  borderLight: { borderColor: '#dae1e7' },
  borderLighter: { borderColor: '#f1f5f8' },
  borderLightest: { borderColor: '#f8fafc' },
  borderWhite: { borderColor: '#fff' },
  borderSolid: { borderStyle: 'solid' },
  borderDashed: { borderStyle: 'dashed' },
  borderDotted: { borderStyle: 'dotted' },

  radius0: { borderRadius: 0 },
  radius1: { borderRadius: 1},
  radius2: { borderRadius: 2 },
  radius4: { borderRadius: 4 },
  radius6: { borderRadius: 6 },
  radius8: { borderRadius: 8 },
  radius999: { borderRadius: 999 },
  
  dnone: { display: 'none' },
  flex: { display: 'flex' },
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  col: { flexDirection: 'column' },
  colReverse: { flexDirection: 'column-reverse' },
  wrap: { flexWrap: 'wrap' },
  noWrap: { flexWrap: 'nowrap' },
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsCenter: { alignItems: 'center' },
  itemsBaseline: { alignItems: 'baseline' },
  itemsStretch: { alignItems: 'stretch' },
  selfAuto: { alignSelf: 'auto' },
  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },
  selfStretch: { alignSelf: 'stretch' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  contentCenter: { alignContent: 'center' },
  contentStart: { alignContent: 'flex-start' },
  contentEnd: { alignContent: 'flex-end' },
  contentBetween: { alignContent: 'space-between' },
  contentAround: { alignContent: 'space-around' },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  w1: { width: 1 },
  w4: { width: 4 },
  w8: { width: 8 },
  w12: { width: 12 },
  w16: { width: 16 },
  w24: { width: 24 },
  w32: { width: 32 },
  w40: { width: 40 },
  w48: { width: 48 },
  w60: { width: 60 },
  w64: { width: 64 },
  w96: { width: 96 },
  w128: { width: 128 },
  w180: { width: 180 },
  w192: { width: 192 },
  w256: { width: 256 },
  w512: { width: 512 },
  w1_2: { width: '50%' },
  w1_3: { width: '33.33333%' },
  w2_3: { width: '66.66667%' },
  w1_4: { width: '25%' },
  w3_4: { width: '75%' },
  w1_5: { width: '20%' },
  w2_5: { width: '40%' },
  w3_5: { width: '60%' },
  w4_5: { width: '80%' },
  wFull: { width: '100%' },
  wScreen: { width: Dimensions.get('window').width },

  h1: { height: 1 },
  h4: { height: 4 },
  h8: { height: 8 },
  h12: { height: 12 },
  h16: { height: 16 },
  h24: { height: 24 },
  h32: { height: 32 },
  h40: { height: 40 },
  h48: { height: 48 },
  h60: { height: 60 },
  h64: { height: 64 },
  h96: { height: 96 },
  h128: { height: 128 },
  h180: { height: 180 },
  h192: { height: 192 },
  h256: { height: 256 },
  h512: { height: 512 },
  h1_2: { height: '50%' },
  h1_3: { height: '33.33333%' },
  h2_3: { height: '66.66667%' },
  h1_4: { height: '25%' },
  h3_4: { height: '75%' },
  h1_5: { height: '20%' },
  h2_5: { height: '40%' },
  h3_5: { height: '60%' },
  h4_5: { height: '80%' },
  hFull: { height: '100%' },
  hScreen: { height: Dimensions.get('window').height },

  maxHeightFull: { maxHeight: '100%' },
  maxWidthFull: { maxWidth: '100%' },
  minHeight0: { minHeight: 0 },
  minHeightFull: { minHeight: '100%' },
  minWidth0: { minWidth: 0 },
  minWidthFull: { minWidth: '100%' },

  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },

  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  
  overflowHidden: { overflow:'hidden'},

  pin: { top: 0, right: 0, bottom: 0, left: 0 },
  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },

  zIndex10: { zIndex: 10 },
  zIndex20: { zIndex: 20 },
  zIndex30: { zIndex: 30 },

  textLeft: { textAlign: 'left' },
  textCenter: { textAlign: 'center' },
  textRight: { textAlign: 'right' },
  textJustify: { textAlign: 'justify' },

  colorTransparent: { color: 'transparent' },
  colorBlack: { color: '#22292f' },
  colorDarkest: { color: '#3d4852' },
  colorDarker: { color: '#606f7b' },
  colorDark: { color: '#8795a1' },
  colorGray: { color: '#b8c2cc' },
  colorLight: { color: '#dae1e7' },
  colorLighter: { color: '#f1f5f8' },
  colorLightest: { color: '#f8fafc' },
  colorWhite: { color: '#fff' },

  font12: { fontSize: 12 },
  font14: { fontSize: 14 },
  font16: { fontSize: 16 },
  font18: { fontSize: 18 },
  font20: { fontSize: 20 },
  font24: { fontSize: 24 },
  font30: { fontSize: 30 },
  font36: { fontSize: 36 },
  font48: { fontSize: 48 },
  
  lineHeight18: { lineHeight:18},
  lineHeight20: { lineHeight:20},
  lineHeight22: { lineHeight:22},
  lineHeight24: { lineHeight:24},

  fontHairline: { fontWeight: '100' },
  fontThin: { fontWeight: '200' },
  fontLight: { fontWeight: '300' },
  fontNormal: { fontWeight: '400' },
  fontMedium: { fontWeight: '500' },
  fontSemibold: { fontWeight: '600' },
  fontBold: { fontWeight: '700' },
  fontExtrabold: { fontWeight: '800' },
  italic: { fontStyle: 'italic' },
  

  trackingTight: { letterSpacing: -0.8 },
  trackingNormal: { letterSpacing: 0 },
  trackingWide: { letterSpacing: 0.8 },

  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },

  bgBlack25: { backgroundColor: 'rgba(0, 0, 0, 0.25)' },
  bgBlack50: { backgroundColor: 'rgba(0, 0, 0, 0.50)' },
  bgBlack75: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
  bgWhite25: { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
  bgWhite50: { backgroundColor: 'rgba(255, 255, 255, 0.50)' },
  bgWhite75: { backgroundColor: 'rgba(255, 255, 255, 0.75)' },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  
  m0: { marginTop: 0, marginBottom: 0, marginRight: 0, marginLeft: 0 },
  m1: { marginTop: 1, marginBottom: 1, marginRight: 1, marginLeft: 1 },
  m4: { marginTop: 4, marginBottom: 4, marginRight: 4, marginLeft: 4 },
  m8: { marginTop: 8, marginBottom: 8, marginRight: 8, marginLeft: 8 },
  m12: { marginTop: 12, marginBottom: 12, marginRight: 12, marginLeft: 12 },
  m16: { marginTop: 16, marginBottom: 16, marginRight: 16, marginLeft: 16 },
  m24: { marginTop: 24, marginBottom: 24, marginRight: 24, marginLeft: 24 },
  m32: { marginTop: 32, marginBottom: 32, marginRight: 32, marginLeft: 32 },
  my0: { marginTop: 0, marginBottom: 0 },
  mx0: { marginLeft: 0, marginRight: 0 },
  my1: { marginTop: 1, marginBottom: 1 },
  mx1: { marginLeft: 1, marginRight: 1 },
  my4: { marginTop: 4, marginBottom: 4 },
  mx4: { marginLeft: 4, marginRight: 4 },
  my8: { marginTop: 8, marginBottom: 8 },
  mx8: { marginLeft: 8, marginRight: 8 },
  my12: { marginTop: 12, marginBottom: 12 },
  mx12: { marginLeft: 12, marginRight: 12 },
  my16: { marginTop: 16, marginBottom: 16 },
  mx16: { marginLeft: 16, marginRight: 16 },
  my24: { marginTop: 24, marginBottom: 24 },
  mx24: { marginLeft: 24, marginRight: 24 },
  my32: { marginTop: 32, marginBottom: 32 },
  mx32: { marginLeft: 32, marginRight: 32 },
  mt0: { marginTop: 0 },
  mr0: { marginRight: 0 },
  mb0: { marginBottom: 0 },
  ml0: { marginLeft: 0 },
  mt1: { marginTop: 1 },
  mr1: { marginRight: 1 },
  mb1: { marginBottom: 1 },
  ml1: { marginLeft: 1 },
  mt4: { marginTop: 4 },
  mr4: { marginRight: 4 },
  mb4: { marginBottom: 4 },
  ml4: { marginLeft: 4 },
  mt8: { marginTop: 8 },
  mr8: { marginRight: 8 },
  mb8: { marginBottom: 8 },
  ml8: { marginLeft: 8 },
  mt12: { marginTop: 12 },
  mr12: { marginRight: 12 },
  mb12: { marginBottom: 12 },
  ml12: { marginLeft: 12 },
  mt16: { marginTop: 16 },
  mr16: { marginRight: 16 },
  mb16: { marginBottom: 16 },
  ml16: { marginLeft: 16 },
  mt24: { marginTop: 24 },
  mr24: { marginRight: 24 },
  mb24: { marginBottom: 24 },
  ml24: { marginLeft: 24 },
  mt32: { marginTop: 32 },
  mr32: { marginRight: 32 },
  mb32: { marginBottom: 32 },
  ml32: { marginLeft: 32 },
  
  p0: { paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: 0 },
  p1: { paddingTop: 1, paddingBottom: 1, paddingRight: 1, paddingLeft: 1 },
  p4: { paddingTop: 4, paddingBottom: 4, paddingRight: 4, paddingLeft: 4 },
  p8: { paddingTop: 8, paddingBottom: 8, paddingRight: 8, paddingLeft: 8 },
  p12: { paddingTop: 12, paddingBottom: 12, paddingRight: 12, paddingLeft: 12 },
  p16: { paddingTop: 16, paddingBottom: 16, paddingRight: 16, paddingLeft: 16 },
  p24: { paddingTop: 24, paddingBottom: 24, paddingRight: 24, paddingLeft: 24 },
  p32: { paddingTop: 32, paddingBottom: 32, paddingRight: 32, paddingLeft: 32 },
  py0: { paddingTop: 0, paddingBottom: 0 },
  px0: { paddingLeft: 0, paddingRight: 0 },
  py1: { paddingTop: 1, paddingBottom: 1 },
  px1: { paddingLeft: 1, paddingRight: 1 },
  py4: { paddingTop: 4, paddingBottom: 4 },
  px4: { paddingLeft: 4, paddingRight: 4 },
  py8: { paddingTop: 8, paddingBottom: 8 },
  px8: { paddingLeft: 8, paddingRight: 8 },
  py12: { paddingTop: 12, paddingBottom: 12 },
  px12: { paddingLeft: 12, paddingRight: 12 },
  py16: { paddingTop: 16, paddingBottom: 16 },
  px16: { paddingLeft: 16, paddingRight: 16 },
  py24: { paddingTop: 24, paddingBottom: 24 },
  px24: { paddingLeft: 24, paddingRight: 24 },
  py32: { paddingTop: 32, paddingBottom: 32 },
  px32: { paddingLeft: 32, paddingRight: 32 },
  pt0: { paddingTop: 0 },
  pr0: { paddingRight: 0 },
  pb0: { paddingBottom: 0 },
  pl0: { paddingLeft: 0 },
  pt1: { paddingTop: 1 },
  pr1: { paddingRight: 1 },
  pb1: { paddingBottom: 1 },
  pl1: { paddingLeft: 1 },
  pt4: { paddingTop: 4 },
  pr4: { paddingRight: 4 },
  pb4: { paddingBottom: 4 },
  pl4: { paddingLeft: 4 },
  pt8: { paddingTop: 8 },
  pr8: { paddingRight: 8 },
  pb8: { paddingBottom: 8 },
  pl8: { paddingLeft: 8 },
  pt12: { paddingTop: 12 },
  pr12: { paddingRight: 12 },
  pb12: { paddingBottom: 12 },
  pl12: { paddingLeft: 12 },
  pt16: { paddingTop: 16 },
  pr16: { paddingRight: 16 },
  pb16: { paddingBottom: 16 },
  pl16: { paddingLeft: 16 },
  pt24: { paddingTop: 24 },
  pr24: { paddingRight: 24 },
  pb24: { paddingBottom: 24 },
  pl24: { paddingLeft: 24 },
  pt32: { paddingTop: 32 },
  pr32: { paddingRight: 32 },
  pb32: { paddingBottom: 32 },
  pl32: { paddingLeft: 32 },

export default styles;
