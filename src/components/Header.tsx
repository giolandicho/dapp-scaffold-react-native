import React, {useContext} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Colors} from './Colors';
import { AuthContext, AuthUser } from '../providers/AuthProvider';

export function Header() {
  const auth = useContext(AuthContext);
  const user = auth.currentUser ? auth.currentUser : undefined;
  const handleLogout = () => {
    auth.logout(user);
  }
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('../background.png')}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <View>
        <Text style={styles.title}>Solana</Text>
        <Text style={styles.subtitle}>React Native</Text>
        <Button title='Log Out' color={'white'} onPress={handleLogout}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  logo: {
    overflow: 'visible',
    resizeMode: 'cover',
  },
  subtitle: {
    color: '#333',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});
