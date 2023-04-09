import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { RectButton, InputLogin } from '../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    // handle login logic
  };

  return (
    <View style={{ 
      flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <InputLogin minWidth={'80%'} label={'Email'} onChangeText={(text)=>setEmail(text)}/>
      <InputLogin minWidth={'80%'} label={'Password'} isPasswordField={true} onChangeText={(text)=>setPassword(text)}/>
      <RectButton title={'Login'} minWidth={'80%'} fontSize={SIZES.medium}/>
    </View>
  );
}

export default Login;