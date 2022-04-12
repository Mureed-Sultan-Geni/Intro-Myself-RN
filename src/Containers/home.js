import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert, TextInput } from 'react-native'
import CustomButton from '@/Components/utils/CustomButton'

export default function Home({ navigation, route }) {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          let user = JSON.parse(value)
          setName(user.Name)
          setPass(user.pass)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    } else {
      try {
        var user = {
          Name: name,
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user))
        Alert.alert('Success!', 'Your data has been updated.')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.clear()
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  const navEducation = () => {
    navigation.navigate('Education')
  }
  const navExperice = () => {
    navigation.navigate('Experience')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome Respected {name} !</Text>
      <Text style={styles.text}>Your Passsword is {pass}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <CustomButton
        title="Update"
        color="#ff7f00"
        onPressFunction={updateData}
      />
      <CustomButton
        title="Logout"
        color="#f40100"
        onPressFunction={removeData}
      />
      <Text style={styles.text}>What You want to know about me</Text>
      <CustomButton
        title="Education"
        color="green"
        onPressFunction={navEducation}
      />
      <CustomButton
        title="Expeience"
        color="brown"
        onPressFunction={navExperice}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 1,
    marginBottom: 10,
  },
})
