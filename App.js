import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from './components/CategoryGridTile';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#48a0b6',
            },
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'Meal Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return { title: catId };
            }}
          />

          {/* <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} /> */}
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            options={({ route, navigation }) => {
              const title = route.params.mealTitle;
              return {
                title: title,
                // headerRight: () => {
                //   return <Button title='Tap me' />;
                // },
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#957c7c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
