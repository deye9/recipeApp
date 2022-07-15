import React from 'react';
import {View, Pressable, Image, Text, FlatList} from 'react-native';

import Header from '../components/Header';
import {RecipeCard as styles} from '../assets/AppStyles';
import {getRecipeByCategoryID, getCategoryName} from '../data/APICalls';

const Categories = props => {
  const {navigation, route} = props;

  const CategoryName = getCategoryName(route.params.categoryId);
  const CategoryList = getRecipeByCategoryID(route.params.categoryId);

  const onPressRecipe = recipeId => {
    navigation.navigate('recipe_details', {recipeId});
  };

  const renderRecipes = ({item}) => (
    <View style={styles.container}>
      <Pressable
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item.recipeId)}>
        <Image
          style={styles.imageThumbnail}
          source={{
            uri: item.photo_url,
          }}
        />
      </Pressable>
      <Text style={styles.Recipecategory}>
        {getCategoryName(item.categoryId)}
      </Text>
      <Text style={styles.titleText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.grid}>
      <Header content={'Recipes in ' + CategoryName} />
      <FlatList
        numColumns={2}
        data={CategoryList}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

export default Categories;
