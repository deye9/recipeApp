import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MenuButton from '../components/MenuButton';
import {useNavigation} from '@react-navigation/native';
import Route from '../routes/route';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
});

export default function DrawerContainer(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title={Route.HOME}
          source={require('../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('home_screen');
          }}
        />
        <MenuButton
          title={Route.CATEGORIES}
          source={require('../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('categories');
          }}
        />
        <MenuButton
          title={Route.SEARCH}
          source={require('../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('search_screen');
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
