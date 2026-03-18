
import { Button, StyleSheet, Text, View } from 'react-native'

const SecondaryScreen = ({navigation}) => {
  return (
    <View>
      <Text>SecondaryScreen</Text>
      <Button 
        title='Vissza'
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Főoldal'
        onPress={() => navigation.navigate('Primary')}
      />
    </View>
  )
}

export default SecondaryScreen

const styles = StyleSheet.create({})