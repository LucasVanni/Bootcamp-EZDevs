import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import Logo from '../../assets/images/logo.png';
import Dislike from '../../assets/images/dislike.png';
import Like from '../../assets/images/like.png';

import api from '../../services/api';

// export default ({navigation: {getParam, navigate}}) => {
export default ({navigation: {navigate}}) => {
  const [users, setUsers] = useState('');
  //const [avatar: {uri, bio, name}] = useMemo(() => users[0] || {}, [users]);

  // const onEvaluated = useCallback(() => {
  //     setUsers(users.splice(1));
  // }, [users])

  // const onDislike = useCallback(() => onEvaluate('dislikes'), [onEvaluate]);
  // const onLike = useCallback(() => onEvaluate('likes'), [onEvaluate]);

  //const id = getParam('id');
  // const onLogout = useCallback(() => navigate('login'), []);

  // const loadUsers = useCallback(async () => {
  //   const {data} = await api.get('/devs', {
  //     headers: {
  //       user: id,
  //     },
  //   });

  //   setUsers(data);
  // }, [id]);

  // useEffect(() => {
  //   loadUsers();
  // }, [loadUsers]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justfifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
      }}>
      <TouchableOpacity onPress={onLogout}>
        <Image source={Logo} />
      </TouchableOpacity>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
          margin: 30,
        }}>
        <Image
          style={{
            height: 300,
            width: 300,
          }}
          source={null}
          // source={{uri}}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Nome
          {/* {name} */}
        </Text>
        <Text
          style={{fontSize: 14, color: '#999', marginTop: 5, lineHeight: 18}}
          numberOfLines={3}>
          Biografia
          {/* {bio} */}
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => onEvaluated()}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#FFF',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
              elevation: 2,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 2,
              shadowOffset: {
                width: 0,
                height: 2,
              },
            }}>
            <Image source={Dislike} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onEvaluated()}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#FFF',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
              elevation: 2,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 2,
              shadowOffset: {
                width: 0,
                height: 2,
              },
            }}>
            <Image source={Like} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
