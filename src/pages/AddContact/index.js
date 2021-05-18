import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcAddPhoto, IcRemovePhoto, NullPhoto} from '../../assets';
import {Button, Gap, HeaderDetail, TextInput} from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showMessage, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {addContactAction, setLoading} from '../../redux/action';

const AddContact = ({navigation, fullName, profession}) => {
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });
  const [hashPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(NullPhoto);

  const dispatch = useDispatch();

  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showMessage(`You didn't select a photo`, 'danger');
        } else {
          // console.log('response image', response);
          const source = {uri: response.uri};

          setForm('photo', `data:${response.type};base64, ${response.base64}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    // console.log(form);
    dispatch(setLoading(true));

    dispatch(addContactAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <HeaderDetail title="Add Contact" onBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.profile}>
            <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
              <Image source={photo} style={styles.avatar} />
              {hashPhoto && <IcRemovePhoto style={styles.addPhoto} />}
              {!hashPhoto && <IcAddPhoto style={styles.addPhoto} />}
            </TouchableOpacity>
          </View>

          <TextInput
            title="First Name"
            backgroundColor="white"
            colorInput="#000"
            value={form.firstName}
            onChangeText={value => setForm('firstName', value)}
          />
          <Gap height={11} />
          <TextInput
            title="Last Name"
            backgroundColor="white"
            colorInput="#000"
            value={form.lastName}
            onChangeText={value => setForm('lastName', value)}
          />
          <Gap height={11} />
          <TextInput
            title="Age"
            backgroundColor="white"
            colorInput="#000"
            value={form.age}
            onChangeText={value => setForm('age', value)}
          />
          <Gap height={34} />
          <View>
            <Button title="SAVE" onPress={uploadAndContinue} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: 'red',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: 'brown',
    marginTop: 4,
  },
});
