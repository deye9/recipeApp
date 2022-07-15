import React from 'react';
import {Text, View, Image, Pressable, ScrollView} from 'react-native';

import Separator from '../components/Seperator';
import WelcomeHeader from '../components/WelcomeHeader';
import {RecipeCard as styles} from '../assets/AppStyles';

const HomeScreen = props => {
  const {navigation} = props;

  const onPressRecipe = () => {
    navigation.navigate('recipe_screen');
  };

  const onPressCategory = () => {
    navigation.navigate('categories');
  };

  const onPressIngredients = () => {
    navigation.navigate('ingredients_screen');
  };

  const onPressSearch = () => {
    navigation.navigate('search_screen');
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader
        welcomeText={
          'Welcome to' + '\n' + 'your new' + '\n' + 'React Native App'
        }
      />
      <Separator />
      <ScrollView>
        <View style={styles.flexContainer}>
          <Pressable onPress={() => onPressRecipe()} style={styles.flexLeft}>
            <Image
              style={styles.image}
              source={require('../assets/images/Recipes.jpg')}
            />
            <Text style={styles.titleText}>Recipes</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressIngredients()}
            style={styles.flexRight}>
            <Image
              style={styles.image}
              source={require('../assets/images/Ingredients.jpg')}
            />
            <Text style={styles.titleText}>Ingredients</Text>
          </Pressable>
        </View>
        <View style={styles.flexContainer}>
          <Pressable onPress={() => onPressCategory()} style={styles.flexLeft}>
            <Image
              style={styles.image}
              source={require('../assets/images/Categories.jpg')}
            />
            <Text style={styles.titleText}>Categories</Text>
          </Pressable>
          <Pressable onPress={() => onPressSearch()} style={styles.flexRight}>
            <Image
              style={styles.image}
              source={require('../assets/images/Search.png')}
            />
            <Text style={styles.titleText}>Search</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Separator />
    </View>
  );
};

export default HomeScreen;
