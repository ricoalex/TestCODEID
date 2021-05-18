import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({
  title,
  placeholder,
  placeholderTextColor,
  colorLabel = '#A6A6A6',
  backgroundColor = '#323232',
  borderColor = 'rgba(166, 166, 166, 1)',
  colorInput = '#FFFFFF',
  ...restProps
}) => {
  return (
    <View>
      <Text style={styles.label(colorLabel)}>{title}</Text>
      <TextInputRN
        style={styles.input(backgroundColor, borderColor, colorInput)}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: colorLabel => ({
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colorLabel,
  }),
  input: (backgroundColor, borderColor, colorInput) => ({
    borderWidth: 1,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderRadius: 10,
    padding: 10,
    color: colorInput,
  }),
});
