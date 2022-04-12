import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native'
import CustomButton from '@/Components/utils/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ navigation }) {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('Home')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const setData = async () => {
    if (name.length == 0 || pass.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    } else {
      try {
        var user = {
          Name: name,
          pass: pass,
        }
        await AsyncStorage.setItem('UserData', JSON.stringify(user))
        navigation.navigate('Home')
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../Assets/Images/Logo.png')}
      />
      <Text style={styles.text}>Please Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Passsword"
        onChangeText={value => setPass(value)}
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'silver',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 130,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
})
