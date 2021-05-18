import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dummy1, IcNext} from '../../../assets';

const ContactCard = ({name, onPress, image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <IcNext />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'white',
    borderRadius: 19,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    overflow: 'hidden',
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 100,
    height: 60,
    width: 60,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
});
