import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useState, useContext} from 'react'
import { AuthContext, AuthUser } from '../../providers/AuthProvider';
import { Colors } from '../../components/Colors';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const auth = useContext(AuthContext);

    const handleSubmit = () => {
        if(username !== '' && password !== ''){
            auth.login(username, password);
        }
    }
  return (
    <View
        style={styles.main}
    >
      <ImageBackground
        source={require('../../background.png')}
        style={[
            styles.background,
            {
              backgroundColor: Colors.lighter,
            },
          ]}
          imageStyle={styles.logo}
      >
        <Text style={styles.loginText}>
            Solana Wallet Sign In
        </Text>
      </ImageBackground>
      <TextInput 
        style={styles.input}
        onChangeText={setUsername}
        placeholder='Username'
        value={username}
      />
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                Sign In
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin:10,
        borderWidth:1,
        padding:10,
    },
    main:{
        flex:1,
        marginTop:100,
    },
    button:{
        height: 40,
        margin: 20,
        borderWidth:1,
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    background: {
        paddingBottom: 40,
        paddingTop: 60,
        paddingHorizontal: 32,
        marginBottom:40,
      },
      logo: {
        overflow: 'visible',
        resizeMode: 'cover',
      },
    buttonText:{
        color:'white',
        fontSize:25,
    },
    loginText:{
        color:"white",
        fontSize:20,
        alignSelf:'center'
    }
})



export default Login