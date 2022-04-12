import React from 'react'
import styles from '@/Theme/Styles'
import { View, StyleSheet, Text, Image } from 'react-native'

const Education = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Images/Avatar.png')}
        style={styles.avtarLogo}
      />
      <View>
        <Text style={{ textAlign: 'center' }}>
          My Self Mureed Sultan I am from Bhakkar
        </Text>
      </View>
      <View style={styles.eduBox}>
        <Text style={styles.mstrTxt}>Masters:-</Text>
        <Text style={styles.mstrTxtDetail}>M.Com from GCUF</Text>
        <Text style={styles.mstrTxt}>Batchelors:-</Text>
        <Text style={styles.mstrTxtDetail}>B.Com from UOS</Text>
        <Text style={styles.mstrTxt}>Inter:-</Text>
        <Text style={styles.mstrTxtDetail}>ICS from BISE Sargodha</Text>
      </View>
    </View>
  )
}

export default Education
