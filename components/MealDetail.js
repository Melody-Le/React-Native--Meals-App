import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealDetail({ route }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
        <Text style={styles.title}> {mealData.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{mealData.duration}m</Text>
        <Text style={styles.detailItem}>
          {mealData.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {mealData.affordability.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text style={[styles.title, styles.subTitle]}>Ingredients</Text>
        <View>
          {mealData.ingredients.map((ingredient) => (
            <View style={styles.listItemOutter}>
              <Text key={ingredient} style={styles.listItemInner}>
                {ingredient}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text style={[styles.title, styles.subTitle]}>Steps</Text>
        <View>
          {mealData.steps.map((step, index) => (
            <View style={styles.listItemOutter}>
              <Text key={index} style={styles.listItemInner}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  listItemOutter: {
    // backgroundColor: 'white',
    // padding: 8,
    borderRadius: 6,
    margin: 8,
  },
  listItemInner: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6,
    // margin: 8,
  },
});

export default MealDetail;
