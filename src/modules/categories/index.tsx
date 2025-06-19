/* eslint-disable react-hooks/exhaustive-deps */
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getCategories} from './api/actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '@utils/Constants';
import {navigate} from '@navigation/NavigationUtil';

const Categories: FC = () => {
  const dispatch = useAppDispatch();

  const {data, loading, error} = useAppSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView />
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.subtitle}>
          Explore our wide range of categories
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator size={'small'} color={'#000'} />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item._id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() =>
                navigate('Products', {
                  id: item._id,
                  name: item.name,
                })
              }>
              <Image source={{uri: item?.image_uri}} style={styles.image} />
              <Text style={styles.name}>{item?.name}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <>
              {error && (
                <Text style={styles.subtitle}>There was an error!</Text>
              )}
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F9EC',
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: RFValue(18),
    fontFamily: FONTS.heading,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: RFValue(13),
    color: '#666',
    marginTop: 5,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: RFValue(12),
    fontWeight: '500',
    color: '#333',
  },
});
