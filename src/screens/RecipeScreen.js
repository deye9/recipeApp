import React from 'react';
import {View, Pressable, Image, Text, FlatList} from 'react-native';

import Header from '../components/Header';
import {RecipeCard as styles} from '../assets/AppStyles';
import {getAllRecipes, getCategoryName} from '../data/APICalls';

const RecipeScreen = props => {
  const {navigation} = props;
  const RecipeList = getAllRecipes();

  const onPressRecipe = recipeId => {
    navigation.navigate('recipe_details', {recipeId});
  };

  const onPressCategory = categoryId => {
    navigation.navigate('category_details', {categoryId});
  };

  const renderRecipes = ({item}) => (
    <View style={styles.container}>
      <Pressable
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item.recipeId)}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Image
          style={styles.imageThumbnail}
          source={{
            uri: item.photo_url,
          }}
        />
      </Pressable>

      <Pressable
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressCategory(item.categoryId)}>
        <Text style={styles.Recipecategory}>
          {getCategoryName(item.categoryId)}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.grid}>
      <Header content="Available Recipes" />
      <FlatList
        numColumns={2}
        data={RecipeList}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

export default RecipeScreen;
