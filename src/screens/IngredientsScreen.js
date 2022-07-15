import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Header from '../components/Header';
import {getAllIngredients} from '../data/APICalls';
import {RecipeCard as styles} from '../assets/AppStyles';

const renderItems = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageThumbnail}
        source={{
          uri: item.photo_url,
        }}
      />
      <Text style={styles.titleText}>{item.name}</Text>
    </View>
  );
};

const IngredientsScreen = props => {
  const IngredientList = getAllIngredients();

  return (
    <View style={styles.grid}>
      <Header content="All Ingredients" />
      <FlatList
        numColumns={2}
        data={IngredientList}
        renderItem={renderItems}
        keyExtractor={item => item.ingredientId}
      />
    </View>
  );
};

export default IngredientsScreen;
