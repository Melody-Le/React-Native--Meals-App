import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({ id, title, imgUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
      mealTitle: title,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPress : null)}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title}> {title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPress: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
  },
});

export default MealItem;
