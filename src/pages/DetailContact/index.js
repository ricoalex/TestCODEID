import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {HeaderDetail} from '../../components';
import {deleteContactAction, setLoading} from '../../redux/action';

const DetailContact = ({route, navigation}) => {
  const data = route.params;
  const {id, firstName, lastName, age, photo} = data;
  // console.log(route.params);
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(setLoading(true));
    dispatch(deleteContactAction(id, navigation));
  };

  return (
    <View style={styles.page}>
      <HeaderDetail
        title={`${firstName} ${lastName}`}
        onBack={() => navigation.goBack()}
        onChange
        onEdit={() => navigation.navigate('EditContact', data)}
        onDelete={onDeleteContact}
      />
      <View style={styles.container}>
        <Image source={{uri: photo}} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.age}>{`${age} years old`}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailContact;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  content: {
    marginTop: 9,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  age: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
});
