import { AuthContext } from './providers/AuthProvider'
import {WalletWithProviders} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useContext} from 'react'
import Login from './screens/Onboarding/Login';
import SignUp from './screens/Onboarding/SignUp';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    const auth = useContext(AuthContext);
    const user = auth.currentUser;
    console.log(auth.currentUser)
  return (
    <Stack.Navigator>
            {user === undefined ? (
            <>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='SignUp' component={SignUp} />
            </>
            ):
            <>
            <Stack.Screen name="Wallet" component={WalletWithProviders}/>
            </>
            }
          </Stack.Navigator>
  )
}

export default Navigator