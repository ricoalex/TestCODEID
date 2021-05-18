import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo />
      <View style={{height: 32}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        Contacts
      </Text>
    </View>
  );
};

export default SplashScreen;
