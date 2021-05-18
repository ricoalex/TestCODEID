import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getContactAction} from '../../redux/action';
import {ContactCard, Header, TextInput} from './../../components';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state.getContactReducer);

  useEffect(() => {
    dispatch(getContactAction());
    dataRow;
  }, []);

  // FOR SEARCH AUTOMATIC
  const [searchValue, setSearchValue] = useState('');
  const searchValueLet = searchValue.trim().toLowerCase();
  let newContact = [];
  if (contacts.length > 0) {
    newContact = contacts.filter(row => {
      return (
        row.firstName.toLowerCase().match(searchValueLet) ||
        row.lastName.toLowerCase().match(searchValueLet) ||
        `${row.firstName} ${row.lastName}`.toLowerCase().match(searchValueLet)
      );
    });
  }

  // END OF SEARCH

  const dataRow = newContact.map(item => {
    return (
      <ContactCard
        key={item.id}
        name={`${item.firstName} ${item.lastName}`}
        image={{uri: item.photo}}
        onPress={() => navigation.navigate('DetailContact', item)}
      />
    );
  });

  return (
    <View style={styles.page}>
      <Header title="Contacts" />
      <View style={styles.inputSearch}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#A6A6A6"
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
        />
      </View>

      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          {dataRow}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    marginTop: -30,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  inputSearch: {
    position: 'absolute',
    top: 90,
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
});
