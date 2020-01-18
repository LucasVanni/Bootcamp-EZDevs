import react, { useState, useEffect } from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import Logo from '../../assets/images/logo.png'
import api from '../../services/api';

export default ({navigation: {getParam, navigate}}) => {

    const [user, setUsers] = useState('')
    const id = getParam('id');
    const onLogout = useCallback(() => navigate('login'), []));
  
    const loadUsers = useCallback(async () => {
       const {data} = await api.get('/devs', {
           headers: {
               user: id,
           }
       });

       setUsers(data)

    }, [id])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justfifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
      }}>
      <TouchableOpacity onPress={onLogout}>
        <Image source={logo} />
      </TouchableOpacity>

      <View style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          margin: 30,
      }}>
          <Image 
            style={{
              height: 300,
              width: 300
            }} 
            source={null}
        />
      </View>

    </View>
  );
};
