import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

export const AlertMessage = (title, message, optionNo, optionYes) => {
  Alert.alert(title, message, [
    {
      text: 'NO',
      onPress: optionNo,
    },
    {
      text: 'YES',
      onPress: optionYes,
    },
  ]);
};

const styles = StyleSheet.create({});
