import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MoviesActions from '../store/actionCreators';
import { DATA } from '../../movie-list';

const Movies = (props) => {

  const {moviesActions} = props;

  useEffect(() => {
    moviesActions.setMovies(DATA)
	}, []);


  const {movies} = props;
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.homePageTitle}>Movies</Text>
          </View>
          <View style={styles.bodyContainer}>
            <FlatList
              data={movies}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Single list item template
const renderItem = ({ item }) => (
  <View style={styles.singleListItemContainer}>

    {/* movie thumbnail */}
    <View style={styles.thumbnailContainer}>
      <Image
        style={styles.movieImage}
        source={{
          uri: item.thumbnail,
        }}
      />
    </View>

    {/* Other information */}
    <View style={styles.informationContainer}>
      <Text style={styles.movieName}>{item.title}</Text>
      <Text style={styles.movieInfoText}>{item.year + ', ' + item.duration}</Text>

      {/* Watch Now button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => { Linking.openURL(item.youtubeUrl); }}
      >
        <Text style={styles.watchNowSty}>Watch Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  homePageTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    color: 'black'
  },
  bodyContainer: {
    flex: 9,
  },
  movieName: {
    fontSize: 16,
    color: '#222'
  },
  singleListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  thumbnailContainer: {
    flex: 50,
  },
  informationContainer: {
    flex: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  movieInfoText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10
  },
  movieImage: {
    width: 120,
    height: 150,
    borderRadius: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e73e42",
    justifyContent: 'center',
    width: 120,
    height: 32,
    borderRadius: 5
  },
  watchNowSty: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
});

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = dispatch => ({
  moviesActions: bindActionCreators(MoviesActions, dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movies);

