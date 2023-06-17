import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((item, index) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: 'white',
  },
  itemText: {
    color: '#426269',
    textAlign: 'center',
  },
});

export default List;
