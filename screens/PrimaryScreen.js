

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PrimaryScreen = ({navigation}) => {
  return (
    <View>
      <Text>PrimaryScreen</Text>
      <Button 
        title='Második'
        onPress={() => navigation.navigate('Secondary')}
      />
    </View>
  )
}

export default PrimaryScreen

const styles = StyleSheet.create({})