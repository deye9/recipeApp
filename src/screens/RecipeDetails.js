import React from 'react';
import {Text, View, Image, ScrollView, Button} from 'react-native';

import Header from '../components/Header';
import {getRecipeByID, getCategoryName} from '../data/APICalls';
import {RecipeCard as styles} from '../assets/AppStyles';

const RecipeDetails = props => {
  const {navigation, route} = props;
  const Recipe = getRecipeByID(route.params.recipeId);

  const onPressIngredients = () => {
    navigation.navigate('ingredients', {recipeId: Recipe.recipeId});
  };

  return (
    <View style={styles.container}>
      <Header content={Recipe.title + ' Recipe'} />
      <Image
        style={styles.image}
        source={{
          uri: Recipe.photo_url,
        }}
      />

      <View>
        <Text style={styles.Recipecategory}>
          {getCategoryName(Recipe.categoryId) + '.     '}
          {/* </Text>
        <Text style={styles.RecipeTime}> */}
          <Image
            source={require('../assets/icons/time.png')}
            style={styles.RecipeIcon}
          />
          {Recipe.time} minutes
        </Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.RecipeDescription}>{Recipe.description}</Text>
          <Button
            style={styles.Button}
            title="View Ingredients"
            onPress={() => onPressIngredients()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;
