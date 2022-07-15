import React from 'react';
import {View, Pressable, Image, Text, FlatList} from 'react-native';

import Header from '../components/Header';
import Separator from '../components/Seperator';
import {RecipeCard as styles} from '../assets/AppStyles';
import {getAllCategories, getNumberOfReceipes} from '../data/APICalls';

const CategoriesScreen = props => {
  const {navigation} = props;
  const CategoryList = getAllCategories();

  const onPressCategory = categoryId => {
    navigation.navigate('category_details', {categoryId});
  };

  const renderCategories = ({item}) => (
    <View style={styles.container}>
      <Pressable
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressCategory(item.id)}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: item.photo_url,
          }}
        />

        <Text style={styles.Recipecategory}>{item.name}</Text>
        <Text style={styles.titleText}>
          {getNumberOfReceipes(item.id) + ' recipes'}
        </Text>
      </Pressable>
      <Separator />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header content="Available Categories" />
      <FlatList
        numColumns={1}
        data={CategoryList}
        renderItem={renderCategories}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default CategoriesScreen;
