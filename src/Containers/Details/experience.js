import React from 'react'
import styles from '@/Theme/Styles'
import { View, StyleSheet, Text, Image } from 'react-native'

const Experience = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Images/Avatar.png')}
        style={styles.avtarLogo}
      />
      <View>
        <Text style={{ textAlign: 'center' }}>
          My Self Mureed Sultan I full Stack React Native and Web Site Developer
        </Text>
      </View>
      <View style={styles.eduBox}>
        <Text style={styles.mstrTxt}>Turnkey Business International:-</Text>
        <Text style={styles.mstrTxtDetail}>
          I started as React Native Developer since june 2021
        </Text>
        <Text style={styles.mstrTxt}>11 Seas Private LTD:-</Text>
        <Text style={styles.mstrTxtDetail}>
          Vanila HTML, CSS and JS more then Year Experience
        </Text>
      </View>
    </View>
  )
}

export default Experience
