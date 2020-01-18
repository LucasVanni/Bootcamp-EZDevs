import React, {useCallback, useState} from 'react';
import {TouchableOpacity, Text, TextInput, Image, View} from 'react-native';

import logo from '../../assets/images/logo.png';

// import api from '../services/api';

export default ({navigation: {navigate}}) => {
  const [userName, setUserName] = useState('');

  // Callback -> não chama a função toda vez que terá que renderizar a tela.
  const onSubmit = useCallback(() => {
    //const {data: {_id: id}} = await api.post('/devs', data: {username})
    // navigate('Main', {id});
    navigate('Main');
  }, [navigate]);

  //, username

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={logo} />
      <TextInput
        value={userName}
        onChangeText={setUserName}
        autoCapitalize="none"
        placeholder="Digite seu usuário no GitHub"
        style={{
          marginTop: 20,
          height: 45,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 4,
          alignSelf: 'stretch',
        }}
      />
      <TouchableOpacity
        onPress={() => onSubmit(userName)}
        style={{
          marginTop: 10,
          height: 45,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DF4723',
          borderRadius: 4,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          ENTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
};
