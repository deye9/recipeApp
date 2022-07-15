/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {RecipeCard as styles} from '../assets/AppStyles';

const Header = props => <Text style={styles.headerText}>{props.content}</Text>;

export default Header;
