import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Text, View, Image, Pressable} from 'react-native';

import {RecipeCard as styles} from '../assets/AppStyles';
import MenuImage from '../components/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
} from '../data/APICalls';
import {TextInput} from 'react-native-gesture-handler';

const SearchScreen = props => {
  const {navigation} = props;

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.SearchContainer}>
          {/* <Image
            style={styles.btnIcon}
            source={require('../assets/icons/search.png')}
          /> */}
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
            placeholder="Search"
          />
          {/* <Pressable onPress={() => handleSearch('')}>
            <Image
              style={styles.btnIcon}
              source={require('../assets/icons/close.png')}
            />
          </Pressable> */}
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [navigation, value]);

  useEffect(() => {}, [value]);

  const handleSearch = text => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text === '') {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = recipeId => {
    navigation.navigate('recipe_details', {recipeId});
  };

  const renderRecipes = ({item}) => (
    <View style={styles.grid}>
      <Pressable
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item.recipeId)}>
        <View style={styles.container}>
          <Image style={styles.imageThumbnail} source={{uri: item.photo_url}} />
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.Recipecategory}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

export default SearchScreen;
