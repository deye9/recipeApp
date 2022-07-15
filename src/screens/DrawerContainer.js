import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MenuButton from '../components/MenuButton';

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
  const {navigation} = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require('../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('HomeScreen');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.closeDrawer();
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
