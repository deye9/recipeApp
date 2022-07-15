import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Header from '../components/Header';
import {RecipeCard as styles} from '../assets/AppStyles';
import {getIngredientsByByRecipeId, getRecipeByID} from '../data/APICalls';

const renderItems = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageThumbnail}
        source={{
          uri: item.photo_url,
        }}
      />
      <Text style={styles.titleText}>{item.quantity + ' ' + item.name}</Text>
    </View>
  );
};

const Ingredients = props => {
  const {route} = props;

  const RecipeName =
    'Ingredients for ' + getRecipeByID(route.params.recipeId).title;
  const IngredientList = getIngredientsByByRecipeId(route.params.recipeId);

  return (
    <View style={styles.grid}>
      <Header content={RecipeName} />
      <FlatList
        numColumns={2}
        data={IngredientList}
        renderItem={renderItems}
        keyExtractor={item => item.ingredientId}
      />
    </View>
  );
};

export default Ingredients;
