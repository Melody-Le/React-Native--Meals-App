import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={[styles.title, styles.subTitle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 6,
  },
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
});

export default SubTitle;
