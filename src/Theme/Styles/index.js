import React from 'react'
import { View, StyleSheet } from 'react-native'
import { WP } from './responsive'
const styles = StyleSheet.create({
  container: {
    width: WP(90),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  introImg: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  avtarLogo: {
    width: WP(40),
    height: WP(40),
    borderRadius: 500000,
    alignSelf: 'center',
    marginTop: WP(10),
  },
  btnPrimary: {
    marginTop: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: WP(10),
    paddingVertical: WP(2),
    borderRadius: 20,
    backgroundColor: 'brown',
  },
  btnTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  eduBox: {
    // borderWidth: 1,
  },
  svgSlide: {
    zIndex: -20,
    position: 'absolute',
    left: -20,
    top: -3,
  },
  mstrTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginVertical: 10,
  },
  mstrTxtDetail: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
})

export default styles
