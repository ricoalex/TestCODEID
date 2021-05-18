import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack, IcDelete, IcEdit} from '../../../assets';

const HeaderDetail = ({title, onBack, onChange, onEdit, onDelete}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {onChange && (
        <>
          <View style={styles.change}>
            <TouchableOpacity activeOpacity={0.5} onPress={onEdit}>
              <IcEdit />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} onPress={onDelete}>
              <IcDelete />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default HeaderDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  change: {
    // flex: 1,
    flexDirection: 'row',
    width: 66,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },

  back: {
    padding: 10,
    marginRight: 16,
    marginLeft: -10,
  },
});
