import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SubTitle from '../components/MealDetail/SubTitle';
import MealDetails from '../components/MealDetails';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import List from '../components/MealDetail/List';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootConteiner}>
      <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
      <Text style={styles.title}> {mealData.title}</Text>
      <MealDetails
        duration={mealData.duration}
        complexity={mealData.complexity}
        affordability={mealData.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOutter}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={mealData.ingredients} />
          <SubTitle>Steps</SubTitle>
          <View>
            <List data={mealData.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootConteiner: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: 'white',
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
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOutter: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
