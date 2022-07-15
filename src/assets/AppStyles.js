import {StyleSheet, StatusBar} from 'react-native';

export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },

  image: {
    width: null,
    height: 220,
    resizeMode: 'cover',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  colors: {
    dark: '#444',
    black: '#000',
    white: '#FFF',
    darker: '#222',
    light: '#DAE1E7',
    primary: '#1292B4',
    lighter: '#F3F3F3',
  },

  titleText: {
    marginTop: 3,
    fontSize: 20,
    marginLeft: 5,
    marginRight: 5,
    color: '#737373',
    textAlign: 'center',
  },

  welcomeText: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },

  headerText: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Recipecategory: {
    fontSize: 14,
    margin: 10,
    color: '#2cd18a',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  RecipeIcon: {
    height: 20,
    width: 20,
    marginRight: 0,
  },

  Button: {
    color: 'white',
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },

  RecipeDescription: {
    fontSize: 16,
    marginTop: 30,
    margin: 15,
    textAlign: 'left',
  },

  headerButtonContainer: {
    padding: 10,
  },

  headerButtonImage: {
    justifyContent: 'center',
    width: 25,
    height: 25,
    margin: 6,
  },

  grid: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
  },

  imageThumbnail: {
    margin: 7,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  flexLeft: {
    width: '50%',
    margin: 5,
    padding: 5,
  },

  flexRight: {
    width: '50%',
    margin: 5,
    padding: 5,
  },

  btnIcon: {
    height: 14,
    width: 14,
  },

  searchContainer: {
    width: 250,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    justifyContent: 'space-between',
  },

  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },

  searchInput: {
    height: 30,
    width: 280,
    color: 'black',
    borderRadius: 10,
    backgroundColor: '#EDEDED',
  },
});
