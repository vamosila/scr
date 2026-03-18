import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PrimaryScreen from './screens/PrimaryScreen';
import SecondaryScreen from './screens/SecondaryScreen';

const Stack = createNativeStackNavigator();

const BaseStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Primary" component={PrimaryScreen} />
        <Stack.Screen name="Secondary" component={SecondaryScreen} />
    </Stack.Navigator>
  )
}

export default BaseStack
