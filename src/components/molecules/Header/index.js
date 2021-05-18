import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IcAdd} from '../../../assets';
import {getContactAction} from '../../../redux/action';
import {TextInput} from '../../atoms';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
          <IcAdd />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 180,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },

  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
