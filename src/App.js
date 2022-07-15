import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import Categories from './screens/Categories';
import Ingredients from './screens/Ingredients';
import SearchScreen from './screens/SearchScreen';
import RecipeScreen from './screens/RecipeScreen';
import RecipeDetails from './screens/RecipeDetails';
import DrawerContainer from './screens/DrawerContainer';
import CategoriesScreen from './screens/CategoriesScreen';
import IngredientsScreen from './screens/IngredientsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          flex: 1,
          fontweight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
        },
      }}>
      <Stack.Screen
        name="home_screen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="recipe_screen"
        component={RecipeScreen}
        options={{title: 'Recipes'}}
      />
      <Stack.Screen
        name="ingredients_screen"
        component={IngredientsScreen}
        options={{title: 'Ingredients'}}
      />
      <Stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{title: 'Categories'}}
      />

      <Stack.Screen
        name="recipe_details"
        component={RecipeDetails}
        options={{title: 'Recipe Details'}}
      />
      <Stack.Screen
        name="ingredients"
        component={Ingredients}
        options={{title: 'Recipe Ingredients'}}
      />
      <Stack.Screen
        name="category_details"
        component={Categories}
        options={{title: 'Recipes In Category'}}
      />
      <Stack.Screen
        name="search_screen"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Home"
      backBehavior="history"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({Navigation}) => (
        <DrawerContainer Navigation={Navigation} />
      )}>
      <Drawer.Screen name="Home" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
