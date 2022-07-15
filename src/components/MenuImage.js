import React from 'react';
import {Pressable, Image} from 'react-native';
import PropTypes from 'prop-types';
import {RecipeCard as styles} from '../assets/AppStyles';

export default function MenuImage(props) {
  return (
    <Pressable style={styles.headerButtonContainer} onPress={props.onPress}>
      <Image
        style={styles.headerButtonImage}
        source={require('../assets/icons/menu.png')}
      />
    </Pressable>
  );
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
};
