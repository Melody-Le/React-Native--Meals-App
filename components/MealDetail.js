import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealDetail({ route }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Text>Meal Detail</Text>
    </View>
  );
}

export default MealDetail;
