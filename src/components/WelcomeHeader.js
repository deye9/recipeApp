/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import {ImageBackground, Text, useColorScheme} from 'react-native';
import React from 'react';
import {RecipeCard as styles} from '../assets/AppStyles';

const WelcomeHeader = props => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // <ImageBackground
    //   accessibilityRole="image"
    //   source={require('../assets/images/Eating.jpeg')}
    //   style={[
    //     styles.welcomeBackground,
    //     {
    //       backgroundColor: isDarkMode
    //         ? styles.Colors.darker
    //         : styles.Colors.lighter,
    //     },
    //   ]}
    //   imageStyle={styles.welcomeLogo}>
    <Text
      style={[
        styles.welcomeText,
        // {
        //   color: isDarkMode ? styles.Colors.white : styles.Colors.black,
        // },
      ]}>
      {props.welcomeText}
    </Text>
    // </ImageBackground>
  );
};

export default WelcomeHeader;
