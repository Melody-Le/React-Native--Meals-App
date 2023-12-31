import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryGridTile from './components/CategoryGridTile';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#48a0b6',
        },
        drawerContentStyle: { backgroundColor: '#a0c7d1' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#085468',
        drawerActiveBackgroundColor: '#5dcbe9',
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ focused, color, size }) => {
            return (
              <Ionicons focused={true} name='list' color={color} size={size} />
            );
          },
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => {
            return (
              <Ionicons focused={true} name='star' color={color} size={size} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

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
            name='DrawerScreen'
            component={DrawerNavigator}
            options={{
              // title: 'Meal Categories',
              headerShown: false,
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
